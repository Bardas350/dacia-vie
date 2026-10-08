import { Link } from "react-router-dom";
import { Compass, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return <div className="topographic flex min-h-[65vh] items-center justify-center px-5 py-16 text-center"><div><Compass size={60} strokeWidth={1} className="mx-auto text-primary" /><p className="eyebrow mt-7 text-primary">404 · În afara hărții</p><h1 className="mt-4 text-5xl font-semibold">Acest drum nu duce nicăieri.</h1><p className="mt-5 text-sm text-muted-foreground">Pagina căutată nu există. Călătoria prin Dacia poate continua.</p><Button asChild className="action-button mt-8"><Link to="/"><ArrowLeft size={15} /> Înapoi acasă</Link></Button></div></div>;
}
