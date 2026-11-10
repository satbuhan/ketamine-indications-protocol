(function () {
  "use strict";

  // This tool's own slug — skips self-links when another tool's glossary
  // term points back here, and builds this tool's own deep links when it's
  // the one being pointed at.
  const TOOL_SLUG = "ketamine-indications-protocol";

  /* The source figure (the manuscript's own Figure 1) is ONE diagram, not
     several independent panels — unlike epinephrine-revisited-protocol's
     four-panel page or wbct-trauma-protocol's single trunk. Its shape is:
       [Pharmacology Snapshot | Strengths/Weaknesses]  (disconnected, top)
        -> trigger -> "What is the clinical indication?"
        -> FIVE parallel indication lanes, each its own short vertical
           stack (two lanes — RSI/Airway, Haemodynamic Instability — carry
           their own small decision + a 2-wide dead-end outcome pair)
        [Monitoring & Safety Essentials row]   (disconnected)
        [Special Populations row]              (disconnected)
        [ICP Myth Revised banner]              (disconnected, closing)

     A single lane needs MULTIPLE rows of its own while staying in one
     column track — something the shared "N-wide same-row group" mechanism
     (GROUP_COLUMNS + one wrap div per row, used everywhere else in the
     atlas for side-by-side siblings) was never built to do on its own.
     Rather than force it, this tool renders the whole page with one
     bespoke renderFlow() below: ordinary full-width nodes via nodeEl()
     exactly as elsewhere, short same-row groups via appendGroup() (the
     same idea as GROUP_COLUMNS, just inlined), and the five lanes via
     renderLanes() — a NESTED single-column mini-grid per lane, each lane
     stacking its own nodes (and, for RSI/Haemodynamic Instability, its own
     nested 2-wide outcome pair) independently of how tall its neighbours
     are. Edge-drawing is untouched: drawPanelEdges() below just looks up
     elements by id and reads their live bounding rects, so it doesn't care
     that some of this page's nodes live inside nested lane wrappers. */

  const LAYOUT = {
    ketamine_trigger: { col: "full" },
    indication_type: { col: "full", decision: true },
    rsi_hemodynamic: { decision: true },
    hemo_catecholamine: { decision: true },
    monitoring_header: { col: "full" },
    special_pop_header: { col: "full" },
    icp_myth: { col: "full" }
  };

  // Each lane: an ordered list of node ids, OR, for a lane with its own
  // small decision + two true dead-end outcomes, a { pair: [...] } entry
  // that renders those two outcomes side by side (the atlas's established
  // same-row dead-end fan-out pattern — see METHODOLOGY.md) one level
  // deeper, inside that lane's own column instead of the full page width.
  const LANES = [
    ["proc_sedation_header", "proc_sedation_dose", "proc_sedation_subdiss", "proc_sedation_mgmt"],
    ["rsi_header", "rsi_hemodynamic", { pair: ["rsi_stable", "rsi_shock"] }],
    ["agitation_header", "agitation_dose", "agitation_caution"],
    ["icu_header", "icu_dose", "icu_benefits", "icu_guideline"],
    ["hemo_header", "hemo_catecholamine", { pair: ["hemo_yes", "hemo_depleted"] }]
  ];

  const EDGES = [
    ["ketamine_trigger", "indication_type"],
    ["indication_type", "proc_sedation_header"],
    ["indication_type", "rsi_header"],
    ["indication_type", "agitation_header"],
    ["indication_type", "icu_header"],
    ["indication_type", "hemo_header"],

    ["proc_sedation_header", "proc_sedation_dose"],
    ["proc_sedation_dose", "proc_sedation_subdiss"],
    ["proc_sedation_subdiss", "proc_sedation_mgmt"],

    ["rsi_header", "rsi_hemodynamic"],
    ["rsi_hemodynamic", "rsi_stable", "Stable/mild"],
    ["rsi_hemodynamic", "rsi_shock", "Septic/shock"],

    ["agitation_header", "agitation_dose"],
    ["agitation_dose", "agitation_caution"],

    ["icu_header", "icu_dose"],
    ["icu_dose", "icu_benefits"],
    ["icu_benefits", "icu_guideline"],

    ["hemo_header", "hemo_catecholamine"],
    ["hemo_catecholamine", "hemo_yes", "Intact"],
    ["hemo_catecholamine", "hemo_depleted", "Depleted"]

    // Pharmacology Snapshot / Strengths-Weaknesses (top) and Monitoring &
    // Safety / Special Populations / ICP Myth Revised (bottom) are fully
    // disconnected in the source — no arrow in or out of any of them —
    // matching the rest of the atlas's reference-only summary panels.
  ];

  const byId = {};
  NODES.forEach((n) => (byId[n.id] = n));

  /* ---- plain-text safety + glossary auto-linking ---- */
  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  // longest match first, so a longer term wins over any shorter overlapping one
  const GLOSSARY_SORTED = GLOSSARY.slice().sort((a, b) => b.match.length - a.match.length);

  /* ---- agent (drug) name emphasis ----
     Rendering-only: wraps every case-insensitive, whole-word occurrence of
     a name in AGENTS (content.js) in a plain <strong class="agent-name">
     span — never a link/button, since this also runs inside the diagram
     .node <button>, where a nested interactive element would be invalid
     HTML. Unlike glossary terms, every occurrence is wrapped, not just the
     first, and label/sub text itself is never altered — only how it's
     rendered. */
  const AGENTS_SORTED = (typeof AGENTS !== "undefined" ? AGENTS : [])
    .slice()
    .sort((a, b) => b.length - a.length);

  function highlightAgentsHtml(rawText) {
    const text = escapeHtml(rawText);
    let result = "";
    let cursor = 0;
    while (cursor < text.length) {
      let best = null;
      for (const name of AGENTS_SORTED) {
        const re = new RegExp("\\b" + name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "\\b", "i");
        const m = re.exec(text.slice(cursor));
        if (
          m &&
          (!best || m.index < best.index || (m.index === best.index && m[0].length > best.text.length))
        ) {
          best = { index: m.index, text: m[0] };
        }
      }
      if (!best) break;
      const matchStart = cursor + best.index;
      const matchEnd = matchStart + best.text.length;
      result += text.slice(cursor, matchStart);
      result += '<strong class="agent-name">' + best.text + "</strong>";
      cursor = matchEnd;
    }
    result += text.slice(cursor);
    return result;
  }

  /* ---- cross-atlas concept links ----
     A term that's independently glossary-defined in 2+ tools (checked and
     curated by hand when the index was built) gets an "Also covered in"
     line added under its definition, deep-linking straight to the other
     tool's node via its #node-<id> hash. Fetched once, best-effort: the
     page works identically if this never loads. */
  let CONCEPTS = null;
  let currentNodeId = null;
  fetch("https://satbuhan.github.io/clinical-algorithm-atlas/assets/concepts.json")
    .then((r) => (r.ok ? r.json() : null))
    .then((data) => {
      CONCEPTS = (data && data.terms) || {};
      if (currentNodeId) selectNode(currentNodeId);
    })
    .catch(() => {
      CONCEPTS = {};
    });

  function crossLinksHtml(matchText) {
    if (!CONCEPTS) return "";
    const entries = CONCEPTS[matchText.toLowerCase().trim()];
    if (!entries) return "";
    const others = entries.filter((o) => o.tool !== TOOL_SLUG);
    if (!others.length) return "";
    const links = others
      .map((o) => {
        const href = o.nodeId ? o.url + "#node-" + o.nodeId : o.url;
        return '<a href="' + href + '">' + escapeHtml(o.title) + " →</a>";
      })
      .join(", ");
    return '<p class="term-crosslinks">Also covered in: ' + links + "</p>";
  }

  function linkify(rawText, usedTerms) {
    const text = escapeHtml(rawText);
    let result = "";
    let cursor = 0;
    while (cursor < text.length) {
      let best = null;
      for (const g of GLOSSARY_SORTED) {
        if (usedTerms.has(g.match)) continue;
        const re = new RegExp("\\b" + g.match.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "\\b");
        const m = re.exec(text.slice(cursor));
        if (
          m &&
          (!best || m.index < best.index || (m.index === best.index && m[0].length > best.text.length))
        ) {
          best = { index: m.index, text: m[0], kind: "term", g };
        }
      }
      for (const name of AGENTS_SORTED) {
        const re = new RegExp("\\b" + name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "\\b", "i");
        const m = re.exec(text.slice(cursor));
        if (
          m &&
          (!best || m.index < best.index || (m.index === best.index && m[0].length > best.text.length))
        ) {
          best = { index: m.index, text: m[0], kind: "agent" };
        }
      }
      if (!best) break;
      const matchStart = cursor + best.index;
      const matchEnd = matchStart + best.text.length;
      result += text.slice(cursor, matchStart);
      if (best.kind === "agent") {
        result += '<strong class="agent-name">' + best.text + "</strong>";
      } else {
        const g = best.g;
        const label = g.full ? g.full[0].toUpperCase() + g.full.slice(1) : "";
        result +=
          '<button type="button" class="term" aria-expanded="false">' +
          best.text +
          "</button>" +
          '<span class="term-def" hidden>' +
          (g.full ? "<strong>" + escapeHtml(label) + "</strong> — " : "") +
          escapeHtml(g.def) +
          crossLinksHtml(g.match) +
          "</span>";
        usedTerms.add(g.match);
      }
      cursor = matchEnd;
    }
    result += text.slice(cursor);
    return result;
  }

  function nodeEl(n) {
    const layout = LAYOUT[n.id] || {};
    const btn = document.createElement("button");
    btn.type = "button";
    btn.id = "node-" + n.id;
    btn.dataset.node = n.id;
    btn.setAttribute("aria-pressed", "false");

    let cls = "node";
    if (layout.decision) cls += " node--decision";
    if (n.type === "terminal") cls += " node--terminal";
    if (n.tone === "key") cls += " node--key";
    if (n.tone === "alarm") cls += " node--alarm";
    if (n.tone === "note") cls += " node--note";
    if (layout.col) cls += " " + layout.col;
    btn.className = cls;

    const title = document.createElement("span");
    title.className = "node__title";
    title.innerHTML = highlightAgentsHtml(n.label);
    btn.appendChild(title);

    if (n.sub) {
      const sub = document.createElement("span");
      sub.className = "node__sub";
      sub.innerHTML = highlightAgentsHtml(n.sub);
      btn.appendChild(sub);
    }

    btn.addEventListener("click", () => selectNode(n.id));
    return btn;
  }

  // One same-row N-wide group, e.g. the Pharmacology Snapshot / Strengths-
  // Weaknesses pair, or the Special Populations row of four.
  function appendGroup(flowEl, cols, ids) {
    const wrap = document.createElement("div");
    wrap.className = "flow-wrap-" + cols;
    ids.forEach((id) => wrap.appendChild(nodeEl(byId[id])));
    flowEl.appendChild(wrap);
  }

  // The five parallel indication lanes. Each lane is its own nested,
  // single-column mini-grid (independent row count per lane) laid out
  // side by side inside one flow-wrap-5 — see the architecture comment at
  // the top of this file.
  function renderLanes(flowEl, lanes) {
    const wrap = document.createElement("div");
    wrap.className = "flow-wrap-5";
    lanes.forEach((laneNodes) => {
      const laneEl = document.createElement("div");
      laneEl.className = "lane";
      laneNodes.forEach((item) => {
        if (item && item.pair) {
          const pairWrap = document.createElement("div");
          pairWrap.className = "flow-wrap-2";
          item.pair.forEach((id) => pairWrap.appendChild(nodeEl(byId[id])));
          laneEl.appendChild(pairWrap);
        } else {
          laneEl.appendChild(nodeEl(byId[item]));
        }
      });
      wrap.appendChild(laneEl);
    });
    flowEl.appendChild(wrap);
  }

  function renderFlow(flowEl) {
    appendGroup(flowEl, 2, ["pharm_snapshot", "strengths_weaknesses"]);

    flowEl.appendChild(nodeEl(byId.ketamine_trigger));
    flowEl.appendChild(nodeEl(byId.indication_type));

    renderLanes(flowEl, LANES);

    flowEl.appendChild(nodeEl(byId.monitoring_header));
    appendGroup(flowEl, 2, ["monitoring_airway", "monitoring_emergence"]);

    flowEl.appendChild(nodeEl(byId.special_pop_header));
    appendGroup(flowEl, 4, ["special_tbi", "special_asthma", "special_geriatric", "special_pregnancy"]);

    flowEl.appendChild(nodeEl(byId.icp_myth));
  }

  function clearActive() {
    document.querySelectorAll(".node.is-active").forEach((el) => {
      el.classList.remove("is-active");
      el.setAttribute("aria-pressed", "false");
    });
  }

  const readout = document.getElementById("readout");
  const readoutIdle = document.getElementById("readoutIdle");
  const readoutContent = document.getElementById("readoutContent");
  const readoutClose = document.getElementById("readoutClose");
  const backdrop = document.getElementById("backdrop");

  function kindTag(ids) {
    return ids
      .map((id) => '<a class="refchip" href="#ref-' + id + '">[' + id + "]</a>")
      .join("");
  }

  function selectNode(id) {
    const n = byId[id];
    if (!n) return;
    currentNodeId = id;
    clearActive();
    const el = document.getElementById("node-" + id);
    if (el) {
      el.classList.add("is-active");
      el.setAttribute("aria-pressed", "true");
    }

    readoutIdle.hidden = true;
    readoutContent.hidden = false;

    const usedTerms = new Set();

    let html = "";
    html += '<p class="readout__tag">' + escapeHtml(n.type) + "</p>";
    html += '<h2 class="readout__title">' + highlightAgentsHtml(n.label) + "</h2>";
    if (n.sub) html += '<p class="readout__sub">' + highlightAgentsHtml(n.sub) + "</p>";
    html += "<h3>What this means</h3><p>" + linkify(n.meaning, usedTerms) + "</p>";
    html += "<h3>Why</h3><p>" + linkify(n.rationale, usedTerms) + "</p>";
    if (n.cautions && n.cautions.length) {
      html +=
        "<h3>Cautions &amp; special populations</h3><ul class=\"caution-list\">" +
        n.cautions.map((c) => "<li>" + linkify(c, usedTerms) + "</li>").join("") +
        "</ul>";
    }
    html += "<h3>References</h3><div class=\"refchips\">" + kindTag(n.refs) + "</div>";

    readoutContent.innerHTML = html;

    if (window.matchMedia("(max-width: 900px)").matches) {
      readout.classList.add("is-open");
      backdrop.classList.add("is-open");
    }
  }

  function closeReadout() {
    readout.classList.remove("is-open");
    backdrop.classList.remove("is-open");
  }

  readoutContent.addEventListener("click", (e) => {
    const btn = e.target.closest(".term");
    if (!btn) return;
    const def = btn.nextElementSibling;
    if (!def || !def.classList.contains("term-def")) return;
    const open = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", open ? "false" : "true");
    def.hidden = open;
  });

  readoutClose.addEventListener("click", closeReadout);
  backdrop.addEventListener("click", closeReadout);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeReadout();
  });

  /* ---- references list ---- */
  function renderReferences() {
    const list = document.getElementById("referencesList");
    const count = document.getElementById("refCount");
    const verified = typeof VERIFIED !== "undefined" ? VERIFIED : null;
    if (count) {
      count.textContent = "(" + REFERENCES.length + ")" + (verified ? " — verified " + verified : "");
    }
    REFERENCES.forEach((r) => {
      const li = document.createElement("li");
      li.id = "ref-" + r.id;
      const linkHtml = r.url
        ? "<br><a href=\"" +
          r.url +
          '" target="_blank" rel="noopener">' +
          r.url +
          "</a>"
        : "";
      li.innerHTML =
        r.text + ' <span class="kind">' + r.kind + "</span>" + linkHtml;
      list.appendChild(li);
    });
  }

  /* ---- connector lines (desktop + mobile, same drawing) ---- */
  function pointAt(flowEl, el, side) {
    const flowRect = flowEl.getBoundingClientRect();
    const r = el.getBoundingClientRect();
    const x = {
      left: r.left,
      right: r.right,
      center: (r.left + r.right) / 2
    };
    const y = {
      top: r.top,
      bottom: r.bottom,
      center: (r.top + r.bottom) / 2
    };
    return {
      x: x[side.x] - flowRect.left,
      y: y[side.y] - flowRect.top
    };
  }

  function drawEdges(flowEl, edgesSvg, edges) {
    const flowRect = flowEl.getBoundingClientRect();
    edgesSvg.setAttribute("width", flowRect.width);
    edgesSvg.setAttribute("height", flowRect.height);
    edgesSvg.setAttribute("viewBox", "0 0 " + flowRect.width + " " + flowRect.height);
    edgesSvg.innerHTML =
      '<defs><marker id="arrow" markerWidth="9" markerHeight="9" refX="6.5" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="#4A6684"/></marker></defs>';

    edges.forEach(([fromId, toId, label, variant]) => {
      const a = document.getElementById("node-" + fromId);
      const b = document.getElementById("node-" + toId);
      if (!a || !b) return;
      const ar = a.getBoundingClientRect();
      const br = b.getBoundingClientRect();

      // Compare vertical CENTERS, not tops: a decision diamond is
      // vertically centred within its row and doesn't stretch to the
      // row's full height, while an ordinary multi-line box can be taller
      // than the row and define the row's height itself.
      const aCenterY = (ar.top + ar.bottom) / 2;
      const bCenterY = (br.top + br.bottom) / 2;

      let p1, p2;
      if (Math.abs(aCenterY - bCenterY) < 8) {
        p1 = pointAt(flowEl, a, { x: ar.left < br.left ? "right" : "left", y: "center" });
        p2 = pointAt(flowEl, b, { x: ar.left < br.left ? "left" : "right", y: "center" });
      } else {
        p1 = pointAt(flowEl, a, { x: "center", y: "bottom" });
        p2 = pointAt(flowEl, b, { x: "center", y: "top" });
      }

      const midY = (p1.y + p2.y) / 2;
      let d =
        Math.abs(p1.y - p2.y) < 4
          ? "M" + p1.x + "," + p1.y + " L" + p2.x + "," + p2.y
          : "M" + p1.x + "," + p1.y +
            " C" + p1.x + "," + midY + " " + p2.x + "," + midY + " " + p2.x + "," + p2.y;

      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("d", d);
      path.setAttribute("class", "flow-edge" + (variant === "info" ? " is-info" : ""));
      if (variant !== "info") path.setAttribute("marker-end", "url(#arrow)");
      edgesSvg.appendChild(path);

      if (label) {
        const sameRow = Math.abs(p1.y - p2.y) < 4;
        const lx = sameRow ? (p1.x + p2.x) / 2 : p2.x + (p1.x > p2.x ? -10 : 10);
        const ly = sameRow ? p1.y - 8 : p1.y + (p2.y - p1.y) * 0.22;

        const labelW = Math.max(28, label.length * 6.1 + 12);

        const bg = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        bg.setAttribute("class", "edge-label-bg");
        bg.setAttribute("x", lx - labelW / 2);
        bg.setAttribute("y", ly - 11);
        bg.setAttribute("width", labelW);
        bg.setAttribute("height", 14);
        edgesSvg.appendChild(bg);

        const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text.setAttribute("class", "edge-label");
        text.setAttribute("x", lx);
        text.setAttribute("y", ly);
        text.setAttribute("text-anchor", "middle");
        text.textContent = label;
        edgesSvg.appendChild(text);
      }
    });
  }

  const flowEl = document.getElementById("flow");
  const edgesSvg = document.getElementById("edges");

  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => drawEdges(flowEl, edgesSvg, EDGES), 120);
  });

  renderFlow(flowEl);
  renderReferences();
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => drawEdges(flowEl, edgesSvg, EDGES));
  }
  window.addEventListener("load", () => drawEdges(flowEl, edgesSvg, EDGES));
  drawEdges(flowEl, edgesSvg, EDGES);

  // Deep link support: "#node-<id>" opens that node's readout and scrolls
  // it into view on arrival.
  const linkedNodeId = window.location.hash.replace(/^#node-/, "");
  if (linkedNodeId && byId[linkedNodeId]) {
    selectNode(linkedNodeId);
    window.addEventListener("load", () => {
      const el = document.getElementById("node-" + linkedNodeId);
      if (el) el.scrollIntoView({ block: "center", inline: "center" });
    });
  }
})();
