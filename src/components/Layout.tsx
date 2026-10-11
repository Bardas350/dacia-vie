import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { ArrowUpRight, ChevronDown, Menu, Moon, Mountain, Sun, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { topics } from "@/data/topics";

export function Brand() {
  return <Link to="/" className="flex items-center gap-3" aria-label="Dacia Vie — acasă"><span className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 text-primary"><Mountain size={23} strokeWidth={1.4} /></span><span><span className="font-display block text-[27px] font-bold leading-none tracking-tight">DACIA <span className="text-primary">VIE</span></span><span className="mt-1 block text-[8px] font-semibold uppercase tracking-[.24em] text-muted-foreground">Civilizația strămoșilor</span></span></Link>;
}
export default function Layout() {
  const [open, setOpen] = useState(false);
  const [themes, setThemes] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === "undefined") return false;
    const savedTheme = window.localStorage.getItem("dacia-vie-theme");
    return savedTheme ? savedTheme === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
  });
  const location = useLocation();
  useEffect(() => {
    setOpen(false); setThemes(false);
    const topic = topics.find(t => location.pathname === `/${t.slug}`);
    document.title = `${topic?.title ?? (location.pathname === '/test' ? 'Test de cunoștințe' : 'Civilizația strămoșilor')} — Dacia Vie`;
    if (location.hash) { requestAnimationFrame(() => document.getElementById(location.hash.slice(1))?.scrollIntoView()); }
    else window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    window.localStorage.setItem("dacia-vie-theme", darkMode ? "dark" : "light");
  }, [darkMode]);
  const themeLabel = darkMode ? "Activează modul luminos" : "Activează modul întunecat";
  return <div className="min-h-screen">
    <a href="#continut" className="sr-only focus:not-sr-only focus:fixed focus:left-5 focus:top-5 focus:z-50 focus:rounded-lg focus:bg-card focus:p-4">Sari la conținut</a>
    <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur-md">
      <div className="container-wide flex h-[82px] items-center justify-between gap-5">
        <Brand />
        <nav aria-label="Navigare principală" className="hidden items-center gap-8 text-[12px] font-semibold md:flex">
          <NavLink to="/" className={({ isActive }) => isActive ? 'text-primary' : 'text-muted-foreground hover:text-primary'}>Acasă</NavLink>
          <div className="relative" onBlur={e => { if (!e.currentTarget.contains(e.relatedTarget)) setThemes(false); }}>
            <button className="flex items-center gap-2 py-3 hover:text-primary" aria-expanded={themes} aria-controls="themes-menu" onClick={() => setThemes(!themes)}>Explorează temele <ChevronDown size={14} /></button>
            {themes && <div id="themes-menu" className="absolute left-0 top-full w-64 rounded-xl border bg-card p-2 shadow-lg">{topics.map((t, i) => <Link key={t.slug} to={`/${t.slug}`} className="flex items-center gap-3 rounded-lg px-3 py-2.5 hover:bg-secondary"><span className="text-[10px] text-primary">{String(i + 1).padStart(2, '0')}</span>{t.title}</Link>)}</div>}
          </div>
          <NavLink to="/raspandire-geografica" className="flex items-center gap-1.5 hover:text-primary">Harta Daciei <ArrowUpRight size={14} /></NavLink>
          <button type="button" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-primary transition-colors hover:bg-secondary" aria-label={themeLabel} title={themeLabel} data-testid="theme-toggle" onClick={() => setDarkMode(!darkMode)}>{darkMode ? <Sun size={17} /> : <Moon size={17} />}</button>
          <Button asChild className="h-10 rounded-lg px-5 text-[11px] font-bold"><Link to="/test">Testează-ți cunoștințele <ArrowUpRight size={15} /></Link></Button>
        </nav>
        <div className="flex items-center gap-2 md:hidden">
          <button type="button" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-primary" aria-label={themeLabel} title={themeLabel} data-testid="theme-toggle" onClick={() => setDarkMode(!darkMode)}>{darkMode ? <Sun size={17} /> : <Moon size={17} />}</button>
          <Button variant="ghost" size="icon" className="rounded-full" aria-label={open ? 'Închide meniul' : 'Deschide meniul'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
        </div>
      </div>
      {open && <nav aria-label="Navigare mobilă" className="max-h-[75vh] overflow-y-auto border-t px-5 py-4 md:hidden"><Link to="/" className="block rounded-lg p-3 text-primary">Acasă</Link>{topics.map(t => <Link key={t.slug} to={`/${t.slug}`} className="block rounded-lg p-3 text-sm hover:bg-secondary">{t.title}</Link>)}<Button asChild className="mt-3 w-full rounded-lg"><Link to="/test">Testează-ți cunoștințele</Link></Button></nav>}
    </header>
    <main id="continut"><Outlet /></main>
    <footer className="border-t bg-secondary/30 py-10"><div className="container-wide flex flex-col justify-between gap-7 md:flex-row"><div><Brand /><p className="mt-4 max-w-xs text-xs leading-relaxed text-muted-foreground">O călătorie în trecut. Cu curiozitate, respect pentru patrimoniu și grijă pentru adevăr.</p></div><div className="flex flex-wrap gap-x-8 gap-y-4 text-xs"><Link to="/#teme" className="hover:text-primary">Cele 10 teme</Link><Link to="/surse" className="hover:text-primary">Surse și metodologie</Link><Link to="/test" className="hover:text-primary">Test de cunoștințe</Link></div></div><div className="container-wide mt-8 flex flex-col justify-between gap-2 border-t pt-5 text-[10px] text-muted-foreground sm:flex-row"><span>Dacia Vie · Proiect educativ, fără conturi</span><span>Imagini generate cu AI · reconstituiri artistice</span></div></footer>
  </div>;
}
