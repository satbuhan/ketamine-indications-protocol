# Ketamine in Emergency and Critical Care Medicine: Indication-Based Decision Algorithm

An interactive, referenced walkthrough of the manuscript's own Figure 1:
the contemporary decision-making algorithm for ketamine across five
parallel indications — procedural sedation, rapid sequence intubation
(RSI) / airway management, acute agitation, ICU analgosedation, and
resuscitation of the haemodynamically unstable patient — plus the
monitoring and safety obligations, special-population adjustments, and
the revised intracranial-pressure (ICP) safety evidence that apply across
all of them. Every box and decision point in the diagram can be selected
to reveal, in one place: what the step means, why the algorithm calls for
it, and the sources behind it.

**Live site:** https://satbuhan.github.io/ketamine-indications-protocol/

**Authors:** Dr. Özgür Karcıoğlu & Dr. Satuk Buğra Han Bozatlı

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.24112619.svg)](https://doi.org/10.5281/zenodo.24112619)

This tool is part of a growing atlas of tools built the same way:

- [Clinical Algorithm Atlas](https://satbuhan.github.io/clinical-algorithm-atlas/) — the hub page for all of them
- [Epinephrine/Adrenaline revisited — contemporary decision-making algorithm](https://github.com/satbuhan/epinephrine-revisited-protocol) ([live site](https://satbuhan.github.io/epinephrine-revisited-protocol/))
- [Whole-body CT in traumatic circulatory shock](https://github.com/satbuhan/wbct-trauma-protocol) ([live site](https://satbuhan.github.io/wbct-trauma-protocol/))
- [Vasopressor (aminergic) agent selection in shock states](https://github.com/satbuhan/vasopressor-shock-protocol) ([live site](https://satbuhan.github.io/vasopressor-shock-protocol/))
- [Reperfusion therapy in acute pulmonary thromboembolism](https://github.com/satbuhan/pte-thrombolysis-protocol) ([live site](https://satbuhan.github.io/pte-thrombolysis-protocol/))
- [Acute aortic dissection — initial medical management](https://github.com/satbuhan/aortic-dissection-protocol) ([live site](https://satbuhan.github.io/aortic-dissection-protocol/))
- [Ketamine in head injury — safety analysis & complication management](https://github.com/satbuhan/ketamine-head-injury-protocol) ([live site](https://satbuhan.github.io/ketamine-head-injury-protocol/))
- [Butyrophenone selection — acute agitation & hyperactive delirium](https://github.com/satbuhan/agitation-delirium-protocol) ([live site](https://satbuhan.github.io/agitation-delirium-protocol/))
- [Influenza antiviral selection — baloxavir marboxil vs oseltamivir](https://github.com/satbuhan/influenza-antiviral-protocol) ([live site](https://satbuhan.github.io/influenza-antiviral-protocol/))
- [Dexketoprofen vs ibuprofen — selecting an NSAID for acute pain](https://github.com/satbuhan/nsaid-pain-protocol) ([live site](https://satbuhan.github.io/nsaid-pain-protocol/))
- [Anticoagulant reversal in gastrointestinal haemorrhage](https://github.com/satbuhan/anticoagulant-reversal-protocol) ([live site](https://satbuhan.github.io/anticoagulant-reversal-protocol/))
- [The adult with obesity in emergency and critical care](https://github.com/satbuhan/obesity-critical-care-protocol) ([live site](https://satbuhan.github.io/obesity-critical-care-protocol/))
- [Dapagliflozin / SGLT2 inhibitor — overdose and acute illness management](https://github.com/satbuhan/dapagliflozin-overdose-protocol) ([live site](https://satbuhan.github.io/dapagliflozin-overdose-protocol/))
- [Lidocaine vs prilocaine — local anaesthesia for laceration repair](https://github.com/satbuhan/lidocaine-prilocaine-protocol) ([live site](https://satbuhan.github.io/lidocaine-prilocaine-protocol/))
- [LMWH selection & renal dosing in unstable angina / NSTEMI](https://github.com/satbuhan/lmwh-nste-acs-protocol) ([live site](https://satbuhan.github.io/lmwh-nste-acs-protocol/))
- [Midazolam versus clonazepam — seizures, acute agitation & anxiety](https://github.com/satbuhan/midazolam-clonazepam-protocol) ([live site](https://satbuhan.github.io/midazolam-clonazepam-protocol/))

## Why this exists

A flowchart alone tells a reader *what* to do at each step but not *why*,
and a reader outside the authors' own team cannot easily check the
evidence behind a specific box (why IM, not IV, for acute agitation; why
the RSI Trial changed the calculus for ketamine in septic shock; why the
decades-old ICP contraindication in traumatic brain injury no longer
holds). This page keeps the original algorithm exactly as authored, and
attaches the clinical reasoning and literature to each box without
cluttering the diagram itself.

The algorithm this page presents is Figure 1 of "Ketamine in Emergency and
Critical Care Medicine: A Narrative Review of Sedation, Analgesia, and
Resuscitative Interventions," drawn as a single wide figure of five
parallel indication-based decision lanes plus a Pharmacology Snapshot,
a Strengths/Weaknesses summary, a Monitoring & Safety Essentials panel, a
Special Populations panel, and a closing "ICP Myth Revised" banner.

## Status

This is a working version, built to be tested on both desktop and mobile.

- **Reference verification for this tool differs from the rest of the
  atlas — by explicit author instruction, not by oversight.** For most
  tools here, each reference is independently re-verified against a live
  primary source before being used (see `METHODOLOGY.md`). For this tool,
  as for `epinephrine-revisited-protocol` before it, Dr. Bozatlı explicitly
  instructed that the manuscript's own 47-entry reference list should be
  taken as-is: Dr. Karcıoğlu has already evaluated it and it is accepted
  as correct on that basis, without a separate independent re-verification
  pass for this build. Every entry's `kind` field in `assets/content.js`
  says so plainly ("As cited in the manuscript; not independently
  re-verified"). This is a per-tool exception granted twice so far, each
  time on its own explicit instruction — it is not the atlas's default,
  and a future tool reverts to full independent verification unless the
  author gives the same instruction again for that specific build. See
  `METHODOLOGY.md`'s "Citation verification" section for the full policy.
- The diagram's five indication lanes, their box text, and the branching
  logic were transcribed directly from the authors' own Figure 1 image
  (inspected directly, not just text-extracted) and cross-checked against
  the manuscript's own section text and its dosing/adverse-effect tables.
  All 47 references are cited on at least one node.

## Disclaimer

This is an academic / educational reference tool, not a substitute for
institutional protocol or bedside clinical judgement. Verify any dose or
timing against current local protocol before clinical use.

## How it's built

Plain HTML/CSS/JS, no build step and no framework — a single static site
that GitHub Pages can serve directly.

```
index.html          page structure — masthead, the one diagram (trigger,
                     the five indication lanes, and the disconnected
                     reference rows around them), readout panel,
                     references, abbreviation legend, footer
assets/style.css     design (the "paper" masthead/references, the
                     five-lane diagram grid, the nested per-lane layout)
assets/content.js     ← single source of truth for every node's text,
                     and reference list. Edit this file to change
                     what the page says.
assets/app.js         rendering + interaction (builds the diagram — trunk,
                     five lanes, and the reference rows above/below them —
                     and its connector lines from content.js, handles the
                     click-to-expand panel on desktop and the bottom
                     sheet on mobile)
```

### Running it locally

No install needed:

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

### Editing content

Open `assets/content.js`. Each entry in `NODES` is one box or decision
hexagon from the diagram (`meaning`, `rationale`, and `refs` pointing at
numbered entries in `REFERENCES`); `LANES` in `assets/app.js` says which
five boxes make up each indication lane, in order. Add or edit a
reference in `REFERENCES` and point to it by `id` from any node. Never
change a node's `label` or `sub` text without the author team's sign-off —
those fields are the algorithm itself, transcribed verbatim from Figure 1.

### Building the next tool in this atlas

See [`METHODOLOGY.md`](METHODOLOGY.md) — the full build/verification
process (fidelity rule, content schema, citation verification, QA steps,
and how this tool's five-lane fan-out extends the atlas's rendering
patterns), written so that any collaborator or AI assistant can pick up
this project in a fresh session and build the next tool the same way.

## License

Content and code are released under
[CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) —
share and adapt with attribution, non-commercially, under the same license.
