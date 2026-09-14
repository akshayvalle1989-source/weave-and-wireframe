export const navItems = [
  ["/", "Home"], ["/panchayat", "Panchayat"], ["/gram-sabha", "Gram Sabha"],
  ["/social-audit", "Social Audit"], ["/vote", "Vote"], ["/results", "Results"], ["/help", "Help & Feedback"],
] as const;

export const agendaItems = [
  { id: "01", title: "Harijan Tola Drinking Water Pipeline Extension", scheme: "Jal Jeevan Mission", amount: "₹8,40,000", status: "Passed · 84.3%", detail: "Extend 1,200 metres of drinking-water pipeline to 74 households and the primary school." },
  { id: "02", title: "Canal Bund Road Audit Discrepancy", scheme: "MGNREGA", amount: "₹11,40,000", status: "Action ordered", detail: "Joint remeasurement and contractor recovery following a 180 metre field discrepancy." },
  { id: "03", title: "Panchayat Solar Illumination Scheme", scheme: "15th Finance Commission", amount: "₹4,20,000", status: "Unanimous", detail: "Install 18 solar lights across the school turn, Anganwadi Centre and cremation ground road." },
];

export const findings = [
  { id: "SAF-104", title: "Measurement discrepancy in gravel road earthwork", category: "MGNREGA", status: "Open", amount: "₹42,500", detail: "Field chain-tape audit measured 820 metres against 1,000 metres booked in the Measurement Book." },
  { id: "SAF-102", title: "Delay in grain release to AAY cardholders", category: "PDS", status: "Resolved", amount: "38 cardholders", detail: "Biometric verification confirmed receipt after intervention by the Block Supply Officer." },
  { id: "SAF-105", title: "Non-functional submersible pump at Ward 2", category: "Sanitation", status: "In Progress", amount: "₹12,000", detail: "Repair order issued after a three-week service interruption; re-inspection due 28 October." },
];
