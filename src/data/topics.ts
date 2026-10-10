import { Sprout, Map, Shirt, Sun, Sparkles, Users, Swords, Wheat, BookOpen, ScrollText } from "lucide-react";

export const sources = {
  britannica: { label: "Encyclopaedia Britannica — Dacia", url: "https://www.britannica.com/place/Dacia" },
  unesco: { label: "UNESCO — Cetățile dacice din Munții Orăștiei", url: "https://whc.unesco.org/en/list/906/" },
  herodotus: { label: "Herodot, Istorii IV, 93–96 — text și comentarii", url: "https://penelope.uchicago.edu/Thayer/E/Roman/Texts/Herodotus/4D*.html#93" },
  textiles: { label: "Herodot, Istorii IV, 74 — textilele tracilor", url: "https://penelope.uchicago.edu/Thayer/E/Roman/Texts/Herodotus/4C*.html#74" },
  bendis: { label: "Herodot IV, 33 — contextul cultului tracic", url: "https://penelope.uchicago.edu/Thayer/E/Roman/Texts/Herodotus/4B*.html#33" },
  column: { label: "Columna lui Traian — proiectul Dartmouth College", url: "https://www.trajans-column.org/" },
  manual: { label: "Materialul furnizat: «Povestea limbii române: origine și evoluție», paginile 94–97", url: "" },
};
export type SourceKey = keyof typeof sources;
export type Topic = { slug: string; title: string; eyebrow: string; description: string; image: string; icon: typeof Sprout; sections: { title: string; text: string; tag?: string; image?: string; caption?: string }[]; transition?: string; note: string; sources: SourceKey[]; related: string[] };
const fortress = "/assets/dacia-fortress.png", life = "/assets/dacia-life.png", sanctuary = "/assets/dacia-sanctuary.png", warriors = "/assets/dacia-warriors.png";
export const topics: Topic[] = [
  { slug: "originea", transition: "Originea tracică a influențat răspândirea geografică a dacilor în spațiul carpatic.", title: "Originea", eyebrow: "Începuturile unui neam", description: "Cine erau dacii și cum a luat naștere regatul din inima Carpaților.", image: fortress, icon: Sprout, sections: [
  {
    "title": "Rădăcinile și Scindarea Tracilor",
    "text": "În mileniile III-II î.Hr., fuziunea indo-europenilor cu populațiile locale a dat naștere marii mase a tracilor. Ramura nordică a acestora rămânând complet izolată și adaptată în spațiul carpatic."
  },
  {
    "title": "Geții și Dacii: O Singură Identitate",
    "text": "Numiți geți de către greci și daci de către romani, aceștia formau în realitate un singur popor unit. Ei au transformat stânca și fierul în istorie la nord de Dunăre.",
    "image": "/assets/origine-columna.jpeg",
    "caption": "Fotografie furnizată: relief cu scene antice. Reprezentările romane trebuie citite în contextul lor artistic și politic."
  },
  {
    "title": "Structura și Ierarhia Socială",
    "text": "Comunitatea funcționa după reguli sociale și ierarhice foarte clare și stricte. Puterea aparținea aristocraților care purtau căciuli de lână, restul populației fiind formată din oameni liberi cu părul lung.",
    "image": "/assets/origine-bust.jpeg",
    "caption": "Fotografie furnizată: bust reprezentând un dac cu căciulă. Eticheta vizibilă indică o copie modernă după un model antic."
  },
  {
    "title": "Maturizarea și Coșmarul Romei",
    "text": "Prin exploatarea aurului, baterea de monede și ridicarea cetăților, dacii au trecut printr-o lungă maturizare politică. Această organizare avansată transformându-i, în final, în cel mai temut coșmar logistic al Imperiului Roman."
  }
], note: "Precizare istorică: izolarea completă nu este susținută de contactele documentate cu grecii și romanii. Numele geți și daci nu implică o unitate politică permanentă. Portul sugerează rangul, dar nu descrie exhaustiv statutul tuturor locuitorilor. „Coșmarul Romei” este o formulare retorică.", sources: ["britannica", "herodotus", "manual"], related: ["raspandire-geografica", "vocabular", "tactici-de-lupta"] },
  { slug: "raspandire-geografica", transition: "Această răspândire geografică montană a impus o vestimentație dacică din lână groasă.", title: "Răspândire geografică", eyebrow: "Un tărâm, multe așezări", description: "Explorează spațiul carpato-dunărean și cetățile care îi păstrează povestea.", image: "/assets/dacia-geography.png", icon: Map, sections: [
  {
    "title": "Lumea tracică",
    "tag": "Mileniul I î.Hr.",
    "text": "Tracii erau un grup de populații indo-europene care locuiau în sud-estul Europei, în special în Peninsula Balcanică și în regiunile din apropierea Dunării. În nordul lumii tracice s-au dezvoltat treptat comunitățile dacice și getice. Acestea au intrat în contact cu grecii, sciții și alte populații vecine."
  },
  {
    "title": "Dacii și geții",
    "tag": "Secolele V–III î.Hr. și perioada următoare",
    "text": "Dacii și geții locuiau în regiuni întinse din jurul Carpaților, al Dunării și al Mării Negre. Dacii sunt asociați mai ales cu zona carpatică, iar geții cu Dunărea de Jos și litoralul vestic al Mării Negre. Cele două populații erau foarte apropiate, iar sursele antice le leagă de lumea tracică."
  },
  {
    "title": "Dacia sub Burebista",
    "tag": "Secolul I î.Hr. · aproximativ 82–44 î.Hr.",
    "text": "Sub conducerea lui Burebista, numeroase formațiuni dacice au fost unite, iar puterea regatului s-a extins considerabil. Influența sa a ajuns din zona Carpaților spre Dunăre, Marea Neagră și unele regiuni din vest. Regatul a devenit o importantă putere regională, însă întinderea exactă a teritoriului său rămâne discutată de istorici."
  },
  {
    "title": "Dacia sub Decebal",
    "tag": "Sfârșitul secolului I – începutul secolului II d.Hr.",
    "text": "Decebal a consolidat regatul dac și a transformat Dacia într-o putere importantă la nord de Dunăre. Centrul politic și religios se afla la Sarmizegetusa Regia, în Munții Orăștiei. După războaiele cu împăratul Traian, romanii au cucerit o parte importantă a regatului în anul 106 d.Hr., transformând-o în provincia romană Dacia."
  }
], note: "Hărțile furnizate sunt reprezentări orientative pe un fundal modern, nu frontiere antice certe. Întinderea culturală, influența politică și provincia romană sunt noțiuni diferite.", sources: ["unesco", "britannica"], related: ["originea", "religie", "tactici-de-lupta"] },
  { slug: "vestimentatie", transition: "Anumite piese de vestimentație marcau rangul social în timpul ritualurilor dedicate zeilor și religiei.", title: "Vestimentație", eyebrow: "Firele vieții cotidiene", description: "Tunici, mantii și podoabe: ce ne spun imaginile și obiectele despre port.", image: "/assets/dacia-clothing.png", icon: Shirt, sections: [
    { title: "Portul în reprezentările antice", text: "Pe Columna lui Traian, bărbații daci sunt reprezentați cu tunici, pantaloni și mantii. Unele personaje poartă o căciulă moale, asociată în interpretările istorice cu rangul. Aceste reliefuri sunt însă o narațiune romană a victoriei, nu fotografii neutre ale tuturor locuitorilor Daciei." },
    { title: "Materiale și meșteșug", text: "Lâna și fibrele vegetale sunt materiale potrivite economiei și mediului vremii. Herodot descrie țesături de cânepă la traci, foarte asemănătoare cu inul. Această mărturie privește lumea tracică mai largă și nu dovedește singură compoziția fiecărei haine dacice." },
    { title: "Fibule și podoabe", text: "Fibula este o agrafă metalică folosită pentru prinderea hainelor. Podoabele și accesoriile descoperite arheologic completează informațiile reliefurilor. Forma și materialul pot sugera statutul sau contactele culturale, dar nu permit reconstituirea sigură a unei uniforme ori a unor culori rezervate fiecărui rang." }
  ], note: "Ilustrația propune un port plauzibil. Culorile și detaliile nu sunt documentate pentru toate comunitățile dacice.", sources: ["column", "textiles"], related: ["obiceiuri", "gastronomie", "tactici-de-lupta"] },
  { slug: "religie", transition: "Credința dacilor în zei și religia lor monoteistă au generat obiceiuri sacrificiale unice.", title: "Zei și religie", eyebrow: "Numele sacrului și credința în nemurire", description: "Religia dacilor reprezintă o parte importantă a culturii și civilizației geto-dacice, reflectând credințele, valorile și modul lor de a înțelege lumea. Aceasta s-a dezvoltat înainte de cucerirea romană, fiind bazată pe credința în zei, în viața de după moarte și în puterea naturii. Religia avea un rol important în viața dacilor, influențând obiceiurile, ceremoniile și organizarea comunității.", image: sanctuary, icon: Sun, sections: [
  {
    "title": "Zalmoxis și credința în nemurire",
    "text": "Un loc deosebit în religia dacilor îl ocupă zeul Zalmoxis (Zamolxis), considerat una dintre cele mai importante divinități ale geto-dacilor. Potrivit unor autori antici, acesta era asociat cu nemurirea și cu viața de după moarte. Herodot, un istoric grec din Antichitate, a scris despre credințele geților și despre legătura lor cu Zalmoxis. Se spune că dacii credeau că sufletul nu dispare după moarte, ci continuă să existe. Această credință ar fi contribuit la curajul lor în fața primejdiilor."
  },
  {
    "title": "Gebeleizis și puterea naturii",
    "text": "O altă divinitate importantă era Gebeleizis, despre care Herodot menționează că era asociat cu fenomenele cerești, precum tunetul și fulgerul. Unele interpretări îl consideră un zeu al furtunii și al cerului. Totuși, informațiile despre zeii dacilor sunt limitate, iar cercetătorii nu sunt întotdeauna de acord asupra rolului și identității acestora. De asemenea, în unele interpretări moderne sunt menționate divinități asociate cu natura, fertilitatea și protecția, însă dovezile istorice nu sunt la fel de clare pentru toate aceste credințe."
  },
  {
    "title": "Preoții și Deceneu",
    "text": "Un rol important în religia dacilor îl aveau preoții, care se ocupau de ceremonii și de păstrarea tradițiilor religioase. Printre aceștia se remarcau preoții și înțelepții care, potrivit izvoarelor antice, aveau o influență importantă asupra comunității. Un personaj cunoscut a fost Deceneu, mare preot și sfetnic al regelui Burebista. Acesta a contribuit la organizarea vieții religioase și la întărirea autorității conducătorului dac."
  },
  {
    "title": "Sanctuare, ceremonii și ritualuri",
    "text": "Religia dacilor se manifesta și prin ceremonii, ritualuri și locuri de cult. Un important centru religios se afla la Sarmizegetusa Regia, unde au fost descoperite sanctuare circulare și patrulatere. Aceste construcții demonstrează importanța practicilor religioase în societatea dacică. Ceremoniile aveau probabil legătură cu zeii, cu natura și cu diferite momente importante ale anului. De asemenea, credința în viața de după moarte este sugerată de unele practici funerare și de obiectele descoperite în morminte."
  }
], note: "Precizare: caracterizarea religiei drept monoteistă nu este un fapt stabilit. Asocierea lui Gebeleizis cu furtuna este o interpretare; rolurile divinităților și relația dintre ele rămân discutate.", sources: ["herodotus", "unesco", "bendis"], related: ["arta", "legende", "obiceiuri"] },
  { slug: "obiceiuri", transition: "Multe obiceiuri războinice au definit acele tactici de luptă bazate pe atacuri surpriză.", title: "Obiceiuri", eyebrow: "Viața dintre ziduri", description: "Dacii au fost un popor antic care a trăit pe teritoriul actual al României și în regiunile învecinate. Ei făceau parte din grupul tracilor și aveau obiceiuri legate de religie, familie, înmormântare, muncă și război. Informațiile despre tradițiile lor provin din scrierile autorilor antici și din descoperirile arheologice.", image: life, icon: Users, sections: [
  {
    "title": "Sanctuarele și ritualurile religioase",
    "text": "Religia avea un rol important în viața dacilor. Sanctuarele descoperite la Sarmizegetusa Regia, capitala regatului dac, demonstrează importanța ritualurilor religioase. Preoții aveau un rol important în comunitate și participau la ceremoniile religioase."
  },
  {
    "title": "Obiceiurile legate de familie și căsătorie",
    "text": "Familia era importantă în societatea dacică, membrii acesteia colaborând la muncile gospodărești și la creșterea animalelor. Există puține informații sigure despre ceremoniile de căsătorie. Unele relatări antice descriu tradiții ale populațiilor tracice legate de familie și de ritualurile funerare."
  },
  {
    "title": "Tradițiile gospodărești",
    "text": "Dacii se ocupau cu agricultura, creșterea animalelor și meșteșugurile. Cultivau cereale, creșteau oi și vite, confecționau vase din lut și prelucrau fierul pentru a realiza unelte și arme. De asemenea, făceau schimb de produse cu alte populații, inclusiv cu grecii și romanii."
  },
  {
    "title": "Sacrificiul soțiilor la moartea bărbaților",
    "text": "Pomponius Mela, un autor antic, descrie un obicei al unor comunități tracice în care soția preferată a unui bărbat decedat era sacrificată și înmormântată alături de acesta. Potrivit relatării, femeile considerau această practică o onoare. Totuși, nu există dovezi că obiceiul era întâlnit la toți dacii."
  },
  {
    "title": "Obiceiurile de înmormântare",
    "text": "Dacii practicau frecvent incinerația, adică arderea trupurilor celor decedați. Cenușa și oasele arse erau uneori depuse în urne funerare, alături de vase ceramice sau podoabe. Aceste descoperiri arheologice ne ajută să înțelegem ritualurile funerare ale comunităților geto-dacice."
  },
  {
    "title": "Tatuajele și semnele de pe corp",
    "text": "Unele materiale despre populațiile tracice sugerează că tatuajele ar fi putut indica apartenența la un grup sau statutul social. Totuși, dovezile directe privind tatuajele dacilor sunt limitate, așa că nu putem afirma cu certitudine că acestea reprezentau un obicei general. Îmbrăcămintea dacilor este ilustrată pe Columna lui Traian, unde apar purtând tunici, pantaloni și mantii."
  },
  {
    "title": "Obiceiurile războinice ale dacilor",
    "text": "Dacii puneau accent pe apărarea teritoriului și construiau cetăți fortificate. Foloseau arme precum falxul, o armă cu lamă curbată, săbii și sulițe. Războaiele dintre daci și romani, desfășurate în anii 101–102 și 105–106 d.Hr., sunt reprezentate pe Columna lui Traian, la Roma."
  }
], note: "Relatările despre comunități tracice nu trebuie generalizate la toți dacii. Practicile funerare și războinice diferă în funcție de loc și epocă.", sources: ["britannica", "herodotus"], related: ["vestimentatie", "gastronomie", "religie"] },
  { slug: "tactici-de-lupta", transition: "Efortul depus în aceste tactici de luptă necesita o gastronomie dacică foarte consistentă.", title: "Tactici de luptă", eyebrow: "Terenul. Armele. Strategia.", description: "Înțelege apărarea cetăților și confruntările cu armatele Romei.", image: warriors, icon: Swords, sections: [
    { title: "Cetățile și controlul accesului", text: "Cetățile de înălțime valorifică relieful și formează nucleul defensiv al regatului. Zidurile, turnurile și poziționarea lor arată preocuparea pentru apărare. Controlul căilor de acces și dificultățile de aprovizionare sunt elemente utile unei interpretări strategice a acestui sistem.", tag: "Dovezi și interpretare" },
    { title: "Falx și lupta apropiată", text: "Falx este o armă cu lamă curbată, asociată războinicilor daci în studiul armamentului și în reprezentările antice. Armele curbate, sulițele și scuturile trebuie înțelese ca părți ale unui echipament variat. Forma unei arme nu dovedește singură o tactică universală sau că fiecare războinic o folosea." },
    { title: "Campaniile din vremea lui Domitian", text: "După incursiunile dacice în Moesia, Cornelius Fuscus conduce o expediție dezastruoasă, în care își pierde viața. În 88 d.Hr., romanii obțin victoria de la Tapae. Pacea ulterioară oferă dacilor sprijin financiar și tehnic: diplomația poate conta la fel de mult ca o bătălie." },
    { title: "Războaiele lui Traian", text: "Campaniile din 101–102 și 105–106 combină confruntări militare cu lucrări de infrastructură și asedii. În 106 regatul lui Decebal este înfrânt. Columna lui Traian oferă o narațiune vizuală amplă, dar construită din perspectiva victoriei romane." }
  ], note: "Explicațiile strategice sunt bazate pe izvoare și vestigii; nu sunt descrieri ale unor cadre video neverificate.", sources: ["unesco", "britannica", "column"], related: ["raspandire-geografica", "originea", "vestimentatie"] },
  { slug: "gastronomie", transition: "Secretele acestei gastronomii străvechi s-au păstrat prin cuvinte dacice din vocabular.", title: "Gastronomie", eyebrow: "Hrana unei lumi vechi", description: "Agricultură, animale și schimburi: o privire prudentă asupra mesei dacilor.", image: "/assets/dacia-food.png", icon: Wheat, sections: [
    { title: "De la câmp la masă", text: "Agricultura și creșterea animalelor sunt ocupații de bază ale comunităților dacice. Ele susțin alimentația cu produse vegetale și animale. Pentru a afla ce se consuma într-o anumită așezare, cercetătorii analizează resturi de plante, oase, vase și instalații de preparare." },
    { title: "Vinul și schimburile", text: "Britannica menționează comerțul cu grecii și importurile de vin. Prezența vaselor de transport și a mărfurilor străine ne ajută să înțelegem circulația alimentelor și contactele culturale. Nu arată însă că toate gospodăriile aveau aceeași dietă." },
    { title: "Fără rețete inventate", text: "Nu avem o carte de bucate dacică. Rețetele moderne de telemea, brânză de burduf, ciorbă sau țuică nu pot fi declarate moșteniri directe fără dovezi. Porumbul, cartoful și roșia provin din America și nu aparțin alimentației Daciei antice. O masă «dacică» de azi este o reconstituire, nu o rețetă autentificată." }
  ], note: "Putem reconstitui resurse și practici generale; rețetele exacte și continuitățile culinare sunt mult mai greu de demonstrat.", sources: ["britannica"], related: ["obiceiuri", "vocabular", "vestimentatie"] },
  { slug: "vocabular", transition: "Acest vocabular arhaic a transmis peste secole numeroase legende despre Decebal.", title: "Vocabular", eyebrow: "Urmele trecutului în cuvinte", description: "Substrat dacic, strat latin, superstrat slav: povestea limbii române.", image: "/assets/dacia-language.png", icon: BookOpen, sections: [
    { title: "O limbă de origine latină", text: "Conform paginilor 94–95 din manualul furnizat, româna se formează prin romanizarea lingvistică a populației locale. Latina populară, folosită de soldați, coloniști și administrație, constituie baza limbii noi. Identitatea romanică se observă în vocabularul fundamental și în structura gramaticală." },
    { title: "Substratul dacic", text: "Manualul enumeră cuvinte precum abur, baci, balaur, brânză, copac, mazăre, moș, strugure, vatră și viezure. Ele sunt atribuite substratului prin comparații lingvistice, inclusiv cu albaneza. În lipsa unui corpus amplu de texte dacice, etimologia fiecărui termen nu are aceeași certitudine. «Atribuit substratului» este mai prudent decât «dovedit dacic»." },
    { title: "Stratul latin și superstratul slav", text: "Cuvinte precum apă, mamă, munte și ochi ilustrează moștenirea latină. Manualul numește slavă influența de superstrat, instalată după secolul al VI-lea, cu exemple ca prieten, dragoste și a iubi. Împrumuturile ulterioare din maghiară, turcă, greacă și alte limbi sunt prezentate drept influențe de adstrat." },
    { title: "O limbă vie, mai multe varietăți", text: "Manualul prezintă patru dialecte istorice: dacoromân, aromân, meglenoromân și istroromân. Paginile 96–97 urmăresc afirmarea românei ca limbă de cultură, modernizarea vocabularului și comparațiile cu alte limbi romanice. Aceste informații privesc evoluția românei, nu un vocabular complet al dacilor." }
  ], note: "Conținutul acestei pagini sintetizează fotografiile manualului, paginile 94–97. Autorul și editura nu sunt vizibile în materialele furnizate.", sources: ["manual"], related: ["originea", "gastronomie", "legende"] },
  { slug: "legende", transition: "Motivele din legende au decorat pe ceramică și pe aur arta dacică.", title: "Legende", eyebrow: "Unde istoria întâlnește povestea", description: "Poveștile despre nemurire și comori, citite fără a le confunda cu dovezile.", image: "/assets/dacia-legends.png", icon: ScrollText, sections: [
    { title: "Zalmoxis și întoarcerea", text: "Herodot transmite o poveste auzită de la greci: Zalmoxis îi învață pe oameni că nu vor muri, apoi se retrage într-o încăpere subterană timp de trei ani. Reapare în al patrulea an, întărindu-le credința. Autorul nu acceptă fără rezerve relatarea și consideră că Zalmoxis ar fi trăit înaintea lui Pitagora.", tag: "Relatare legendară" },
    { title: "Comorile ascunse", text: "Cetățile și descoperirile de obiecte prețioase hrănesc imaginația despre comori. O legendă poate vorbi despre memoria unui loc fără să dovedească existența unui tezaur în locul indicat. Descoperirile reale trebuie documentate arheologic, nu căutate prin distrugerea siturilor.", tag: "Memorie și imaginație" },
    { title: "Cum citim o legendă?", text: "Întreabă cine a consemnat-o, când și cu ce scop. Separă existența textului de realitatea evenimentelor povestite. Povestea lui Zalmoxis este o mărturie despre felul în care grecii vorbeau despre geți, dar nu dovedește o întoarcere miraculoasă din moarte." }
  ], note: "Legendele sunt valoroase ca povești și mărturii culturale. Valoarea lor nu depinde de prezentarea lor drept fapte.", sources: ["herodotus", "unesco"], related: ["religie", "arta", "vocabular"] },
  { slug: "arta", title: "Artă", eyebrow: "Forme, materie și imaginație", description: "Arta dacilor reprezintă o parte importantă a culturii și civilizației geto-dacice, reflectând modul lor de viață, credințele religioase și măiestria meșteșugarilor. Aceasta s-a dezvoltat înainte de cucerirea romană, fiind influențată atât de tradițiile locale, cât și de contactele cu alte popoare.", image: "/assets/dacia-art.png", icon: Sparkles, sections: [
  {
    "title": "Aurul și argintul: măiestria podoabelor",
    "text": "Un loc deosebit în arta dacilor îl ocupă obiectele realizate din aur și argint. Meșteșugarii daci confecționau podoabe, brățări, coliere și alte obiecte decorative, folosind tehnici variate de prelucrare a metalelor prețioase. Unul dintre cele mai cunoscute exemple este reprezentat de brățările dacice din aur descoperite în zona Sarmizegetusei Regia. Acestea se remarcă prin forma lor spiralată și prin motivele decorative, demonstrând priceperea și talentul artizanilor. De asemenea, coiful de aur de la Coțofenești, decorat cu reprezentări de animale și personaje mitologice, este o piesă valoroasă a artei geto-dacice."
  },
  {
    "title": "Muzica și instrumentele",
    "text": "O altă componentă a culturii dacilor a fost muzica. Instrumentele muzicale erau folosite în diferite momente ale vieții, precum ceremoniile religioase, sărbătorile și manifestările comunității. Printre instrumentele cunoscute în lumea antică se numără fluierele și instrumentele de suflat, realizate din materiale precum lemnul sau osul, apoi carnyxul (trompetă războinică cu protomă animală), cornuri, fluiere dublu (aulos), percuție, tobe, eventual instrumente cu coarde. De asemenea, unele surse antice menționează rolul muzicii în practicile religioase ale geților și dacilor. Totuși, informațiile despre instrumentele lor muzicale sunt limitate, deoarece puține asemenea obiecte s-au păstrat până în prezent."
  },
  {
    "title": "Ceramică, sculptură și motive decorative",
    "text": "Arta dacilor se regăsea și în ceramică, prelucrarea fierului, sculptură și decorarea obiectelor de uz zilnic. Motivele geometrice și reprezentările de animale aveau un rol decorativ și, uneori, puteau avea semnificații simbolice sau religioase."
  }
], note: "Instrumentele enumerate sunt cunoscute în lumea antică, dar lista nu reprezintă un inventar dacic atestat în întregime. Coiful de la Coțofenești aparține unui context getic mai timpuriu. Semnificația simbolurilor trebuie interpretată în context; imaginea tematică este generată cu AI.", sources: ["britannica", "unesco", "column"], related: ["vestimentatie", "obiceiuri", "religie"] }
];
