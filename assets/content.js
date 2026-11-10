/* ketamine-indications-protocol — assets/content.js
   Single source of truth for this tool's diagram text, clinical reasoning,
   and reference list. See README.md and METHODOLOGY.md for the full build
   process and the tool-specific layout notes (first 5-lane fan-out in the
   atlas, with per-lane nested sub-decisions for RSI/Airway and Haemodynamic
   Instability — see assets/app.js and METHODOLOGY.md for how).

   Source: Figure 1 ("Clinical Decision Algorithm on the Use of Ketamine in
   Emergency and Critical Care") of "Ketamine in Emergency and Critical Care
   Medicine: A Narrative Review of Sedation, Analgesia, and Resuscitative
   Interventions" (Bozatlı & Karcıoğlu), transcribed directly from the
   authors' own flowchart image and cross-checked against the manuscript's
   own section text (Sections 2–7) and its dosing/adverse-effect tables.

   Authors: Dr. Özgür Karcıoğlu & Dr. Satuk Buğra Han Bozatlı

   REFERENCE-VERIFICATION POLICY — read before editing REFERENCES.
   By explicit author instruction for this build, this 47-entry bibliography
   is transcribed directly from the manuscript's own reference list and was
   NOT independently re-verified against primary sources this pass: "ana
   makaledeki referansları kontrol etme. hoca değerlendirmiş ve doğru kabul
   et" — the professor (Dr. Karcıoğlu) has already evaluated them, so they
   are accepted as correct on that basis. Every REFERENCES entry's `kind`
   field says so plainly ("As cited in the manuscript; not independently
   re-verified"). This is the opposite default from most tools in this
   atlas (e.g. wbct-trauma-protocol's 80 references, exhaustively
   re-verified one by one) and is the SECOND tool built this way, after
   epinephrine-revisited-protocol — both by the same explicit, per-tool
   author instruction, not a change to the atlas's default rule. See
   METHODOLOGY.md's "Citation verification" section for the full policy and
   README.md's Status section for this tool's own disclosure. */

// Date this tool's content and citations were last built/checked
// together (see assets/app.js's References summary, and the hub
// README's "Content search index"-adjacent conventions doc).
const VERIFIED = "2026-11-06";

