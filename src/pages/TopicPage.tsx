import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, BookOpen, Info, ArrowUpRight } from "lucide-react";
import { topics, sources } from "@/data/topics";
import TopicCard from "@/components/TopicCard";
import DaciaMap from "@/components/DaciaMap";
import BattleVideo from "@/components/BattleVideo";
import SectionImages from "@/components/SectionImages";
import NotFound from "@/pages/NotFound";
import { markTopicRead } from "@/lib/progress";

export default function TopicPage() {
  const { slug } = useParams();
  const topic = topics.find(t => t.slug === slug);
  useEffect(() => {
    if (slug && topic) markTopicRead(slug);
  }, [slug, topic]);
  if (!topic) return <NotFound />;
  const index = topics.indexOf(topic);
  const nextTopic = topics[index + 1];
  return <>
    <section className="border-b bg-secondary/30"><div className="container-wide py-9 sm:py-12"><Link to="/#teme" className="inline-flex items-center gap-2 text-[11px] font-semibold text-muted-foreground hover:text-primary"><ArrowLeft size={14} /> Înapoi la cele 10 teme</Link><div className="mt-8 grid items-center gap-8 md:grid-cols-[1.1fr_1fr]"><div className="enter"><p className="eyebrow text-primary">Tema {String(index + 1).padStart(2, '0')} / 10 · {topic.eyebrow}</p><h1 className="mt-4 text-5xl font-semibold leading-[1.05] sm:text-6xl lg:text-7xl">{topic.title}</h1><p className="mt-5 max-w-lg text-sm leading-[1.9] text-muted-foreground">{topic.description}</p><div className="mt-7 flex items-center gap-2 text-[10px] text-muted-foreground"><BookOpen size={14} /> Lectură educativă <span className="mx-2">·</span> Surse indicate</div></div><figure><img src={topic.image} alt={`Reconstituire artistică ilustrând tema ${topic.title}`} className="h-64 w-full rounded-xl object-cover sm:h-72" /><figcaption className="mt-2 text-[9px] text-muted-foreground">Interpretare artistică · imagine generată cu AI, nu document istoric</figcaption></figure></div></div></section>
    <div className="container-wide py-12"><div className="grid gap-10 lg:grid-cols-[210px_1fr]">
      <aside className="hidden lg:block"><div className="sticky top-28"><p className="eyebrow mb-4 !text-[9px] text-muted-foreground">În această pagină</p><nav aria-label="Cuprins" className="space-y-1">{topic.sections.map((s, i) => <a key={s.title} href={`#sectiune-${i}`} className="block rounded-lg px-3 py-3 text-[11px] leading-relaxed hover:bg-secondary hover:text-primary">{s.title}</a>)}{slug === 'raspandire-geografica' && <a href="#harta" className="block px-3 py-3 text-[11px] text-primary">Harta interactivă</a>}<a href="#surse" className="block px-3 py-3 text-[11px] text-muted-foreground">Surse și lecturi</a></nav></div></aside>
      <article className="min-w-0"><div className="max-w-[760px] space-y-9">{topic.sections.map((s, i) => <section key={s.title} id={`sectiune-${i}`}><div className="flex items-center gap-3"><span className="font-display text-2xl text-primary/50">{String(i + 1).padStart(2, '0')}</span><h2 className="text-[32px] font-semibold leading-tight">{s.title}</h2></div>{s.tag && <span className="mt-3 inline-block rounded-full bg-secondary px-3 py-1 text-[9px] font-bold text-primary">{s.tag}</span>}<p className="mt-4 whitespace-pre-line text-[13px] leading-[2] text-muted-foreground">{s.text}</p>{s.items && <ul className="mt-4 list-disc space-y-3 pl-5 text-[13px] leading-[1.9] text-muted-foreground">{s.items.map(item => <li key={item}>{item}</li>)}</ul>}{(s.image || s.images) && <SectionImages images={s.images ?? [{ src: s.image!, alt: s.caption ?? s.title }]} />}</section>)}<div className="flex items-start gap-3 rounded-xl border border-primary/20 bg-primary/5 p-5"><Info size={18} className="mt-0.5 shrink-0 text-primary" /><p className="text-xs leading-[1.8]">{topic.note}</p></div></div>
      {slug === 'raspandire-geografica' && <DaciaMap />}
      {slug === 'vocabular' && <section className="my-10 rounded-xl border bg-card p-6"><p className="eyebrow text-primary">Din materialul furnizat · pagina 95</p><h2 className="mt-3 text-3xl font-semibold">Cuvinte atribuite substratului</h2><div className="mt-5 flex flex-wrap gap-2">{['abur', 'baci', 'balaur', 'brânză', 'copac', 'mazăre', 'moș', 'strugure', 'vatră', 'viezure'].map(w => <span key={w} className="font-display rounded-lg border bg-secondary/40 px-4 py-2 text-2xl">{w}</span>)}</div><p className="mt-5 text-xs leading-relaxed text-muted-foreground">Atribuiri lingvistice, nu transcrieri dintr-un dicționar dacic păstrat. Româna rămâne o limbă romanică, cu structură de bază latină.</p></section>}
      {slug === 'tactici-de-lupta' && <BattleVideo />}
      <section id="surse" className="mt-10 border-t pt-7"><p className="eyebrow !text-[9px] text-primary">Surse și lecturi pentru această temă</p><ul className="mt-4 space-y-3">{topic.sources.map(key => <li key={key} className="text-[11px] leading-relaxed">{sources[key].url ? <a href={sources[key].url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary">{sources[key].label}<ArrowUpRight size={12} /></a> : <span className="text-muted-foreground">{sources[key].label}</span>}</li>)}</ul><Link to="/surse" className="mt-5 inline-block text-[10px] font-bold text-primary">Despre surse și limitele reconstituirii →</Link></section>
      {topic.transition && nextTopic && <section data-testid="topic-transition" className="mt-10 rounded-2xl border border-primary/25 bg-primary/5 p-6 sm:p-8"><p className="eyebrow text-primary">De la {topic.title} la {nextTopic.title}</p><p className="font-display mt-4 text-2xl leading-relaxed">{topic.transition}</p><p className="mt-3 text-[10px] leading-relaxed text-muted-foreground">Legătură tematică propusă. Relațiile istorice sugerate nu sunt toate demonstrate; monoteismul, continuitatea directă și semnificația motivelor rămân discutate.</p><Link to={`/${nextTopic.slug}`} className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-xs font-semibold text-white">Continuă cu {nextTopic.title} <ArrowRight size={15} /></Link></section>}
      </article></div>
      <section className="mt-16 border-t pt-10"><div className="mb-7 flex items-center justify-between"><div><p className="eyebrow text-primary">Continuă călătoria</p><h2 className="mt-2 text-4xl font-semibold">Povești care se leagă.</h2></div><Link to="/test" className="hidden items-center gap-2 text-xs font-bold text-primary sm:flex">Încearcă testul <ArrowRight size={15} /></Link></div><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{topic.related.map(slug => { const t = topics.find(t => t.slug === slug)!; return <TopicCard key={slug} topic={t} index={topics.indexOf(t)} />; })}</div></section>
    </div>
  </>;
}
