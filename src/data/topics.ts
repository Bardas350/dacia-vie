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
export type Topic = { slug: string; title: string; eyebrow: string; description: string; image: string; icon: typeof Sprout; sections: { title: string; text: string; tag?: string; image?: string; caption?: string; images?: { src: string; alt: string }[]; items?: string[] }[]; transition?: string; note: string; sources: SourceKey[]; related: string[] };
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
  { slug: "vestimentatie", transition: "Anumite piese de vestimentație marcau rangul social în timpul ritualurilor dedicate zeilor și religiei.", title: "Vestimentație", eyebrow: "Firele vieții cotidiene", description: "Informațiile despre vestimentația dacilor provin în principal din reprezentările de pe Columna lui Traian, din alte monumente romane și din descoperirile arheologice. Aceste surse ne oferă indicii despre hainele lor, dar nu permit reconstituirea exactă a garderobei fiecărui grup social.", image: "/assets/dacia-clothing.png", icon: Shirt, sections: [
  {
    "title": "Cum se îmbrăcau dacii?",
    "text": "Sursele antice și descoperirile arheologice ne oferă indicii despre portul dacilor. Reprezentările de pe monumentele romane trebuie citite în contextul lor artistic și istoric."
  },
  {
    "title": "Îmbrăcămintea bărbaților",
    "text": "În reprezentările antice, bărbații daci apar frecvent purtând:",
    "items": [
      "Tunică — haină cu mâneci, strânsă de obicei cu o curea în jurul taliei.",
      "Pantaloni lungi — potriviți pentru deplasare și pentru clima regiunii.",
      "Mantie — piesă de îmbrăcăminte purtată peste tunică.",
      "Încălțăminte închisă — reprezentată în numeroase scene de pe Columnă.",
      "Bonetă — purtată de anumite personaje, inclusiv de reprezentări ale aristocraților."
    ]
  },
  {
    "title": "Vestimentația femeilor",
    "text": "Pe Columna lui Traian apar și femei dace. Acestea sunt reprezentate cu haine lungi, cu mâneci, strânse în talie, uneori însoțite de o piesă de material purtată peste tunică. Unele imagini sugerează folosirea unor accesorii și a unor moduri diferite de aranjare a părului.\n\nTrebuie precizat că monumentul roman nu oferă o imagine completă a tuturor hainelor și podoabelor purtate de femeile dace."
  },
  {
    "title": "Hainele și statutul social",
    "text": "În izvoarele despre societatea dacică apar termenii tarabostes și comati. Aristocrații sunt asociați în mod tradițional cu boneta numită pileus, de unde provine și denumirea latină pileati. Totuși, reprezentările de pe Columnă arată că acest tip de bonetă nu trebuie interpretat automat ca un indicator perfect al rangului fiecărui personaj."
  },
  {
    "title": "Materiale și culori",
    "text": "Este plauzibil că lâna și inul erau importante pentru confecționarea hainelor, în contextul creșterii animalelor și al practicilor de țesut cunoscute în lumea antică. Totuși, culorile exacte și combinațiile vestimentare ale dacilor nu pot fi stabilite pentru toate categoriile sociale doar din sculpturile romane, care nu păstrează culorile originale."
  },
  {
    "title": "Podoabe și accesorii",
    "text": "Descoperirile arheologice includ brățări, inele, cercei, mărgele, fibule și alte obiecte decorative. Acestea pot oferi informații despre gusturile estetice, tehnicile meșteșugărești și diferențele de statut social. Fibulele sunt agrafe metalice folosite pentru prinderea hainelor."
  }
], note: "Reprezentările romane nu documentează exhaustiv portul tuturor grupurilor sociale; materialele, culorile și semnele de rang trebuie interpretate cu prudență.", sources: ["column", "textiles"], related: ["obiceiuri", "gastronomie", "tactici-de-lupta"] },
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
  { slug: "obiceiuri", transition: "Obicele dacice au fost transmise de geração în generație prin vorbe și cărți manuscrise.", title: "Obiceiuri", eyebrow: "Tradiții și costumi", description: "Obiceiurile dacice reflectă viața socială, religioasă și militară a comunităților geto-dacice. Aceste practici au fost documentate de autori antici și de descoperiri arheologice.", image: sanctuary, icon: Sprout, sections: [
    {
      "title": "Sanctuarele și ritualurile religioase",
    "text": "Sanctuarele dacice reprezintă dovezi importante ale vieții spirituale. Cele mai cunoscute se află în zona Sarmizegetusei Regia, unde au fost descoperite construcții cu caracter religios.\n\nAceste locuri erau folosite pentru activități de cult și arată că religia nu se limita la credințele individuale, ci avea și o dimensiune comunitară. Oamenii participau la ritualuri, iar preoții aveau un rol important în practicile religioase.\n\nSanctuarele de la Sarmizegetusa Regia demonstrează că dacii amenajau spații speciale pentru activitățile religioase. Ele reprezintă dovezi arheologice importante pentru înțelegerea spiritualității geto-dacilor."
    },
    {
      "title": "Obiceiurile legate de familie și căsătorie",
      "text": "Familia avea un rol important în societatea dacică. Membrii comunității colaborau pentru a obține hrana, a crește animalele și a realiza obiectele necesare gospodăriei.\n\nDespre ceremoniile de căsătorie ale dacilor există puține informații sigure. Autorii antici au descris unele obiceiuri ale populațiilor tracice, dar acestea nu pot fi atribuite automat tuturor dacilor.\n\nRelatările despre sacrificiul soțiilor după moartea bărbaților sugerează că, în anumite comunități, relațiile de familie puteau fi legate de credințele religioase și de ritualurile funerare. Totuși, nu trebuie să considerăm această practică reprezentativă pentru toate familiile dacice.\n\nRelatarea lui Pomponius Mela despre sacrificiul soțiilor este un exemplu al felului în care unele populații tracice își exprimau credințele prin ritualuri legate de moarte și familie."
    },
    {
      "title": "Tradițiile gospodărești",
      "text": "Viața de zi cu zi a dacilor era strâns legată de agricultură și de creșterea animalelor. Oamenii cultivau cereale, creșteau oi și vite și foloseau resursele naturale pentru a-și asigura hrana.\n\nPe lângă agricultură, dacii practicau diferite meșteșuguri. Ei confecționau vase ceramice, prelucrau fierul și realizau unelte necesare muncii și gospodăriei. Aceste activități erau esențiale pentru supraviețuirea comunităților:\n\n• Cultivarea cerealelor pentru prepararea hranei.\n• Creșterea animalelor pentru carne, lapte și lână.\n• Confecționarea vaselor din lut pentru păstrarea alimentelor.\n• Prelucrarea fierului pentru realizarea uneltelor agricole.\n• Schimbul de produse cu alte populații, inclusiv cu grecii și romanii.\n\nAceste activități arată că dacii aveau o economie diversificată și cunoșteau numeroase tehnici de producție."
    },
    {
      "title": "Sacrificiul soțiilor la moartea bărbaților",
      "text": "Unul dintre cele mai neobișnuite obiceiuri descrise de autorii antici este legat de moartea bărbaților și de rolul soțiilor în ritualurile funerare.\n\nScriitorul antic Pomponius Mela relatează că, în anumite comunități tracice, moartea unui bărbat putea fi urmată de sacrificarea soției considerate preferate. Potrivit descrierii sale, femeile se întreceau pentru a obține această onoare, iar cea aleasă era sacrificată și înmormântată alături de soț.\n\nAcest ritual era legat de credințele despre moarte și despre relația dintre persoana decedată și cei rămași în viață. Totuși, relatarea trebuie interpretată cu prudență, deoarece se referă la anumite populații tracice și nu demonstrează că practica era întâlnită la toți dacii.\n\nPotrivit lui Pomponius Mela, dacă un bărbat murea, soțiile sale puteau participa la o competiție pentru a fi aleasă cea care urma să fie sacrificată. Femeia aleasă era considerată cea mai onorată. Această descriere arată cât de diferite puteau fi unele credințe funerare ale populațiilor antice față de cele din prezent."
    },
    {
      "title": "Obiceiurile de înmormântare",
      "text": "Dacii aveau ritualuri funerare care reflectau credințele lor despre moarte. Una dintre practicile întâlnite frecvent era incinerația, adică arderea trupului persoanei decedate.\n\nDupă incinerare, cenușa și resturile osoase puteau fi adunate și depuse în urne funerare. În unele morminte au fost descoperite vase ceramice, podoabe și obiecte personale. Acestea îi ajută pe istorici să înțeleagă ritualurile și obiceiurile comunităților antice.\n\nPracticile funerare nu erau identice în toate regiunile și perioadele. Descoperirile arheologice arată că existau diferențe între comunități, iar unele ritualuri nu sunt cunoscute în detaliu.\n\nArheologii au descoperit morminte de incinerație în care cenușa și oasele arse erau depuse în urne. Aceste descoperiri demonstrează că arderea trupurilor era o practică importantă în lumea geto-dacică."
    },
    {
      "title": "Tatuajele și semnele de pe corp",
      "text": "Tatuajele sunt un alt subiect întâlnit în unele prezentări despre populațiile tracice. În anumite surse moderne se sugerează că tatuajele ar fi putut indica apartenența la un grup, statutul social sau alte caracteristici ale persoanei.\n\nCu toate acestea, dovezile directe privind practicarea tatuajelor de către daci sunt limitate. Nu putem afirma cu certitudine că toți dacii se tatuau sau că tatuajele aveau aceeași semnificație în toate comunitățile.\n\nAspectul fizic al dacilor este cunoscut mai ales prin reprezentările artistice antice, în special prin scenele de pe Columna lui Traian. Acestea îi înfățișează purtând tunici, pantaloni și mantii, dar nu oferă dovezi clare care să stabilească existența unei tradiții generale a tatuajelor.\n\nÎn unele materiale moderne despre traci se menționează posibilitatea folosirii tatuajelor ca semne de apartenență socială. Totuși, această informație trebuie prezentată ca o ipoteză, nu ca un fapt sigur despre toți dacii."
    },
    {
      "title": "Obiceiurile războinice ale dacilor",
      "text": "Dacii sunt cunoscuți și pentru tradițiile lor militare. Apărarea teritoriului era importantă, iar cetățile fortificate aveau un rol esențial în organizarea militară.\n\nUna dintre cele mai cunoscute arme dacice era falxul, o armă cu lamă curbată. Războinicii foloseau și alte arme, precum săbiile, sulițele și arcurile.\n\nÎn timpul domniei lui Decebal, dacii s-au confruntat cu Imperiul Roman în două războaie importante, desfășurate în anii 101–102 și 105–106 d.Hr. Fortificațiile din Munții Orăștiei demonstrează preocuparea dacilor pentru apărarea teritoriului.\n\nPe Columna lui Traian din Roma sunt reprezentate scene din războaiele daco-romane, inclusiv confruntări militare și războinici daci. Monumentul oferă informații despre armament și despre modul în care romanii reprezentau luptele, deși prezintă perspectiva romană asupra evenimentelor."
    }
  ], note: "Relatările despre comunități tracice nu trebuie generalizate la toți dacii. Practicile funerare și războinice diferă în funcție de loc și epocă.", sources: ["britannica", "herodotus"], related: ["vestimentatie", "gastronomie", "religie"] },
  { slug: "tactici-de-lupta", transition: "Efortul depus în aceste tactici de luptă necesita o gastronomie dacică foarte consistentă.", title: "Tactici de luptă", eyebrow: "Terenul. Armele. Strategia.", description: "Strategiile și tacticile de luptă ale dacilor s-au adaptat continuu de-a lungul secolelor în funcție de teren, resurse și adversari (de la popoarele nomade vecine până la invaziile macedonene și cele ale Legiunilor Romane). Dacii erau cunoscuți ca războinici feroce și iscusiți, arta lor militară combinând defensiva pasivă (cetățile fortificate) cu tactica pământului pârjolit și atacul prin surprindere.", image: warriors, icon: Swords, sections: [
  {
    "title": "Apărarea prin uzură și „Pământul pârjolit”",
    "text": "În fața unor armate superioare ca număr sau organizare (cum erau cele romane ori macedonene), dacii evitau adesea confruntările deschise în câmp direct.\n\nDistrugerea resurselor: În calea inamicului, dacii incendiau satele, otrăveau fântânile și luau sau distrugeau proviziile pentru a înfometa armata invadatoare.\n\nTactica de hărțuire (Gherilă): Dacii își atrăgeau adversarii în regiuni montane sau împădurite greu accesibile, unde organizau ambuscade, atacând rapid liniile de aprovizionare sau ariergarda inamicului și retrăgându-se imediat."
  },
  {
    "title": "Sistemul de fortificații și apărarea pasivă",
    "text": "Centrul de greutate al defensivei dacice a fost constituit din fortificații concepute strategic:\n\nSistemul din Munții Orăștiei: Cetățile (precum Sarmizegetusa Regia, Costești, Blidaru, Piatra Roșie) formau un inel defensiv etajat. Dacă o cetate cădea, celelalte puteau continua rezistența sau puteau tăia calea inamicului.\n\nMurus Dacicus: Tehnica lor de construcție combina zidăria din piatră fasonată cu bârne groase de lemn și umplutură de pământ și piatră spartă, fiind extrem de rezistentă la berbecii de asediu și la atacurile catapultelor romane."
  },
  {
    "title": "Strategia militară și diversionistă",
    "text": "Dacii, sub conducerea unor regi vizionari precum Burebista sau Decebal, au folosit tehnici politice și militare avansate:\n\nRăzboiul pe două fronturi: Un exemplu clasic a avut loc în iarna anilor 101–102 d.Hr., când Decebal a lansat o ofensivă masivă în Moesia (la sud de Dunăre) alături de aliații săi roxolani și bastarni, obligându-l pe împăratul Traian să oprească avansul spre Sarmizegetusa pentru a interveni la sud.\n\nAlianțele strategice: Dacii făceau uz de diplomație militară, aliindu-se cu populații vecine, precum sarmații, bastarnii și marcomanii, pentru a crea coaliții anti-romane."
  },
  {
    "title": "Tacticile de luptă directă și armamentul",
    "text": "În confruntările directe, dacii mizau pe șocul inițial, curaj extrem și utilizarea unor arme devastatoare:\n\nFalxul dacic: O sabie încovoiată cu tăișul pe interior, mânuită cu două mâini, capabilă să afecteze scuturile și coifurile romane. Impactul acestei arme este asociat în interpretările moderne cu întărirea echipamentului roman, inclusiv prin benzi de metal pe coifuri.\n\nSica: Un pumnal sau o sabie scurtă curbată, folosită în lupta corp la corp.\n\nCavaleria ușoară și arcașii: Foloseau atacuri rapide, lansând săgeți din mișcare și retrăgându-se înainte ca inamicul să poată riposta direct.",
    "image": "/assets/lupta-falx.png",
    "caption": "Falx cu lamă curbată și mâner din lemn."
  },
  {
    "title": "Draco – Steagul de luptă",
    "text": "Capul de lup din bronz sau argint cu corp de șarpe din textil emitea un șuierat puternic când sufla vântul sau când călăreții alergau, având rolul de a crea teroare psihologică în rândul dușmanilor și de a ridica moralul propriilor trupe."
  },
  {
    "title": "Credința în nemurire și atitudinea în luptă",
    "text": "Atitudinea dacilor în luptă era strâns legată și de credința lor în nemurire (Zalmoxism), considerând că moartea pe câmpul de luptă era doar o trecere spre o lume superioară, ceea ce le confera o neînfricare legendară menționată de istoricii antici."
  }
], note: "Precizare istorică: otrăvirea fântânilor, pământul pârjolit, comportamentul uniform al cavaleriei și efectul sonor al draco nu sunt demonstrate aici ca practici generale ale dacilor. Rezistența zidurilor și efectele falxului nu trebuie absolutizate. Sarmații, inclusiv roxolanii, erau populații de limbă iraniană, nu germanice; componența alianțelor diferă după campanie. Legătura dintre credință și conduita militară este o interpretare, nu o explicație universală.", sources: ["unesco", "britannica", "column"], related: ["raspandire-geografica", "originea", "vestimentatie"] },
  { slug: "gastronomie", transition: "Secretele acestei gastronomii străvechi s-au păstrat prin cuvinte dacice din vocabular.", title: "Gastronomie", eyebrow: "Hrana unei lumi vechi", description: "Agricultură, animale și schimburi: o privire prudentă asupra mesei dacilor.", image: "/assets/dacia-food.png", icon: Wheat, sections: [
    { title: "De la câmp la masă", text: "Agricultura și creșterea animalelor sunt ocupații de bază ale comunităților dacice. Ele susțin alimentația cu produse vegetale și animale. Pentru a afla ce se consuma într-o anumită așezare, cercetătorii analizează resturi de plante, oase, vase și instalații de preparare." },
    { title: "Vinul și schimburile", text: "Britannica menționează comerțul cu grecii și importurile de vin. Prezența vaselor de transport și a mărfurilor străine ne ajută să înțelegem circulația alimentelor și contactele culturale. Nu arată însă că toate gospodăriile aveau aceeași dietă." },
    { title: "Fără rețete inventate", text: "Nu avem o carte de bucate dacică. Rețetele moderne de telemea, brânză de burduf, ciorbă sau țuică nu pot fi declarate moșteniri directe fără dovezi. Porumbul, cartoful și roșia provin din America și nu aparțin alimentației Daciei antice. O masă «dacică» de azi este o reconstituire, nu o rețetă autentificată." }
  ], note: "Putem reconstitui resurse și practici generale; rețetele exacte și continuitățile culinare sunt mult mai greu de demonstrat.", sources: ["britannica"], related: ["obiceiuri", "vocabular", "vestimentatie"] },
  { slug: "vocabular", transition: "Acest vocabular arhaic a transmis peste secole numeroase legende despre Decebal.", title: "Vocabular", eyebrow: "Urmele trecutului în cuvinte", description: "Substrat dacic, strat latin, superstrat slav: povestea limbii române.", image: "/assets/dacia-language.png", icon: BookOpen, sections: [
      { title: "Limba dacilor și cunoștințele noastre despre vocabularul lor", text: "Dacii vorbeau o limbă veche, înrudită cu limba tracă, însă vocabularul acesteia nu este cunoscut în întregime. Spre deosebire de latină, pentru care există numeroase texte scrise, limba dacă este documentată prin foarte puține mărturii. Informațiile păstrate provin mai ales din nume de persoane, nume de locuri și câteva cuvinte consemnate de autorii antici. Din acest motiv, cercetătorii nu pot reconstitui un dicționar complet al limbii dacilor. Ei analizează cuvintele păstrate, le compară cu forme din alte limbi vechi și încearcă să stabilească originea lor." },
      { title: "Ce înseamnă substratul lingvistic?", text: "În lingvistică, substratul lingvistic reprezintă urmele unei limbi mai vechi care se pot păstra după ce o populație adoptă o altă limbă. În cazul limbii române, lingviștii discută despre un posibil substrat preroman, asociat în mod tradițional cu limbile dacică și tracă. Unele cuvinte românești au fost considerate posibile moșteniri din acest substrat, însă originea lor nu este întotdeauna sigură. De exemplu, cuvinte precum brânză, strugure și vatră sunt întâlnite în discuțiile despre vocabularul vechi al limbii române. Totuși, nu putem afirma cu certitudine că toate aceste cuvinte provin din limba dacă." },
      { title: "Cuvinte moștenite din limba latină", text: "Limba latină reprezintă baza principală a vocabularului fundamental românesc. Multe cuvinte pe care le folosim zilnic provin din latină și au suferit transformări de-a lungul secolelor.\n\nTabel cu exemple:\n\n| Cuvânt românesc | Cuvânt latin | Sens |\n|---|---|---|\n| apă | aqua | lichid necesar vieții |\n| pâine | panis | aliment de bază |\n| soare | sol, solem | astrul care luminează Pământul |\n| ochi | oculus | organul vederii |\n| mână | manuscript | parte a corpului |\n\nAcest tabel arată cum limbile se schimbă în timp, păstrând unele forme și adaptând altele." },
      { title: "Cum studiază lingviștii originea cuvintelor?", text: "Lingviștii studiază originea cuvintelor prin compararea formelor din limbi diferite, analiza schimbărilor de sunete și consultarea documentelor istorice. Un cuvânt nu poate fi considerat dacic doar pentru că este vechi sau nu seamănă cu un cuvânt latin." },
      { title: "Romanizarea și limba română", text: "După cucerirea unei părți a Daciei de către romani, în anul 106 d.Hr., latina s-a răspândit treptat în acest teritoriu. Din latina populară s-a dezvoltat limba română, iar unele cuvinte din limbile vorbite înainte de romanizare ar fi putut fi păstrate în vocabularul ei." }
    ], note: "Precizare: atribuirea unor cuvinte la substratul dacic este uneori ipoteză, nu certitudine. Limba latină este baza principală a românei, nu singurul ingredient.", sources: ["manual"], related: ["originea", "gastronomie", "legende"] },
  { slug: "legende", transition: "Motivele din legende au decorat pe ceramică și pe aur arta dacică.", title: "Legende", eyebrow: "Unde istoria întâlnește povestea", description: "Poveștile despre nemurire și comori, citite fără a le confunda cu dovezile.", image: "/assets/dacia-legends.png", icon: ScrollText, sections: [
    { title: "Zalmoxis și întoarcerea", text: "Herodot transmite o poveste auzită de la greci: Zalmoxis îi învață pe oameni că nu vor muri, apoi se retrage într-o încăpere subterană timp de trei ani. Reapare în al patrulea an, întărindu-le credința. Autorul nu acceptă fără rezerve relatarea și consideră că Zalmoxis ar fi trăit înaintea lui Pitagora.", tag: "Relatare legendară" },
    { title: "Comorile ascunse", text: "Cetățile și descoperirile de obiecte prețioase hrănesc imaginația despre comori. O legendă poate vorbi despre memoria unui loc fără să dovedească existența unui tezaur în locul indicat. Descoperirile reale trebuie documentate arheologic, nu căutate prin distrugerea siturilor.", tag: "Memorie și imaginație" },
    { title: "Cum citim o legendă?", text: "Întreabă cine a consemnat-o, când și cu ce scop. Separă existența textului de realitatea evenimentelor povestite. Povestea lui Zalmoxis este o mărturie despre felul în care grecii vorbeau despre geți, dar nu dovedește o întoarcere miraculoasă din moarte." }
  ], note: "Legendele sunt valoroase ca povești și mărturii culturale. Valoarea lor nu depinde de prezentarea lor drept fapte.", sources: ["herodotus", "unesco"], related: ["religie", "arta", "vocabular"] },
  { slug: "arta", title: "Artă", eyebrow: "Forme, materie și imaginație", description: "Arta dacilor reprezintă o parte importantă a culturii și civilizației geto-dacice, reflectând modul lor de viață, credințele religioase și măiestria meșteșugarilor. Aceasta s-a dezvoltat înainte de cucerirea romană, fiind influențată atât de tradițiile locale, cât și de contactele cu alte popoare.", image: "/assets/dacia-art.png", icon: Sparkles, sections: [
  {
    "text": "Un loc deosebit în arta dacilor îl ocupă obiectele realizate din aur și argint. Meșteșugarii daci confecționau podoabe, brățări, coliere și alte obiecte decorative, folosind tehnici variate de prelucrare a metalelor prețioase. Unul dintre cele mai cunoscute exemple este reprezentat de brățările dacice din aur descoperite în zona Sarmizegetusei Regia. Acestea se remarcă prin forma lor spiralată și prin motivele decorative, demonstrând priceperea și talentul artizanilor. De asemenea, coiful de aur de la Coțofenești, decorat cu reprezentări de animale și personaje mitologice, este o piesă valoroasă a artei geto-dacice.",
    "title": "Aurul și argintul: măiestria podoabelor",
    "images": [
      {
        "src": "/assets/arta-bratara.jpeg",
        "alt": "Brățară spiralată din aur cu motive decorative."
      },
      {
        "src": "/assets/arta-coif.jpeg",
        "alt": "Coiful de aur de la Coțofenești, vedere frontală."
      }
    ]
  },
  {
    "text": "O altă componentă a culturii dacilor a fost muzica. Instrumentele muzicale erau folosite în diferite momente ale vieții, precum ceremoniile religioase, sărbătorile și manifestările comunității. Printre instrumentele cunoscute în lumea antică se numără fluierele și instrumentele de suflat, realizate din materiale precum lemnul sau osul, apoi carnyxul (trompetă războinică cu protomă animală), cornuri, fluiere dublu (aulos), percuție, tobe, eventual instrumente cu coarde. De asemenea, unele surse antice menționează rolul muzicii în practicile religioase ale geților și dacilor. Totuși, informațiile despre instrumentele lor muzicale sunt limitate, deoarece puține asemenea obiecte s-au păstrat până în prezent.",
    "title": "Muzica și instrumentele",
    "image": "/assets/arta-carnyx.jpeg",
    "caption": "Instrument de suflat cu protomă animală, tip carnyx."
  },
  {
    "text": "Arta dacilor se regăsea și în ceramică, prelucrarea fierului, sculptură și decorarea obiectelor de uz zilnic. Motivele geometrice și reprezentările de animale aveau un rol decorativ și, uneori, puteau avea semnificații simbolice sau religioase.",
    "title": "Ceramică, sculptură și motive decorative"
  }
], note: "Instrumentele enumerate sunt cunoscute în lumea antică, dar lista nu reprezintă un inventar dacic atestat în întregime. Coiful de la Coțofenești aparține unui context getic mai timpuriu. Semnificația simbolurilor trebuie interpretată în context; imaginea tematică este generată cu AI.", sources: ["britannica", "unesco", "column"], related: ["vestimentatie", "obiceiuri", "religie"] }
];
