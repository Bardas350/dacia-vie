import { useState } from "react";
import { ArrowUpRight, Film, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BattleVideo() {
  const [loaded, setLoaded] = useState(false);

  return (
    <section id="animatii" className="my-10 rounded-2xl border bg-secondary/40 p-6 sm:p-8">
      <p className="eyebrow flex items-center gap-2 text-primary"><Film size={16} /> Animații și material video</p>
      <h2 className="mt-3 text-3xl font-semibold">Urmărește materialul propus.</h2>
      <p className="mt-4 text-xs leading-[1.9] text-muted-foreground">Videoclipul furnizat poate fi urmărit integral mai jos, prin YouTube. Este un material extern; explicațiile istorice ale acestei pagini sunt independente de el.</p>
      <div className="mt-6 aspect-video overflow-hidden rounded-xl border bg-[hsl(var(--forest))]">
        {loaded ? (
          <iframe
            src="https://www.youtube-nocookie.com/embed/OI9JxXNdgx4?rel=0"
            title="Material video despre daci — YouTube"
            className="h-full w-full border-0"
            allow="encrypted-media; picture-in-picture; fullscreen"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-4 p-5 text-center text-[#fff8e9]">
            <Film size={36} strokeWidth={1.3} className="text-[#eddbbc]" />
            <Button onClick={() => setLoaded(true)} className="action-button rounded-full bg-[#eddbbc] text-[hsl(var(--forest))] hover:bg-[#fff8e9]">
              <Play size={16} /> Încarcă videoclipul
            </Button>
            <p className="max-w-sm text-[10px] leading-relaxed">La încărcare, browserul se conectează la YouTube. Playerul folosește modul de confidențialitate sporită.</p>
          </div>
        )}
      </div>
      <a href="https://youtu.be/OI9JxXNdgx4" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-primary hover:underline">Deschide sursa originală pe YouTube <ArrowUpRight size={15} /></a>
      <p className="mt-3 text-[10px] leading-relaxed text-muted-foreground">Dacă playerul este blocat de browser sau încorporarea nu este permisă de autor, folosește linkul de mai sus. Nu sunt publicate decupaje ori comentarii atribuite unor cadre neverificate.</p>
    </section>
  );
}
