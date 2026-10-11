import {
  AlignmentType,
  Document,
  HeadingLevel,
  ImageRun,
  PageBreak,
  Packer,
  Paragraph,
  TextRun,
} from "docx";
import { questions } from "@/data/quiz";
import { sources, topics } from "@/data/topics";

const imagePaths = [
  "/assets/dacia-fortress.png",
  "/assets/dacia-geography.png",
  "/assets/dacia-clothing.png",
  "/assets/dacia-sanctuary.png",
  "/assets/dacia-life.png",
  "/assets/dacia-warriors.png",
  "/assets/dacia-food.png",
  "/assets/dacia-language.png",
  "/assets/dacia-legends.png",
  "/assets/dacia-art.png",
  "/assets/lupta-falx.png",
  "/assets/origine-columna.jpeg",
  "/assets/origine-bust.jpeg",
  "/assets/arta-bratara.jpeg",
  "/assets/arta-coif.jpeg",
  "/assets/arta-carnyx.jpeg",
  "/assets/harta-traci.jpeg",
  "/assets/harta-daci-geti.jpeg",
  "/assets/harta-burebista.jpeg",
  "/assets/harta-decebal.jpeg",
];

const imageCaptions: Record<string, string> = {
  "/assets/dacia-fortress.png": "Reconstituire artistică a unei cetăți dacice în munții Carpați",
  "/assets/dacia-geography.png": "Reconstituire artistică a spațiului carpato-dunărean",
  "/assets/dacia-clothing.png": "Reconstituire artistică a vestimentației dacilor",
  "/assets/dacia-sanctuary.png": "Reconstituire artistică a unui sanctuar dacic",
  "/assets/dacia-life.png": "Reconstituire artistică a vieții cotidiene dacice",
  "/assets/dacia-warriors.png": "Reconstituire artistică a războinicilor daci",
  "/assets/dacia-food.png": "Reconstituire artistică a alimentației dacilor",
  "/assets/dacia-language.png": "Reconstituire artistică inspirată de vocabularul dacilor",
  "/assets/dacia-legends.png": "Reconstituire artistică inspirată de legendele dacilor",
  "/assets/dacia-art.png": "Reconstituire artistică a artei dacice",
  "/assets/lupta-falx.png": "Falx cu lamă curbată și mâner din lemn",
  "/assets/origine-columna.jpeg": "Relief cu scene antice",
  "/assets/origine-bust.jpeg": "Bust reprezentând un dac cu căciulă",
  "/assets/arta-bratara.jpeg": "Brățară spiralată din aur cu motive decorative",
  "/assets/arta-coif.jpeg": "Coiful de aur de la Coțofenești",
  "/assets/arta-carnyx.jpeg": "Instrument de suflat cu protomă animală, tip carnyx",
  "/assets/harta-traci.jpeg": "Hartă istorică orientativă — Tracii",
  "/assets/harta-daci-geti.jpeg": "Hartă istorică orientativă — Dacii și geții",
  "/assets/harta-burebista.jpeg": "Hartă istorică orientativă — Dacia sub Burebista",
  "/assets/harta-decebal.jpeg": "Hartă istorică orientativă — Dacia sub Decebal",
};

const mapTexts = [
  ["Tracii", "Mileniul I î.Hr.", "Lumea tracică se dezvoltă în sud-estul Europei, în Peninsula Balcanică și în apropierea Dunării. Conturul roșu din imagine este orientativ."],
  ["Dacii și geții", "Secolele V–III î.Hr. și perioada următoare", "Comunitățile dacice și getice ocupă spațiul din jurul Carpaților, al Dunării și al Mării Negre. Răspândirea lor nu presupune un singur stat permanent."],
  ["Dacia sub Burebista", "Aproximativ 82–44 î.Hr.", "Porțiunile mov ale hărții furnizate ilustrează extinderea propusă pentru perioada lui Burebista, dincolo de conturul roșu. Întinderea exactă și natura controlului rămân discutate."],
  ["Dacia sub Decebal", "Sfârșitul secolului I – începutul secolului II d.Hr.", "Regatul lui Decebal are centrul politic și religios la Sarmizegetusa Regia. Acesta nu trebuie confundat cu provincia romană creată după cucerirea din 106 d.Hr."],
];

function textParagraphs(text: string) {
  return text.split("\n").map(line => new Paragraph({ text: line || " " }));
}

function heading(text: string, level: (typeof HeadingLevel)[keyof typeof HeadingLevel]) {
  return new Paragraph({ text, heading: level });
}

async function loadImage(path: string) {
  const response = await fetch(path);
  if (!response.ok) throw new Error(`Imaginea ${path} nu a putut fi încărcată.`);
  return new Uint8Array(await response.arrayBuffer());
}

