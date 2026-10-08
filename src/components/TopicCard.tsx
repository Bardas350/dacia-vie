import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Topic } from "@/data/topics";

export default function TopicCard({ topic, index }: { topic: Topic; index: number }) {
  const Icon = topic.icon;
  return <Link to={`/${topic.slug}`} className="group overflow-hidden rounded-xl border bg-card transition-colors hover:border-primary/50">
    <div className="relative h-44 overflow-hidden sm:h-48"><img src={topic.image} alt={`Reconstituire artistică — ${topic.title}`} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" /><span className="absolute left-4 top-4 rounded-md bg-background/95 px-2.5 py-1.5 text-[10px] font-bold tracking-widest text-primary">{String(index + 1).padStart(2, '0')}</span><span className="absolute bottom-3 right-3 rounded-full bg-background/90 p-2 text-primary"><Icon size={17} strokeWidth={1.5} /></span></div>
    <div className="p-5"><p className="eyebrow !text-[8px] text-muted-foreground">{topic.eyebrow}</p><h3 className="mt-2 text-[27px] font-semibold leading-tight">{topic.title}</h3><p className="mt-2 min-h-[60px] text-[11px] leading-[1.8] text-muted-foreground">{topic.description}</p><div className="mt-5 flex items-center justify-between border-t pt-4 text-[10px] font-bold text-primary">Descoperă tema <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></div></div>
  </Link>;
}
