import { FileDown, LoaderCircle } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { downloadWordDocument } from "@/lib/exportWord";

export default function WordDownloadButton() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleDownload() {
    setLoading(true);
    setError("");
    try {
      await downloadWordDocument();
    } catch {
      setError("Documentul nu a putut fi generat. Încearcă din nou.");
    } finally {
      setLoading(false);
    }
  }

  return <div className="mt-6"><Button type="button" onClick={handleDownload} disabled={loading} className="action-button"><span>{loading ? <LoaderCircle size={16} className="animate-spin" /> : <FileDown size={16} />}</span>{loading ? "Se generează documentul..." : "Descarcă documentul Word"}</Button>{error && <p className="mt-2 text-xs text-destructive" role="alert">{error}</p>}</div>;
}