export async function downloadWordDocument() {
  const imageCache = new Map<string, Uint8Array>();
  const getImage = async (path: string) => {
    const cached = imageCache.get(path);
    if (cached) return cached;
    const data = await loadImage(path);
    imageCache.set(path, data);
    return data;
  };
  const children: Paragraph[] = [];

  children.push(new Paragraph({ text: "Dacia Vie", heading: HeadingLevel.TITLE, alignment: AlignmentType.CENTER }));
  children.push(new Paragraph({ text: "Civilizația strămoșilor", alignment: AlignmentType.CENTER }));
  children.push(new Paragraph({ text: "Document informativ cu textele, imaginile și minitestul de pe site.", alignment: AlignmentType.CENTER }));
  children.push(new Paragraph({ children: [new PageBreak()] }));

  children.push(heading("Conținutul site-ului", HeadingLevel.HEADING_1));
  children.push(...textParagraphs("Dacii. O lume vie.\nUn popor al Carpaților. Cetăți ridicate în munți, credințe în nemurire și o moștenire care încă ne vorbește. Descoperă civilizația din spatele legendelor."));
  children.push(heading("Funcții ale site-ului", HeadingLevel.HEADING_2));
  children.push(...textParagraphs("10 teme de explorat — O civilizație, multe perspective\nO hartă interactivă — Descoperă locurile trecutului\nIstorie, nu doar legende — Surse și interpretări explicate\nMoștenirea noastră — Cunoaște. Înțelege. Păstrează.\nProgresul tău — Temele citite sunt memorate local în browser.\nPersonalizare — Dark mode, text mai mare, contrast ridicat și mai puțină mișcare."));

  children.push(heading("Teme", HeadingLevel.HEADING_1));
  for (const topic of topics) {
    children.push(heading(topic.title, HeadingLevel.HEADING_2));
    children.push(new Paragraph({ text: topic.eyebrow }));
    children.push(...textParagraphs(topic.description));
    for (const section of topic.sections) {
      children.push(heading(section.title, HeadingLevel.HEADING_3));
      if (section.tag) children.push(new Paragraph({ text: section.tag }));
      children.push(...textParagraphs(section.text));
      if (section.items) children.push(...section.items.map(item => new Paragraph({ text: item, bullet: { level: 0 } })));
    }
    children.push(new Paragraph({ children: [new TextRun({ text: `Notă: ${topic.note}`, italics: true })] }));
    children.push(new Paragraph({ text: `Surse: ${topic.sources.map(source => sources[source].label).join("; ")}` }));
    children.push(new Paragraph({ children: [new PageBreak()] }));
  }

  children.push(heading("Harta interactivă", HeadingLevel.HEADING_1));
  children.push(...textParagraphs("Patru etape. Un spațiu în schimbare. Alege o etapă pentru a schimba harta. Hărțile sunt furnizate cu repere geografice moderne și contururi desenate orientativ; nu reprezintă frontiere antice certe sau hărți la aceeași scară."));
  for (const [title, period, text] of mapTexts) {
    children.push(heading(title, HeadingLevel.HEADING_2));
    children.push(new Paragraph({ text: period }));
    children.push(...textParagraphs(text));
  }

  children.push(heading("Surse și metodologie", HeadingLevel.HEADING_1));
  children.push(...textParagraphs("Dacia Vie este o introducere educativă, nu o monografie. Textele sintetizează materialele furnizate și lecturi istorice; referințele sunt indicate și în fiecare pagină tematică.\n\nDovezi: Vestigii, obiecte și texte antice. Un text este o sursă, dar autorul său poate avea limite și prejudecăți.\nInterpretări: Explicații propuse pentru dovezi. Nu le prezentăm ca adevăruri certe când cercetarea rămâne deschisă.\nLegende: Povești și mărturii culturale. Existența unei povești nu dovedește că evenimentele sale sunt reale."));
  for (const source of Object.values(sources)) children.push(new Paragraph({ text: source.label, bullet: { level: 0 } }));

  children.push(heading("Minitest", HeadingLevel.HEADING_1));
  children.push(new Paragraph({ text: "Alege un răspuns pentru fiecare întrebare. Răspunsul corect și explicația sunt indicate pentru recapitulare." }));
  questions.forEach((question, index) => {
    children.push(heading(`${index + 1}. ${question.topic}`, HeadingLevel.HEADING_2));
    children.push(new Paragraph({ text: question.question }));
    question.options.forEach((option, optionIndex) => children.push(new Paragraph({ text: `${String.fromCharCode(65 + optionIndex)}. ${option}`, bullet: { level: 0 } })));
    children.push(new Paragraph({ children: [new TextRun({ text: `Răspuns corect: ${question.options[question.answer]}`, bold: true })] }));
    children.push(...textParagraphs(`Explicație: ${question.explanation}`));
  });

  children.push(new Paragraph({ children: [new PageBreak()] }));
  children.push(heading("Galeria imaginilor", HeadingLevel.HEADING_1));
  children.push(new Paragraph({ text: "Imaginile tematice sunt interpretări artistice și nu constituie dovezi arheologice. Documentul include toate imaginile locale folosite în site." }));
  for (const path of imagePaths) {
    const data = await getImage(path);
    const type = path.endsWith(".png") ? "png" : "jpg";
    children.push(new Paragraph({ children: [new ImageRun({ data, type, transformation: { width: 520, height: 300 } })], alignment: AlignmentType.CENTER }));
    children.push(new Paragraph({ text: imageCaptions[path] ?? path, alignment: AlignmentType.CENTER }));
  }

  const wordDocument = new Document({ sections: [{ properties: {}, children }] });
  const blob = await Packer.toBlob(wordDocument);
  const url = URL.createObjectURL(blob);
  const anchor = window.document.createElement("a");
  anchor.href = url;
  anchor.download = "dacia-vie-document-complet.docx";
  anchor.click();
  URL.revokeObjectURL(url);
}
