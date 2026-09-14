import { CheckCircle2, Clock3, FileCheck2, Landmark, Radio, Users } from "lucide-react";
import type { ReactNode } from "react";

export function SectionTitle({ eyebrow, title, action }: { eyebrow?: string; title: string; action?: ReactNode }) { return <div className="mb-4 flex flex-wrap items-end justify-between gap-3"><div>{eyebrow && <p className="eyebrow">{eyebrow}</p>}<h2 className="font-display text-2xl font-bold text-primary">{title}</h2></div>{action}</div> }
export function StatCard({ label, value, note, tone="default" }: { label:string; value:string; note:string; tone?:"default"|"alert"|"success" }) { return <article className={`slab ${tone === "alert" ? "border-t-secondary" : tone === "success" ? "border-t-success" : "border-t-brass"}`}><p className="eyebrow">{label}</p><p className={`mt-2 font-display text-3xl font-bold ${tone === "alert" ? "text-secondary" : "text-primary"}`}>{value}</p><p className="mt-2 text-xs text-muted-foreground">{note}</p></article> }
export function LiveStrip() { return <div className="border-b border-border bg-accent"><div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 text-xs lg:px-8"><span className="font-display italic"><span className="mr-2 text-secondary">●</span>“Deliberation by the people is the sovereign pillar of the Gram Sabha”</span><span className="hidden font-bold uppercase text-muted-foreground md:block">Social Audit Cycle 2024–25 Q3</span></div></div> }
export const flow = [
  ["01","See","Panchayat data, scheme budgets and sanctioned works", Landmark],
  ["02","Understand","Evidence, material invoices and field inspection", FileCheck2],
  ["03","Discuss","Public deliberation and social audit testimony", Users],
  ["04","Vote","Cast a private recorded opinion on each agenda", Radio],
  ["05","Decide","Formal resolutions and certified minutes", CheckCircle2],
  ["06","Track","Owners, deadlines and physical verification", Clock3],
] as const;
