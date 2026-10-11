import { Accessibility, Check, Minus, Plus, RotateCcw } from "lucide-react";
import { useEffect, useState } from "react";

const preferencesKey = "dacia-vie-accessibility";
type AccessibilityPreferences = { largeText: boolean; highContrast: boolean; reducedMotion: boolean };
const defaultPreferences: AccessibilityPreferences = { largeText: false, highContrast: false, reducedMotion: false };

function readPreferences(): AccessibilityPreferences {
  if (typeof window === "undefined") return defaultPreferences;
  try {
    const stored = JSON.parse(window.localStorage.getItem(preferencesKey) ?? "{}");
    return { ...defaultPreferences, ...stored };
  } catch {
    return defaultPreferences;
  }
}

export default function AccessibilityControls() {
  const [open, setOpen] = useState(false);
  const [preferences, setPreferences] = useState<AccessibilityPreferences>(readPreferences);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("text-large", preferences.largeText);
    root.classList.toggle("high-contrast", preferences.highContrast);
    root.classList.toggle("reduce-motion", preferences.reducedMotion);
    window.localStorage.setItem(preferencesKey, JSON.stringify(preferences));
  }, [preferences]);

  function updatePreference(key: keyof AccessibilityPreferences) {
    setPreferences(current => ({ ...current, [key]: !current[key] }));
  }

  function resetPreferences() {
    setPreferences(defaultPreferences);
  }

  return <div className="relative" onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false); }}>
    <button type="button" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-primary transition-colors hover:bg-secondary" aria-label="Deschide setările de accesibilitate" aria-expanded={open} aria-controls="accessibility-menu" data-testid="accessibility-toggle" onClick={() => setOpen(current => !current)}><Accessibility size={17} /></button>
    {open && <div id="accessibility-menu" role="dialog" aria-label="Setări de accesibilitate" className="absolute right-0 top-12 z-50 w-72 rounded-2xl border bg-card p-4 text-left shadow-xl">
      <p className="eyebrow text-primary">Personalizare</p>
      <p className="mt-1 text-sm font-semibold">Alege cum citești site-ul</p>
      <div className="mt-4 space-y-2">
        <button type="button" onClick={() => updatePreference("largeText")} aria-pressed={preferences.largeText} className="flex w-full items-center justify-between rounded-xl border px-3 py-3 text-xs hover:bg-secondary"><span className="flex items-center gap-2"><Plus size={14} /> Text mai mare</span>{preferences.largeText && <Check size={15} className="text-primary" />}</button>
        <button type="button" onClick={() => updatePreference("highContrast")} aria-pressed={preferences.highContrast} className="flex w-full items-center justify-between rounded-xl border px-3 py-3 text-xs hover:bg-secondary"><span className="flex items-center gap-2"><span className="font-bold">Aa</span> Contrast ridicat</span>{preferences.highContrast && <Check size={15} className="text-primary" />}</button>
        <button type="button" onClick={() => updatePreference("reducedMotion")} aria-pressed={preferences.reducedMotion} className="flex w-full items-center justify-between rounded-xl border px-3 py-3 text-xs hover:bg-secondary"><span className="flex items-center gap-2"><Minus size={14} /> Mai puțină mișcare</span>{preferences.reducedMotion && <Check size={15} className="text-primary" />}</button>
      </div>
      <button type="button" onClick={resetPreferences} className="mt-4 inline-flex items-center gap-2 text-[10px] font-bold text-muted-foreground hover:text-primary"><RotateCcw size={13} /> Resetează preferințele</button>
    </div>}
  </div>;
}
