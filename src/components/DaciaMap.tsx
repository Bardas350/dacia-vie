import { useState } from "react";
import { Compass, MapPin, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const stages = [
  { title: "Tracii", period: "Mileniul I î.Hr.", image: "/assets/harta-traci.jpeg", text: "Lumea tracică se dezvoltă în sud-estul Europei, în Peninsula Balcanică și în apropierea Dunării. Conturul roșu din imagine este orientativ." },
  { title: "Dacii și geții", period: "Secolele V–III î.Hr. și perioada următoare", image: "/assets/harta-daci-geti.jpeg", text: "Comunitățile dacice și getice ocupă spațiul din jurul Carpaților, al Dunării și al Mării Negre. Răspândirea lor nu presupune un singur stat permanent." },
  { title: "Dacia sub Burebista", period: "Aproximativ 82–44 î.Hr.", image: "/assets/harta-burebista.jpeg", text: "Porțiunile mov ale hărții furnizate ilustrează extinderea propusă pentru perioada lui Burebista, dincolo de conturul roșu. Întinderea exactă și natura controlului rămân discutate." },
  { title: "Dacia sub Decebal", period: "Sfârșitul secolului I – începutul secolului II d.Hr.", image: "/assets/harta-decebal.jpeg", text: "Regatul lui Decebal are centrul politic și religios la Sarmizegetusa Regia. Acesta nu trebuie confundat cu provincia romană creată după cucerirea din 106 d.Hr." },
];

export default function DaciaMap() {
  const [selected, setSelected] = useState(0);
  const [zoom, setZoom] = useState(1);
  const stage = stages[selected];

  return (
    <section id="harta" className="my-12 rounded-2xl border bg-card p-5 sm:p-8">
      <div className="flex items-start justify-between gap-4">
        <div><p className="eyebrow text-primary">Atlas istoric interactiv</p><h2 className="mt-2 text-3xl font-semibold sm:text-4xl">Patru etape. Un spațiu în schimbare.</h2><p className="mt-3 text-xs leading-relaxed text-muted-foreground">Alege o etapă pentru a schimba harta. Mărește imaginea și deplasează-te prin ea pentru a vedea detaliile.</p></div>
        <Compass size={36} strokeWidth={1} className="hidden shrink-0 text-[hsl(var(--bronze))] sm:block" />
      </div>
      <div className="my-6 grid grid-cols-1 gap-2 sm:grid-cols-2" role="group" aria-label="Etape istorice">
        {stages.map((item, i) => <Button key={item.title} variant="outline" aria-pressed={selected === i} onClick={() => { setSelected(i); setZoom(1); }} className={`h-auto justify-start whitespace-normal rounded-xl px-4 py-3 text-left text-xs ${selected === i ? 'border-primary bg-primary text-white hover:bg-primary/90 hover:text-white' : 'bg-secondary/30 hover:border-primary'}`}><span className="mr-2 opacity-80">0{i + 1}</span>{item.title}</Button>)}
      </div>
      <div className="grid gap-5 lg:grid-cols-[1.7fr_1fr]">
        <div className="min-w-0">
          <div className="mb-3 flex items-center justify-between gap-3"><span className="text-[11px] font-semibold text-primary">Harta {selected + 1} / 4</span><div className="flex items-center gap-2"><Button variant="outline" size="icon" aria-label="Micșorează harta" disabled={zoom === 1} onClick={() => setZoom(Math.max(1, zoom - 0.5))} className="h-8 w-8 rounded-full"><Minus size={14} /></Button><span className="w-10 text-center text-[11px]">{zoom * 100}%</span><Button variant="outline" size="icon" aria-label="Mărește harta" disabled={zoom === 2.5} onClick={() => setZoom(Math.min(2.5, zoom + 0.5))} className="h-8 w-8 rounded-full"><Plus size={14} /></Button></div></div>
          <div className="max-h-[520px] overflow-auto rounded-xl border bg-secondary/30" tabIndex={0} role="region" aria-label="Hartă cu derulare">
            <div style={{ width: `${zoom * 100}%` }}><img src={stage.image} alt={`Hartă istorică orientativă — ${stage.title}`} className="block h-auto w-full" /></div>
          </div>
        </div>
        <div className="rounded-xl bg-secondary/40 p-6" aria-live="polite"><p className="eyebrow !text-[9px] text-primary">{stage.period}</p><h3 className="mt-3 text-3xl font-semibold">{stage.title}</h3><p className="mt-4 text-xs leading-[1.9] text-muted-foreground">{stage.text}</p><div className="mt-6 border-t pt-5"><p className="flex items-center gap-2 text-xs font-bold text-primary"><MapPin size={16} /> Sarmizegetusa Regia</p><p className="mt-3 text-xs leading-relaxed text-muted-foreground">Singurul sit localizat în atlas. Este marcat cu albastru pe harta lui Decebal; pentru celelalte epoci nu este prezentat ca o capitală contemporană.</p>{selected !== 3 && <Button variant="outline" onClick={() => { setSelected(3); setZoom(1); }} className="mt-4 h-auto rounded-full border-primary/40 px-4 py-2 text-xs text-primary">Localizează Sarmizegetusa Regia</Button>}</div></div>
      </div>
      <p className="mt-5 text-[10px] leading-relaxed text-muted-foreground">Hărți furnizate de utilizator, cu repere geografice moderne și contururi desenate orientativ. Nu reprezintă frontiere antice certe sau hărți la aceeași scară. Denumirile moderne de pe fundal sunt doar repere.</p>
    </section>
  );
}
