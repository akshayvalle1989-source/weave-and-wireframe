import { Link, useRouterState } from "@tanstack/react-router";
import { Bell, ChevronDown, Contrast, Menu, ShieldCheck, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { navItems } from "@/lib/demo-data";
import { Button } from "@/components/button";

export function CivicSeal({ small = false }: { small?: boolean }) {
  return <span className={small ? "civic-seal size-8 text-[9px]" : "civic-seal size-10 text-[10px]"}>GL</span>;
}

export function SiteShell({ children }: { children: ReactNode }) {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const [mobileOpen, setMobileOpen] = useState(false);
  const [language, setLanguage] = useState<"ENG" | "हिन्दी">("ENG");
  const [alerts, setAlerts] = useState(false);
  const [panchayat, setPanchayat] = useState("Shivpuri Gram Panchayat");

  return <div className="min-h-screen bg-background text-foreground">
    <header className="sticky top-0 z-50 border-b border-border bg-primary-container text-primary-foreground shadow-sm">
      <div className="mx-auto flex min-h-18 max-w-7xl items-center gap-3 px-4 py-3 lg:px-8">
        <Link to="/" className="flex min-w-0 items-center gap-3" aria-label="Grama Lekha home">
          <CivicSeal />
          <span className="min-w-0"><span className="block font-display text-lg font-bold leading-none">GRAMA LEKHA <span className="ml-1 rounded-sm border border-brass/50 bg-brass-deep px-1.5 py-0.5 font-sans text-[9px] uppercase">Civic Portal</span></span><span className="mt-1 block truncate text-[10px] font-semibold uppercase text-primary-soft">Digital participation & social audit</span></span>
        </Link>
        <div className="ml-auto hidden items-center gap-3 lg:flex">
          <label className="relative flex items-center gap-2 border-l border-primary-soft/30 pl-4 text-xs"><span className="font-bold text-brass">LGD<br/>243918</span><select value={panchayat} onChange={(e) => setPanchayat(e.target.value)} className="max-w-52 appearance-none bg-transparent pr-6 font-semibold outline-none"><option>Shivpuri Gram Panchayat</option><option>Rajgir Gram Panchayat</option><option>Pawapuri Gram Panchayat</option></select><ChevronDown className="pointer-events-none absolute right-0 size-4" /></label>
          <Link to="/vote" className="rounded-sm border border-secondary-soft/60 bg-primary px-3 py-2 text-xs font-bold"><span className="mr-2 inline-block size-2 animate-pulse rounded-full bg-secondary-soft"/>Gram Sabha Live: GS-4821</Link>
        </div>
        <div className="ml-auto flex items-center gap-1 lg:ml-2">
          <Button variant="ghost" size="sm" onClick={() => setLanguage(language === "ENG" ? "हिन्दी" : "ENG")} aria-label="Switch language" className="text-primary-foreground hover:bg-primary">{language}</Button>
          <Button variant="ghost" size="icon" aria-label="High contrast"><Contrast className="size-4" /></Button>
          <div className="relative"><Button variant="ghost" size="icon" onClick={() => setAlerts(!alerts)} aria-label="Notifications"><Bell className="size-4"/><span className="absolute right-1 top-1 size-4 rounded-full bg-secondary text-[9px]">3</span></Button>{alerts && <div className="absolute right-0 top-11 w-72 rounded-md border border-border bg-card p-4 text-card-foreground shadow-xl"><p className="font-bold">Audit alerts</p><p className="mt-2 text-xs text-muted-foreground">Voting is open on Item 03. Two action deadlines are approaching.</p></div>}</div>
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">{mobileOpen ? <X/> : <Menu/>}</Button>
        </div>
      </div>
      <nav className={`${mobileOpen ? "flex" : "hidden"} border-t border-primary-soft/20 bg-card p-3 text-card-foreground lg:flex lg:h-11 lg:items-stretch lg:justify-center lg:p-0`} aria-label="Main navigation">
        <div className="flex w-full max-w-7xl flex-col lg:flex-row lg:px-8">{navItems.map(([to,label]) => <Link key={to} to={to} activeOptions={{exact: to === "/"}} onClick={() => setMobileOpen(false)} className={`flex min-h-10 items-center border-b-2 px-4 text-xs font-bold uppercase transition-colors ${path === to ? "border-secondary text-primary" : "border-transparent text-muted-foreground hover:bg-muted hover:text-foreground"}`}>{label}</Link>)}</div>
      </nav>
    </header>
    <main>{children}</main>
    <footer className="mt-14 border-t border-border bg-muted"><div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 md:grid-cols-[1fr_auto] lg:px-8"><div><div className="flex items-center gap-3"><CivicSeal small/><h2 className="font-display text-xl font-bold text-primary">Grama Lekha</h2></div><p className="mt-3 max-w-2xl text-sm text-muted-foreground">Empowering Gram Panchayats with transparent social audits, participatory democracy and durable public records.</p></div><div className="flex items-center gap-3 rounded-md border border-border bg-card p-4 text-xs font-bold"><ShieldCheck className="size-5 text-secondary"/>INTER-OPERABLE GOVERNANCE STACK<br/>Last synced: Today at 09:30 AM IST</div></div></footer>
  </div>;
}

export function PageHeader({ eyebrow, title, description, actions }: { eyebrow: string; title: string; description?: string; actions?: ReactNode }) {
 return <section className="border-b border-border bg-muted"><div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-7 md:flex-row md:items-end md:justify-between lg:px-8"><div><p className="eyebrow">{eyebrow}</p><h1 className="mt-1 font-display text-3xl font-bold text-primary md:text-4xl">{title}</h1>{description && <p className="mt-2 max-w-3xl text-sm text-muted-foreground">{description}</p>}</div>{actions && <div className="flex flex-wrap gap-2">{actions}</div>}</div></section>
}
