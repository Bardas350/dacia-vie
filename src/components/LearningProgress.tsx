import { Check, RotateCcw } from "lucide-react";
import { topics } from "@/data/topics";
import { clearReadTopics, getReadTopics } from "@/lib/progress";
import { useEffect, useState } from "react";

export default function LearningProgress() {
  const [readTopics, setReadTopics] = useState<string[]>(getReadTopics);
  const completed = topics.filter(topic => readTopics.includes(topic.slug)).length;
  const percentage = Math.round((completed / topics.length) * 100);

  useEffect(() => {
    const syncProgress = () => setReadTopics(getReadTopics());
    window.addEventListener("storage", syncProgress);
    return () => window.removeEventListener("storage", syncProgress);
  }, []);

  function resetProgress() {
    clearReadTopics();
    setReadTopics([]);
  }

  return <section className="border-y bg-secondary/35" data-testid="learning-progress"><div className="container-wide flex flex-col gap-5 py-6 sm:flex-row sm:items-center sm:justify-between"><div className="flex items-center gap-4"><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary"><Check size={20} /></span><div><p className="eyebrow text-primary">Progresul tău</p><p className="mt-1 text-sm font-semibold">Ai explorat {completed} din {topics.length} teme</p></div></div><div className="flex items-center gap-4 sm:min-w-[320px]"><div className="h-2 flex-1 overflow-hidden rounded-full bg-background"><div className="h-full rounded-full bg-primary transition-all" style={{ width: `${percentage}%` }} /></div><span className="w-10 text-right text-xs font-bold text-primary">{percentage}%</span><button type="button" onClick={resetProgress} disabled={completed === 0} className="inline-flex items-center gap-1.5 text-[10px] font-bold text-muted-foreground transition-colors hover:text-primary disabled:pointer-events-none disabled:opacity-40" aria-label="Resetează progresul"><RotateCcw size={13} /> Resetare</button></div></div></section>;
}