const REFERENCES = [
  { id: 1, kind: "As cited in the manuscript; not independently re-verified", text: "Domino EF. Taming the ketamine tiger. Anesthesiology. 2010;113(3):678–684.", url: "https://doi.org/10.1097/ALN.0b013e3181ed09a2" },
  { id: 2, kind: "As cited in the manuscript; not independently re-verified", text: "Kurdi MS, Theerth KA, Deva RS. Ketamine: current applications in anesthesia, pain, and critical care. Anesth Essays Res. 2014;8(3):283–290.", url: "https://doi.org/10.4103/0259-1162.143110" },
  { id: 3, kind: "As cited in the manuscript; not independently re-verified", text: "Devlin JW, Skrobik Y, Gélinas C, et al. Clinical practice guidelines for the prevention and management of pain, agitation/sedation, delirium, immobility, and sleep disruption in adult ICU patients. Crit Care Med. 2018;46(9):e825–e873.", url: "https://doi.org/10.1097/CCM.0000000000003299" },
  { id: 4, kind: "As cited in the manuscript; not independently re-verified", text: "Society of Critical Care Medicine (SCCM). 2025 SCCM PADIS Guidelines. 2025.", url: "https://www.guidelinecentral.com/guideline/25064/" },
  { id: 5, kind: "As cited in the manuscript; not independently re-verified", text: "Casey JD, Seitz KP, Driver BE, et al; RSI Investigators and the Pragmatic Critical Care Research Group. Ketamine or etomidate for tracheal intubation of critically ill adults. N Engl J Med. 2025; published online December 9, 2025 (the \"RSI Trial\").", url: "https://doi.org/10.1056/NEJMoa2511420" },
  { id: 6, kind: "As cited in the manuscript; not independently re-verified", text: "Zanos P, Moaddel R, Morris PJ, et al. Ketamine and ketamine metabolite pharmacology: insights into therapeutic mechanisms. Pharmacol Rev. 2018;70(3):621–660.", url: "https://doi.org/10.1124/pr.117.015198" },
  { id: 7, kind: "As cited in the manuscript; not independently re-verified", text: "Zhou JS, Peng GF, Liang WD, et al. Recent advances in the study of anesthesia- and analgesia-related mechanisms of S-ketamine. Front Pharmacol. 2023;14:1228895.", url: "https://doi.org/10.3389/fphar.2023.1228895" },
  { id: 8, kind: "As cited in the manuscript; not independently re-verified", text: "Sleigh J, Harvey M, Voss L, Denny B. Ketamine – more mechanisms of action than just NMDA blockade. Trends Anaesth Crit Care. 2014;4(2–3):76–81.", url: "https://doi.org/10.1016/j.tacc.2014.03.002" },
  { id: 9, kind: "As cited in the manuscript; not independently re-verified", text: "Peltoniemi MA, Hagelberg NM, Olkkola KT, Saari TI. Ketamine: a review of clinical pharmacokinetics and pharmacodynamics in anesthesia and pain therapy. Clin Pharmacokinet. 2016;55(9):1059–1077.", url: "https://doi.org/10.1007/s40262-016-0383-6" },
  { id: 10, kind: "As cited in the manuscript; not independently re-verified", text: "Trimmel H, Helbok R, Staudinger T, et al. S(+)-ketamine: current trends in emergency and intensive care medicine. Wien Klin Wochenschr. 2018;130(9–10):356–366.", url: "https://doi.org/10.1007/s00508-018-1343-y" },
  { id: 11, kind: "As cited in the manuscript; not independently re-verified", text: "Mostafa M, Hasanin A, Reda B, et al. Comparing the hemodynamic effects of ketamine versus fentanyl bolus in patients with septic shock: a randomized controlled trial. J Anesth. 2024;38(5):591–598.", url: "https://doi.org/10.1007/s00540-024-03357-9" },
  { id: 12, kind: "As cited in the manuscript; not independently re-verified", text: "Gao M, Rejaei D, Liu H. Ketamine use in current clinical practice. Acta Pharmacol Sin. 2016;37(7):865–872.", url: "https://doi.org/10.1038/aps.2016.5" },
  { id: 13, kind: "As cited in the manuscript; not independently re-verified", text: "Green SM, Roback MG, Kennedy RM, Krauss B. Clinical practice guideline for emergency department ketamine dissociative sedation: 2011 update. Ann Emerg Med. 2011;57(5):449–461.", url: "https://doi.org/10.1016/j.annemergmed.2010.11.030" },
  { id: 14, kind: "As cited in the manuscript; not independently re-verified", text: "Zaki HA, Shallik N, Shaban E, et al. An analytical comparison between ketamine alone and ketofol for procedural sedation and analgesia from an emergency perspective: a systematic review and meta-analysis. Cureus. 2022;14(7):e27318.", url: "https://doi.org/10.7759/cureus.27318" },
  { id: 15, kind: "As cited in the manuscript; not independently re-verified", text: "Smischney NJ, Seisa MO, Heise KJ, et al. Use of ketamine-propofol admixture (ketofol) for procedural sedation and analgesia: a systematic review. J Res Med Sci. 2017;22:89.", url: "https://doi.org/10.4103/jrms.JRMS_1087_16" },
  { id: 16, kind: "As cited in the manuscript; not independently re-verified", text: "Tran K, Moulton C. Ketamine vs. ketofol: what is the evidence? Emerg Med J. 2022;39(12):875–876.", url: "https://doi.org/10.1136/emermed-2022-212877" },
  { id: 17, kind: "As cited in the manuscript; not independently re-verified", text: "Ying M, Zuo Y. Efficacy of low-dose ketamine for control of acute pain in the emergency setting: a systematic review and meta-analysis of randomized controlled trials. West J Emerg Med. 2023;24(3):476–487.", url: "https://doi.org/10.5811/westjem.58484" },
  { id: 18, kind: "As cited in the manuscript; not independently re-verified", text: "Motov S, Rockoff B, Cohen V, et al. Intravenous subdissociative-dose ketamine versus morphine for analgesia in the emergency department: a randomized controlled trial. Ann Emerg Med. 2015;66(3):222–229.", url: "https://doi.org/10.1016/j.annemergmed.2015.03.004" },
  { id: 19, kind: "As cited in the manuscript; not independently re-verified", text: "Mahshidfar B, Mofidi M, Fattah Azar MH, et al. Low-dose ketamine versus morphine for acute severe pain in the emergency department: a randomized clinical trial. Turk J Emerg Med. 2017;17(4):142–147.", url: "https://doi.org/10.1016/j.tjem.2017.09.002" },
  { id: 20, kind: "As cited in the manuscript; not independently re-verified", text: "Kerian M, Motov S, Nelson L. Sub-dissociative dose ketamine and fentanyl for acute pain management in the emergency department: a double-blind randomized controlled trial. J Pain Res. 2023;16:2397–2406.", url: "https://doi.org/10.2147/JPR.S414500" },
  { id: 21, kind: "As cited in the manuscript; not independently re-verified", text: "Seak YS, Nor J, Tuan Kamauzaman TH, et al. Efficacy and safety of intranasal ketamine for acute pain management in the emergency setting: a systematic review and meta-analysis. J Clin Med. 2021;10(17):3978.", url: "https://doi.org/10.3390/jcm10173978" },
  { id: 22, kind: "As cited in the manuscript; not independently re-verified", text: "Cetin M, Brown CS, Bellolio F, et al. Nebulized ketamine for acute pain management in the emergency department: a systematic review and meta-analysis. Am J Emerg Med. 2025;94:110–118.", url: "https://doi.org/10.1016/j.ajem.2025.02.033" },
  { id: 23, kind: "As cited in the manuscript; not independently re-verified", text: "Green SM, Roback MG, Krauss B, et al. Predictors of airway and respiratory adverse events with ketamine sedation in the emergency department: an individual-patient data meta-analysis of 8,282 children. Ann Emerg Med. 2009;54(2):158–168.", url: "https://doi.org/10.1016/j.annemergmed.2009.01.024" },
  { id: 24, kind: "As cited in the manuscript; not independently re-verified", text: "Bhatt M, Johnson DW, Chan J, et al. Risk factors for adverse events in emergency department procedural sedation for children. JAMA Pediatr. 2017;171(10):957–964.", url: "https://doi.org/10.1001/jamapediatrics.2017.2135" },
  { id: 25, kind: "As cited in the manuscript; not independently re-verified", text: "Mirfazaelian H, et al. Non-injectable ketamine for pediatric sedation in the emergency department: a systematic review. Acad Emerg Med. 2025; published online October 2025.", url: "https://doi.org/10.1111/acem.70163" },
  { id: 26, kind: "As cited in the manuscript; not independently re-verified", text: "Hudson JL, Wong J, Durkin M, Gangathimmaiah V, Furyk J. Efficacy of prophylactic ondansetron versus placebo in reducing vomiting in children undergoing ketamine procedural sedation in the emergency department: a systematic review and meta-analysis. Emerg Med Australas. 2024;36(2):197–205.", url: "https://doi.org/10.1111/1742-6723.14372" },
  { id: 27, kind: "As cited in the manuscript; not independently re-verified", text: "Bittar de Morais L, Requião Radel-Neto G, Valsecchi VA, et al. Readdressing rapid sequence induction and intubation using ketamine or etomidate: a systematic review and meta-analysis of randomized clinical trials. Medicine (Baltimore). 2025;104(19):e42207.", url: "https://doi.org/10.1097/MD.0000000000042207" },
  { id: 28, kind: "As cited in the manuscript; not independently re-verified", text: "Koroki T, Kotani Y, Yaguchi T, et al. Ketamine versus etomidate as an induction agent for tracheal intubation in critically ill adults: a Bayesian meta-analysis. Crit Care. 2024;28(1):54.", url: "https://doi.org/10.1186/s13054-024-04831-4" },
  { id: 29, kind: "As cited in the manuscript; not independently re-verified", text: "Jabre P, Combes X, Lapostolle F, et al. Etomidate versus ketamine for rapid sequence intubation in acutely ill patients: a multicentre randomised controlled trial. Lancet. 2009;374(9686):293–300.", url: "https://doi.org/10.1016/S0140-6736(09)60949-1" },
  { id: 30, kind: "As cited in the manuscript; not independently re-verified", text: "April MD, Arana A, Schauer SG, et al. Ketamine versus etomidate and peri-intubation hypotension: a National Emergency Airway Registry study. Acad Emerg Med. 2020;27(11):1140–1149.", url: "https://doi.org/10.1111/acem.14063" },
  { id: 31, kind: "As cited in the manuscript; not independently re-verified", text: "Vila de Mucha P, Thomas S. Incidence of post-induction hypotension following emergency rapid sequence induction with ketamine: a systematic review and meta-analysis. Scand J Trauma Resusc Emerg Med. 2025;33(1):52.", url: "https://doi.org/10.1186/s13049-025-01374-7" },
  { id: 32, kind: "As cited in the manuscript; not independently re-verified", text: "Mankowitz SL, Regenberg P, Kaldan J, Cole JB. Ketamine for rapid sedation of agitated patients in the prehospital and emergency department setting: a systematic review and proportional meta-analysis. J Emerg Med. 2018;55(5):670–681.", url: "https://doi.org/10.1016/j.jemermed.2018.07.017" },
  { id: 33, kind: "As cited in the manuscript; not independently re-verified", text: "Cole JB, Moore JC, Nystrom PC, et al. A prospective study of ketamine as primary therapy for prehospital profound agitation. Am J Emerg Med. 2016;34(11):2124–2129.", url: "https://doi.org/10.1016/j.ajem.2016.07.010" },
  { id: 34, kind: "As cited in the manuscript; not independently re-verified", text: "Burnett AM, Peterson BK, Stellpflug SJ, et al. The association between ketamine given for prehospital chemical restraint with intubation and hospital admission. Am J Emerg Med. 2015;33(1):76–79.", url: "https://doi.org/10.1016/j.ajem.2014.10.016" },
  { id: 35, kind: "As cited in the manuscript; not independently re-verified", text: "Sadrzadeh SM, Montazeri A, Rezvani Kakhki B, Vafadar Moradi E. Haloperidol versus ketamine for managing acute agitation in the emergency department: a randomized clinical trial. Bull Emerg Trauma. 2025;13(4):215–220.", url: "https://doi.org/10.30476/beat.2025.106204.1583" },
  { id: 36, kind: "As cited in the manuscript; not independently re-verified", text: "Khurshid M, Omer H, Rauf A, et al. A comparative analysis between ketamine versus combination of midazolam and haloperidol for rapid safe control of agitated patients in emergency department: a systematic review. Cureus. 2022;14(7):e27170.", url: "https://doi.org/10.7759/cureus.27170" },
  { id: 37, kind: "As cited in the manuscript; not independently re-verified", text: "Seo Y, Oh H, Cho O, et al. 2021 KSCCM clinical practice guidelines for pain, agitation, delirium, immobility, and sleep disturbance in the intensive care unit. Acute Crit Care. 2022;37(1):1–25.", url: "https://doi.org/10.4266/acc.2022.00094" },
  { id: 38, kind: "As cited in the manuscript; not independently re-verified", text: "Banik S, Madavi S. Exploring the role of ketamine sedation in critically ill patients: a comprehensive review. Cureus. 2024;16(7):e65836.", url: "https://doi.org/10.7759/cureus.65836" },
  { id: 39, kind: "As cited in the manuscript; not independently re-verified", text: "Sharif S, Prakash J, Rochwerg B. The impact of ketamine on outcomes in critically ill patients: a systematic review with meta-analysis and trial sequential analysis of randomized controlled trials. Acute Crit Care. 2024;39(1); published February 2024.", url: "https://doi.org/10.4266/acc.2023.01519" },
  { id: 40, kind: "As cited in the manuscript; not independently re-verified", text: "Patel R, Thompson J, Elsayed B, Alasfari MT, Patel V, Irribarren J. Ketamine-based ICU sedation and patient-centered outcomes: a systematic review and meta-analysis of mechanical ventilation duration, ICU length of stay, and delirium. J Crit Care. 2026 May 23;95:155617. PMID: 42177858.", url: "https://doi.org/10.1016/j.jcrc.2026.155617" },
  { id: 41, kind: "As cited in the manuscript; not independently re-verified", text: "Richards ND, Weatherhead W, Howell S, Bellamy M, Mujica-Mota R. Continuous infusion ketamine for sedation of mechanically ventilated adults in the intensive care unit: a scoping review. J Intensive Care Soc. 2024 Feb;25(1):59–77. PMID: 39323592; PMCID: PMC11421257.", url: "https://doi.org/10.1177/17511437231182507" },
  { id: 42, kind: "As cited in the manuscript; not independently re-verified", text: "Ali H, Abdelhamid BM, Hasanin AM, Amer AA, Rady A. Ketamine-based versus fentanyl-based regimen for rapid-sequence endotracheal intubation in patients with septic shock: a randomised controlled trial. Eur J Anaesthesiol. 2022;39(11):869–876.", url: "https://doi.org/10.1097/EJA.0000000000001720" },
  { id: 43, kind: "As cited in the manuscript; not independently re-verified", text: "Abdelhamid BM, Ali H, Hasanin A, et al. Impact of low-dose ketamine infusion on intracranial pressure and hemodynamics in septic shock patients. Neurocrit Care. 2025; published online 2025.", url: "https://doi.org/10.1007/s12028-024-02136-2" },
  { id: 44, kind: "As cited in the manuscript; not independently re-verified", text: "Strayer RJ, Nelson LS. Adverse events associated with ketamine for procedural sedation in adults. Am J Emerg Med. 2008;26(9):985–1028.", url: "https://doi.org/10.1016/j.ajem.2007.12.005" },
  { id: 45, kind: "As cited in the manuscript; not independently re-verified", text: "Almeida TR, Lacerda da Silva UR, Pereira Pires J, et al. Ketamine outcomes in traumatic brain injury: a systematic review. Int J Crit Illn Inj Sci. 2024;14(3):134–145.", url: "https://doi.org/10.4103/ijciis.ijciis_33_24" },
  { id: 46, kind: "As cited in the manuscript; not independently re-verified", text: "Sciorilli JV, Rossi YI, Dos Reis Schevz R, da Silva DBP, Lee J, Gallani F, Maegele M. Is ketamine safe for traumatic brain injury? A systematic review and meta-analysis. J Crit Care. 2026 Feb;91:155347. PMID: 41197253.", url: "https://doi.org/10.1016/j.jcrc.2025.155347" },
  { id: 47, kind: "As cited in the manuscript; not independently re-verified", text: "De Sloovere V, Mebis L, Wouters P, et al. Brain Injury and Ketamine study (BIKe): a prospective, randomized controlled double-blind clinical trial to study the effects of ketamine on therapy intensity level and intracranial pressure in severe traumatic brain injury patients (NCT05097261). Trials. 2025 May 28;26(1):177.", url: "https://doi.org/10.1186/s13063-025-08835-5" }
];
const NODES = [
  // ---- Reference strip (top of the source figure, disconnected) ----
  {
    id: "pharm_snapshot", type: "process",
    label: "Pharmacology Snapshot",
    sub: "Mechanism: NMDA antagonist (phencyclidine site)\nAdditional: µ-opioid partial agonism; monoamine reuptake inhibition; HCN1 blockade; muscarinic antagonism\nOnset: IV 30–60 s | IM 3–5 min   Duration: IV 10–20 min | IM 15–30 min\nCYP3A4/2B6 metabolism → norketamine (active, ~30% potency)\nVd ~3 L/kg",
    meaning: "Ketamine is a phencyclidine-derived, non-competitive NMDA-receptor antagonist that also engages µ-opioid, monoaminergic, HCN1 and muscarinic receptor systems, giving it dissociative anaesthesia, analgesia and amnesia while broadly preserving cardiovascular tone and spontaneous ventilation.",
    rationale: "These parameters (mechanism, onset/duration by route, hepatic metabolism to the active metabolite norketamine, and volume of distribution) are what make ketamine behave differently at the bedside from propofol, midazolam or opioids — fast IM onset without reliable IV access, a short redistribution-driven duration, and a lipophilic profile that gets it into the CNS quickly.",
    refs: [6, 7, 8, 9]
  },
  {
    id: "strengths_weaknesses", type: "process",
    label: "Strengths + | Weaknesses ×",
    sub: "+ Preserves airway reflexes and spontaneous ventilation\n+ Cardiovascular stimulation in early shock states\n+ Bronchodilation (asthma/COPD)\n+ Opioid-sparing; reduces ICU delirium (2025 meta-analysis)\n× CV collapse in catecholamine-depleted shock (RSI Trial 2025)\n× Emergence reactions adults 5–30%; hypersalivation; tachycardia",
    meaning: "A one-line balance sheet for the agent: the properties that make it uniquely useful across emergency and critical care, set directly against the two safety signals a clinician has to actively manage.",
    rationale: "Every strength here is mechanistic (preserved ventilation, indirect sympathomimetic drive, bronchodilation, opioid-sparing/anti-delirium effect); both weaknesses are empirically quantified in the literature this review synthesises — the RSI Trial's cardiovascular-collapse signal in catecholamine-depleted shock, and the well-described 5–30% adult emergence-reaction rate.",
    refs: [10, 11, 12, 40, 5, 44]
  },

  // ---- Main trunk ----
  {
    id: "ketamine_trigger", type: "terminal", tone: "key",
    label: "Patient requires ketamine?",
    sub: "Emergency / Critical Care Setting",
    meaning: "The entry point into the algorithm: a clinician has identified a patient in the ED or ICU for whom ketamine is a candidate agent — for sedation, analgesia, airway management, chemical restraint, or haemodynamic support.",
    rationale: "Ketamine's broad acute-care footprint (procedural sedation, RSI, acute agitation, ICU analgosedation, and resuscitation of the haemodynamically compromised patient) is exactly why the first branch point has to be \"what for\" rather than a single linear protocol.",
    refs: []
  },
  {
    id: "indication_type", type: "decision",
    label: "What is the clinical indication?",
    meaning: "The algorithm's single branch point: which of the five principal clinical domains this review covers applies to the patient in front of you.",
    rationale: "Dosing, the relevant safety signal, and the supporting evidence base are all indication-specific — a dose and caution set tuned for procedural sedation does not transfer cleanly to RSI in septic shock, or to resuscitation of the haemodynamically compromised patient.",
    refs: [1, 2]
  },

  // ---- Lane: Procedural Sedation ----
  {
    id: "proc_sedation_header", type: "branch",
    label: "Procedural Sedation",
    meaning: "ED procedural sedation and analgesia (PSA) in adults and children — orthopaedic reductions, cardioversion, abscess drainage and similar — remains ketamine's single most extensively studied indication.",
    rationale: "Comparative and paediatric safety data for this indication are large and mature, which is why the algorithm can give a specific, well-supported dose rather than a general range.",
    refs: [13]
  },
  {
    id: "proc_sedation_dose", type: "process",
    label: "Adult: IV 1–2 mg/kg or IM 4–5 mg/kg",
    sub: "Paed: IV 1–2 mg/kg",
    meaning: "Standard dissociative-sedation dosing per the 2011 clinical practice guideline: IV when access is available, IM when it is not; the same IV range applies in children, with titration by 0.5 mg/kg increments as required. Ketofol (ketamine-propofol admixture) is a recognised alternative, broadly equivalent in sedation quality with marginally faster recovery but greater hypotension risk.",
    rationale: "An individual-patient-data meta-analysis of 8,282 children found serious respiratory adverse events in under 1% of cases, with risk concentrated in those under 2 years, high IV doses, and opioid co-administration; a prospective multicentre study of over 6,000 paediatric PSA episodes corroborated this, and a 2025 review confirmed intranasal/oral non-injectable routes are practicable alongside the more reliable IV/IM routes.",
    refs: [13, 14, 15, 16, 23, 24, 25]
  },
  {
    id: "proc_sedation_subdiss", type: "process",
    label: "Sub-dissociative",
    sub: "0.1–0.3 mg/kg IV\n(opioid-sparing)",
    meaning: "A separate, much lower dose range used purely for analgesia (not dissociation) — an opioid-sparing adjunct for acute pain, infused over 10–15 minutes rather than given as a bolus.",
    rationale: "A meta-analysis of 15 RCTs (n = 1,613) found pooled pain reduction favouring sub-dissociative ketamine over opioids at 30 minutes, with further RCTs confirming non-inferiority to IV morphine and superior pain reduction when combined with fentanyl; intranasal and nebulised non-parenteral routes are gaining supporting evidence at the same dose range.",
    refs: [17, 18, 19, 20, 21, 22]
  },
  {
    id: "proc_sedation_mgmt", type: "terminal",
    label: "Emergence risk → Midazolam",
    sub: "0.03–0.05 mg/kg\nVomiting → Ondansetron",
    meaning: "The two most common adverse effects of procedural-sedation-dose ketamine, with their specific mitigations: co-administered low-dose midazolam for emergence dysphoria, and prophylactic ondansetron for vomiting.",
    rationale: "Co-administration of midazolam and a quiet recovery environment substantially reduce the incidence and severity of emergence phenomena; a dedicated systematic review and meta-analysis confirmed prophylactic ondansetron reduces post-sedation vomiting in children and supports its routine use.",
    refs: [13, 26]
  },

  // ---- Lane: RSI / Airway ----
  {
    id: "rsi_header", type: "branch",
    label: "RSI / Airway",
    meaning: "Ketamine as an induction agent for emergency rapid sequence intubation — a role substantially recontextualised by the December 2025 RSI Trial.",
    rationale: "RSI induction-agent choice has direct, measurable haemodynamic consequences during the peri-intubation period, which is why this lane is built around a haemodynamic-status gate rather than a single dose.",
    refs: [5]
  },
  {
    id: "rsi_hemodynamic", type: "decision",
    label: "Haemodynamic status?",
    meaning: "The gate that decides RSI dosing: is the patient stable or only mildly unstable, or are they in established (particularly septic) catecholamine-depleted shock?",
    rationale: "Ketamine's sympathomimetic properties are advantageous when endogenous catecholamine stores are intact, but can be reversed by direct myocardial depression once those stores are depleted — the mechanistic duality the RSI Trial's subgroup findings made clinically concrete.",
    refs: [5, 11]
  },
  {
    id: "rsi_stable", type: "terminal",
    label: "Stable/mild: IV 1–2 mg/kg",
    sub: "Ketamine preferred",
    meaning: "In haemodynamically stable or only mildly compromised patients, standard-dose ketamine remains the preferred induction agent.",
    rationale: "A contemporaneous meta-analysis of 10 RCTs (n = 2,862) and a separate Bayesian meta-analysis both found no significant all-cause mortality difference between ketamine and etomidate for RSI; earlier RCT and national-registry data support ketamine's superior cardiovascular-function preservation over opioid-based induction in this group.",
    refs: [27, 28, 29, 30]
  },
  {
    id: "rsi_shock", type: "terminal", tone: "alarm",
    label: "⚠ Septic/refractory shock",
    sub: "Reduce to 0.5–1 mg/kg\nConsider etomidate\n(RSI Trial NEJM 2025)",
    meaning: "In established or refractory septic shock, the RSI Trial found ketamine carried a significantly higher rate of peri-intubation cardiovascular collapse than etomidate (22.1% vs 17.0% overall; 30.6% vs 20.9% in the septic-shock subgroup), with no offsetting mortality benefit — the algorithm calls for dose reduction and consideration of etomidate instead.",
    rationale: "The multicentre RSI Trial (2,365 critically ill adults, 6 EDs + 8 ICUs) found 28-day mortality was statistically indistinguishable between agents (28.1% vs 29.1%), but the cardiovascular-collapse excess was substantially amplified in its septic/septic-shock subgroup (46.7% of the trial population) — exactly where ketamine's indirect sympathomimetic mechanism is least reliable. A 2025 meta-analysis also found post-induction hypotension exceeds 20% across agents and is associated with increased mortality, reinforcing pre-intubation optimisation regardless of agent.",
    cautions: [
      "Pre-treat with push-dose vasopressors and optimise haemodynamics before induction where possible.",
      "The RSI Trial data are also the basis for etomidate's rehabilitation — no adrenal-suppression-attributable mortality signal was identified in its 2,365-patient population."
    ],
    refs: [5, 31]
  },

  // ---- Lane: Acute Agitation ----
  {
    id: "agitation_header", type: "branch",
    label: "Acute Agitation",
    meaning: "Chemical restraint of the severely agitated patient — excited delirium syndrome, stimulant-induced agitation — where rapid onset matters most.",
    rationale: "IM ketamine's 3–5 minute onset and potent dissociative effect make it particularly suited to this setting compared with slower-onset agents.",
    refs: [32]
  },
  {
    id: "agitation_dose", type: "process",
    label: "IM 4–5 mg/kg",
    sub: "Onset 3–5 min\n(ExDS/prehospital)",
    meaning: "Standard IM dosing for severe agitation, validated in prehospital and aeromedical retrieval contexts as well as the ED.",
    rationale: "A 2025 RCT (n = 120) found IV ketamine achieved RASS ≤ +1 significantly faster than IV haloperidol; earlier reviews comparing ketamine to haloperidol-benzodiazepine combinations found faster time to adequate sedation with ketamine, albeit at a higher adverse-effect rate — together supporting its first-line role when rapid control is the priority.",
    refs: [33, 34, 35, 36]
  },
  {
    id: "agitation_caution", type: "terminal", tone: "alarm",
    label: "⚠ ~20% require airway rescue",
    sub: "Airway equipment mandatory\nat all times",
    meaning: "A systematic review and proportional meta-analysis of 13 studies (n = 1,090) found effective sedation in 85% of agitated patients given ketamine, but roughly 20% subsequently required invasive airway management.",
    rationale: "This is the single biggest safety trade-off of using ketamine for chemical restraint: its efficacy at rapid sedation does not come with a correspondingly low airway-intervention rate, so full airway equipment and personnel must be immediately available whenever it is used for this indication.",
    refs: [32]
  },

  // ---- Lane: ICU Analgosedation ----
  {
    id: "icu_header", type: "branch",
    label: "ICU Analgosedation",
    meaning: "Low-dose ketamine as an opioid-sparing adjunct within a multimodal ICU analgosedation protocol, not as a standalone sedative.",
    rationale: "Both the 2025 SCCM PADIS guideline and the KSCCM guideline maintain a conditional recommendation for this role, reflecting a maturing but not yet definitive evidence base.",
    refs: [3, 4, 37]
  },
  {
    id: "icu_dose", type: "process",
    label: "Bolus 0.5 mg/kg IV",
    sub: "then 1–2 µg/kg/min infusion",
    meaning: "The suggested ICU analgosedation protocol: a 0.5 mg/kg IV bolus followed by a continuous low-dose infusion, adjunctive to (not replacing) opioid-based sedation.",
    rationale: "This is the specific regimen named by the 2025 SCCM PADIS guideline and endorsed by the KSCCM guideline for adjunctive use in mechanically ventilated ICU patients.",
    refs: [4, 37]
  },
  {
    id: "icu_benefits", type: "process",
    label: "↓ Opioid use",
    sub: "↓ ICU delirium\n↓ ICU length of stay",
    meaning: "The patient-centred outcome gains associated with ketamine-based ICU analgosedation: reduced opioid consumption, reduced delirium incidence, and shorter ICU length of stay.",
    rationale: "A 2024 RCT-only meta-analysis found ketamine reduced ICU delirium rates without a significant mortality or opioid-consumption effect; a 2025 meta-analysis of 903 patients across six controlled trials specifically found a significant reduction in ICU length of stay (mean difference −0.86 days) and delirium incidence (OR 0.55), without a significant reduction in mechanical ventilation duration.",
    refs: [39, 40]
  },
  {
    id: "icu_guideline", type: "terminal",
    label: "Per 2025 SCCM PADIS guideline",
    sub: "(conditional rec.)\nMonitor: tachycardia, hypertension",
    meaning: "The evidence supports this as a conditional, not strong, recommendation — adjunctive ketamine infusion is reasonable but should be monitored for its own dose-dependent cardiovascular effects.",
    rationale: "A 2024 scoping review of continuous ketamine infusion in mechanically ventilated patients (27 publications) found 85.7% of studies reporting safety data identified no significant adverse reactions and rare emergence reactions in the sedated, ventilated ICU population — reassuring, but still warranting routine haemodynamic monitoring given ketamine's sympathomimetic mechanism.",
    refs: [4, 38, 41]
  },

  // ---- Lane: Haemodynamic Instability ----
  {
    id: "hemo_header", type: "branch",
    label: "Haemodynamic Instability",
    meaning: "Use of ketamine for resuscitation and peri-intubation support in haemorrhagic, obstructive, and early septic shock, where most alternative induction/sedation agents carry significant hypotension risk.",
    rationale: "Ketamine's catecholamine-preserving mechanism offers a pharmacological buffer during the peri-intubation period specifically when endogenous adrenergic stores are not yet exhausted.",
    refs: []
  },
  {
    id: "hemo_catecholamine", type: "decision",
    label: "Catecholamine stores intact?",
    meaning: "The same mechanistic gate as the RSI lane's \"haemodynamic status?\" question, asked here in its sharpest form: does this patient still have functioning endogenous adrenergic reserve for ketamine's indirect sympathomimetic action to work on?",
    rationale: "This is the single mechanistic fact that reconciles ketamine's two opposite reputations — a haemodynamic stabiliser in early/compensated shock, and a precipitant of cardiovascular collapse once catecholamine stores are exhausted in prolonged or refractory shock.",
    refs: [10, 11]
  },
  {
    id: "hemo_yes", type: "terminal",
    label: "YES: Ketamine preferred",
    sub: "↑ HR   ↑ MAP   ↑ CO",
    meaning: "With intact catecholamine stores, ketamine's indirect sympathomimetic effect raises heart rate, mean arterial pressure and cardiac output — a genuine haemodynamic advantage over induction agents that lower blood pressure.",
    rationale: "An RCT comparing ketamine-based to fentanyl-based RSI regimens in septic shock found fewer vasopressor dose escalations in the immediate post-intubation period with ketamine, and a 2025 prospective study of low-dose ketamine infusion in ventilated septic shock patients found no ICP increase alongside favourable haemodynamics including maintained cerebral perfusion pressure.",
    refs: [42, 43]
  },
  {
    id: "hemo_depleted", type: "terminal", tone: "alarm",
    label: "⚠ Depleted state: direct -ve inotropy",
    sub: "Reduce dose or choose etomidate\n(RSI Trial 2025)",
    meaning: "Once catecholamine stores are exhausted — prolonged or refractory septic or cardiogenic shock — ketamine's direct negative inotropic effect is unmasked and can paradoxically worsen haemodynamics; the algorithm calls for dose reduction to 0.5–1 mg/kg or choosing etomidate instead.",
    rationale: "This is the same mechanistic duality that the RSI Trial's septic-shock subgroup findings made clinically concrete: the trial counsels a more individualised approach in established septic shock, with pre-treatment push-dose vasopressors and dose reduction where ketamine is still used.",
    refs: [5, 11]
  },

  // ---- Monitoring & Safety (disconnected, applies across all lanes) ----
  {
    id: "monitoring_header", type: "terminal", tone: "key",
    label: "Monitoring & Safety Essentials",
    meaning: "A set of monitoring and mitigation requirements that apply across every indication above, not to any single lane — airway readiness, standard physiological monitoring, administration technique, and the two most common adverse effects with their prevention.",
    rationale: "Collecting these in one always-applicable panel, rather than repeating them in every lane, matches how the source figure itself presents them — as a shared safety layer beneath the indication-specific algorithm, not as its own decision branch.",
    refs: []
  },
  {
    id: "monitoring_airway", type: "process",
    label: "Airway & monitoring",
    sub: "Airway equipment immediately available\nO2 saturation, ETCO2, BP, ECG monitoring\nIV push >60 s to avoid apnoea\nGlycopyrrolate for secretion control",
    meaning: "The baseline physiological-monitoring and administration-technique requirements for any ketamine use in the emergency or critical care setting.",
    rationale: "Rapid IV administration, opioid co-administration, or dosing in very young infants increase the risk of transient apnoea and laryngospasm; hypersalivation is a common, separately manageable effect of the drug's muscarinic-antagonist profile.",
    refs: [12, 13]
  },
  {
    id: "monitoring_emergence", type: "process",
    label: "Emergence & contraindications",
    sub: "Emergence reactions: quiet env. + midazolam\nOndansetron prophylaxis for vomiting\nAvoid: aortic dissection, severe uncontrolled hypertension, age <3 months, active psychosis",
    meaning: "The management plan for ketamine's most common psychomimetic/GI adverse effects, plus the relative contraindications where ketamine's sympathomimetic and psychomimetic effects make it a poor choice.",
    rationale: "Emergence reactions occur in 5–30% of adults and are more common in women and those with pre-existing psychiatric illness; absolute contraindications are limited to known hypersensitivity, but relative contraindications include severe uncontrolled hypertension, aortic dissection, non-ventilated intracranial haemorrhage, severe pre-eclampsia, uncontrolled thyrotoxicosis, catecholamine-depleted cardiogenic shock, active psychotic disorder for elective sedation, and age under 3 months.",
    refs: [13, 44]
  },

  // ---- Special Populations (disconnected, applies across all lanes) ----
  {
    id: "special_pop_header", type: "terminal", tone: "key",
    label: "Special Populations",
    meaning: "Four patient groups in whom ketamine's risk-benefit balance is specifically altered, each requiring its own adjustment rather than the standard-indication dosing above.",
    rationale: "These populations cut across every indication lane — a paediatric agitation case, a geriatric procedural sedation, a TBI RSI — so, like the monitoring panel, the source figure presents them as a shared layer rather than duplicating them per lane.",
    refs: []
  },
  {
    id: "special_tbi", type: "process",
    label: "TBI",
    sub: "Safe in ventilated pts\nMaintain normocapnia\n(ICP myth revised)",
    meaning: "Contemporary evidence supports ketamine for airway management and analgosedation in mechanically ventilated traumatic brain injury patients, provided normocapnia (PaCO2 35–40 mmHg) is maintained.",
    rationale: "The historical ICP contraindication was rooted in small, non-randomised case series in spontaneously breathing, non-monitored patients; multiple contemporary systematic reviews in ventilated TBI patients have not reproduced it — see the ICP Myth Revised note below.",
    refs: [45, 46, 47]
  },
  {
    id: "special_asthma", type: "process",
    label: "Asthma / COPD",
    sub: "Agent of choice\nDirect bronchodilation benefit",
    meaning: "Ketamine is the preferred induction agent for patients with reactive airways disease requiring intubation, and sub-dissociative doses have been used adjunctively in refractory bronchospasm.",
    rationale: "Its bronchodilatory effect — mediated through catecholamine release and direct smooth-muscle relaxation — is supported by both mechanistic reasoning and extensive clinical experience, making it uniquely suited to the uncommon combination of obstructive airways disease with circulatory compromise.",
    refs: [12]
  },
  {
    id: "special_geriatric", type: "process",
    label: "Geriatrics",
    sub: "Reduce dose 50–75%\nHeightened psychomimetic risk",
    meaning: "Older patients, particularly those with pre-existing cognitive impairment, may be more sensitive to ketamine's psychomimetic effects and generally need reduced doses.",
    rationale: "Multimodal analgesic strategies combining sub-dissociative ketamine with non-opioid adjuncts can minimise opioid-related adverse effects in this population; catecholamine-stimulatory effects may also be attenuated by chronic beta-blocker therapy or autonomic neuropathy, both more common in older adults.",
    refs: []
  },
  {
    id: "special_pregnancy", type: "process",
    label: "Pregnancy",
    sub: "Emergency use only; crosses placenta",
    meaning: "Ketamine crosses the placenta and has been used in emergency obstetric anaesthesia, particularly for haemorrhagic cases, where its haemodynamic properties are advantageous.",
    rationale: "Its association with increased uterine tone can be beneficial in obstetric haemorrhage but must be weighed against the risk of uterine hyperstimulation; it should be reserved for genuine obstetric emergencies, as high-quality obstetric trial data remain limited.",
    refs: []
  },

  // ---- Closing banner ----
  {
    id: "icp_myth", type: "terminal", tone: "key",
    label: "ICP Myth Revised",
    sub: "Ketamine does NOT increase ICP in mechanically ventilated patients (multiple systematic reviews and meta-analyses 2024–2025). The historical contraindication in TBI is no longer supported by contemporary evidence.",
    meaning: "The single most consequential revision in this review's safety literature: the decades-old teaching that ketamine raises intracranial pressure and is therefore contraindicated in head injury does not hold up under contemporary, controlled-ventilation evidence.",
    rationale: "A 2024 meta-analysis of 21 studies (n = 886) found no clinically significant ICP elevation attributable to ketamine in TBI patients under controlled mechanical ventilation, with several studies reporting a statistically significant ICP reduction; a 2025 PROSPERO-registered systematic review and meta-analysis similarly found no increase in ICP crisis events (RR 0.67; 95% CI 0.45–1.01); the ongoing BIKe trial (NCT05097261) is specifically designed to provide definitive prospective RCT data.",
    refs: [45, 46, 47]
  }
];
const GLOSSARY = [
  { match: "NMDA", full: "N-methyl-D-aspartate", def: "An excitatory glutamate receptor subtype; ketamine's primary action is non-competitive antagonism of this receptor at the phencyclidine binding site within its ion channel." },
  { match: "HCN1", full: "hyperpolarisation-activated cyclic nucleotide-gated channel 1", def: "An ion channel ketamine blocks as a secondary mechanism, which may contribute to its hypnotic effect." },
  { match: "PADIS", full: "Pain, Agitation/Sedation, Delirium, Immobility, and Sleep Disruption", def: "The Society of Critical Care Medicine's clinical practice guideline for ICU patients, most recently updated in 2025; it maintains a conditional recommendation for low-dose ketamine as an opioid-sparing analgosedation adjunct." },
  { match: "SCCM", full: "Society of Critical Care Medicine", def: "The US professional society that publishes the PADIS guideline for ICU pain, agitation, sedation and delirium management." },
  { match: "KSCCM", full: "Korean Society of Critical Care Medicine", def: "Publishes its own clinical practice guideline for ICU pain, agitation, delirium, immobility and sleep disturbance, which independently endorses adjunctive low-dose ketamine." },
  { match: "RSI", full: "rapid sequence intubation", def: "Near-simultaneous administration of an induction agent and a paralytic to secure the airway quickly, minimising aspiration risk; ketamine's role as an RSI induction agent is substantially revised by the 2025 RSI Trial covered in this tool." },
  { match: "PSA", full: "procedural sedation and analgesia", def: "Sedation given specifically to allow a painful or distressing procedure (e.g. fracture reduction, abscess drainage) to be performed safely." },
  { match: "sub-dissociative", full: "sub-dissociative-dose ketamine", def: "Low-dose ketamine (typically 0.1–0.3 mg/kg IV) given purely for its analgesic effect, below the dose that produces dissociative anaesthesia — an opioid-sparing adjunct for acute pain." },
  { match: "ExDS", full: "excited delirium syndrome", def: "A state of severe agitation, often with stimulant intoxication, marked by extreme autonomic arousal and a high risk of sudden deterioration — one indication where rapid-onset IM ketamine is favoured for chemical restraint." },
  { match: "ICP", full: "intracranial pressure", def: "Historically considered a contraindication to ketamine use; contemporary evidence in mechanically ventilated patients with controlled ventilation does not support clinically significant ICP elevation — see the ICP Myth Revised note in this tool." },
  { match: "RASS", full: "Richmond Agitation-Sedation Scale", def: "A validated scale used to grade a patient's level of sedation or agitation; used as the outcome measure in trials comparing ketamine with haloperidol for acute agitation." },
  { match: "BIKe", full: "Brain Injury and Ketamine trial", def: "An ongoing prospective, double-blind RCT (NCT05097261) specifically designed to evaluate ketamine as adjunct sedation in severe TBI with ICP monitoring as a primary safety endpoint." },
  { match: "ketofol", full: "ketamine-propofol admixture", def: "A combination sedation technique found broadly equivalent to ketamine monotherapy in sedation quality, with marginally faster recovery but a greater hypotension risk." },
  { match: "esketamine", full: "S-(+)-ketamine", def: "The more potent enantiomer of racemic ketamine, with roughly three-fold greater NMDA receptor affinity; licensed in several countries for treatment-resistant depression." },
  { match: "norketamine", full: "", def: "Ketamine's principal active hepatic metabolite (via CYP3A4/CYP2B6), with roughly 30% of the parent compound's NMDA-antagonist potency." }
];

const AGENTS = [
  "Ketamine", "Esketamine", "Norketamine", "Etomidate", "Midazolam", "Ondansetron",
  "Glycopyrrolate", "Atropine", "Haloperidol", "Dexmedetomidine", "Fentanyl",
  "Morphine", "Propofol", "Succinylcholine"
];
