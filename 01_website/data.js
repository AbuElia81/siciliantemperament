/* ============ PRODUKTE — Listino Biologico 2023 (23 Positionen) ============
   Gemeinsame Datenbasis fuer index.html (Kalkulator/Urkunde) und
   sortiment.html (Produktgrid). Aenderungen hier wirken auf beide Seiten. */
const P=[
 {n:"Kirschtomatensauce",it:"Salsa pronta di pomodoro ciliegino",pr:2.16,g:"330 g",pl:"☉",s:[0,7,0,1],w:"Solarfrucht vom Ätna-Hang — heiß & trocken, cholerisch-vital."},
 {n:"Kirschtomatensauce mit Paprika",it:"Salsa ciliegino con peperoni",pr:2.43,g:"330 g",pl:"☿",s:[2,5,0,1],w:"Mercurische Synthese zweier Früchte — cholerisch mit sanguinischer Note."},
 {n:"Datterino-Tomatensauce",it:"Salsa pronta di pomodoro datterino",pr:2.43,g:"330 g",pl:"☉",s:[1,6,0,1],w:"Die süße Datteltomate — Solarfrucht mit sanguinischer Milde.",lmiv:{bez:"Datteltomatensauce (gebrauchsfertig)",zut:"Datterino Tomaten* (96%), Natives Olivenöl extra* (1,7%), Meersalz, Basilikum* (0,5%).",alg:[]}},
 {n:"Sugo alla Siciliana",it:"Sugo pronto alla Siciliana",pr:2.43,g:"250 g",pl:"☉",s:[1,6,0,1],w:"Kapern, Sellerie, Zitrone — das cholerische Fundament Siziliens.",lmiv:{bez:"Tomatensauce nach sizilianischer Art",zut:"Kirschtomaten* (95%), Natives Olivenöl extra* (1,5%), Zwiebeln*, Kapern*, Meersalz, Sellerie* (0,7%), Karotten*, Basilikum*, Petersilie*, Knoblauch*, Zitronenschale*, schwarzer Pfeffer*, scharfer Pfeffer*.",alg:["Sellerie"]}},
 {n:"Sugo all'Arrabbiata",it:"Sugo pronto all'Arrabbiata",pr:2.43,g:"250 g",pl:"♂",s:[0,7,1,0],w:"Die Wütende — marsisch-cholerisch, heiß im dritten Grad.",lmiv:{bez:"Scharfe Tomatensauce mit Chili",zut:"Kirschtomaten* (94%), Natives Olivenöl extra*, Zwiebeln*, Meersalz, Basilikum* (0,3%), scharfer Pfeffer* (0,1%), Petersilie*, Zitronenschale*, Knoblauch*.",alg:[],spur:"Kann Spuren von Sellerie und Nüssen enthalten."}},
 {n:"Sugo alla Puttanesca",it:"Sugo pronto alla Puttanesca",pr:2.43,g:"250 g",pl:"♂",s:[1,6,0,1],w:"Oliven, Kapern, Fenchelsamen — provokant-cholerisch, salzige Tiefe.",lmiv:{bez:"Würzige Tomatensauce",zut:"Kirschtomaten* (92%), Natives Olivenöl extra* (2,5%), Kapern Bourbons*, Zwiebeln*, Meersalz, schwarze Oliven*, grüne Oliven*, Basilikum*, Petersilie*, schwarzer Pfeffer*, Knoblauch*, Zitronenschale*, wilder Fenchelsamen*, Paprika*.",alg:[],spur:"Kann Spuren von Sellerie und Nüssen enthalten."}},
 {n:"Sugo alla Palermitana",it:"Sugo pronto alla Palermitana",pr:2.43,g:"250 g",pl:"☿",s:[3,3,1,1],w:"Sultaninen & Fenchel — arabisch-normannische Mischung, mercurisch.",lmiv:{bez:"Tomatensauce nach Palermo-Art",zut:"Kirschtomaten* (94%), Natives Olivenöl extra*, Zwiebeln*, Meersalz, Kapern*, Basilikum*, Sultaninen*, wilder Fenchelsamen*, Petersilie*, Knoblauch*, Zitronenschale*, schwarzer Pfeffer*.",alg:[],spur:"Kann Spuren von Sellerie und Nüssen enthalten."}},
 {n:"Sugo alla Norma",it:"Sugo pronto alla Norma",pr:2.43,g:"250 g",pl:"☽",s:[0,1,2,5],w:"Bellinis Mondpriesterin — Aubergine kalt & feucht, lunisch-phlegmatisch.",lmiv:{bez:"Tomatensauce mit Auberginen",zut:"Kirschtomaten* (82,6%), Auberginen* (11,5%), Basilikum*, Natives Olivenöl extra*, Apfelessig*, Meersalz, Knoblauch*.",alg:[],spur:"Kann Spuren von Sellerie und Nüssen enthalten."}},
 {n:"Sugo alla Mediterranea",it:"Sugo pronto alla Mediterranea",pr:2.43,g:"250 g",pl:"♀",s:[4,3,1,0],w:"Rosmarin, Oregano, Kapern — die harmonische Venussauce der Waage."},
 {n:"Passata di Pomodoro",it:"Passata di pomodoro (99%)",pr:2.57,g:"420 g",pl:"☉",s:[0,8,0,0],w:"Reine Sonnenessenz — 99% Tomate, cholerisch im höchsten Grad."},
 {n:"Wildfenchel-Pesto",it:"Pesto finocchietto selvatico",pr:4.46,g:"190 g",pl:"♀",s:[7,1,0,0],w:"Wilder Fenchel (48%) — luftig-sanguinisch, Frühlingskraft der Venus."},
 {n:"Pesto Trapanese",it:"Pesto trapanese",pr:4.46,g:"190 g",pl:"♀",s:[5,2,1,0],w:"Vom Heiligtum der Venus Erycina — Tomate, Mandel, Basilikum.",lmiv:{bez:"Sizilianisches Tomaten-Mandel-Pesto",zut:"Tomaten* (82%), Natives Olivenöl extra* (10%), Basilikum*, Mandeln* (2,4%), Weinessig*, Meersalz, Knoblauch*.",alg:["Mandeln"],spur:"Kann Spuren von Sellerie und Nüssen enthalten."}},
 {n:"Sizilianisches Basilikum-Pesto",it:"Pesto di basilico alla siciliana",pr:4.46,g:"190 g",pl:"♀",s:[7,1,0,0],w:"Basilikum (53%) mit Mandeln — sanguinischste Venuspflanze, erheiternd.",lmiv:{bez:"Klassisches Basilikum-Pesto",zut:"Basilikum* (53%), Natives Olivenöl extra* (32%), Mandeln* (5%), konzentrierter Apfelsaft*, Apfelessig*, getrocknete Tomaten*, Meersalz, Knoblauch*, schwarzer Pfeffer*.",alg:["Mandeln"],spur:"Kann Spuren von Sellerie und Nüssen enthalten."}},
 {n:"Auberginen-Paté",it:"Patè di melanzane",pr:4.46,g:"190 g",pl:"☽",s:[0,0,2,6],w:"Die Mondpflanze der arabischen Ärzte — kühlend, phlegmatisch."},
 {n:"Chili-Paté",it:"Patè di peperoncino (83%)",pr:4.46,g:"190 g",pl:"♂",s:[0,8,0,0],w:"Peperoncino heiß im vierten Grad — rein marsisch-cholerisch.",lmiv:{bez:"Chili-Aufstrich",zut:"Scharfer Chili* (83%), Natives Olivenöl extra* (13%), Weißweinessig*, Meersalz, Kartoffelstärke*.",alg:[],spur:"Kann Spuren von Sellerie und Nüssen enthalten."}},
 {n:"Caponata Siciliana",it:"Caponata siciliana",pr:4.46,g:"190 g",pl:"☿",s:[2,2,2,2],w:"Agrodolce — alle vier Qualitäten in einem Glas. Die Quintessenz."},
 {n:"Blutorangen-Marmelade",it:"Marmellata di arance rosse",pr:4.32,g:"360 g",pl:"☉",s:[1,5,2,0],w:"Die Moro — Purpursonne des Winters, cholerisch mit melancholischem Zug.",lmiv:{bez:"Orangenmarmelade",zut:"Brauner Zucker*, Blutorangen mit Zesten*, Geliermittel: Fruchtpektin, Säuerungsmittel: Zitronensäure.",alg:[]}},
 {n:"Zitronen-Marmelade",it:"Marmellata di limoni",pr:4.32,g:"360 g",pl:"♀",s:[1,0,5,2],w:"Venus als Abendstern — säuerlich-herb, melancholisch konserviert."},
 {n:"Mandarinen-Marmelade",it:"Marmellata di mandarini",pr:4.32,g:"360 g",pl:"♀",s:[1,0,5,2],w:"Herbstfrucht des Abendsterns — süß-bitter, melancholisch-mild."},
 {n:"Weiße-Feigen-Konfitüre extra",it:"Confettura extra di fichi bianchi",pr:5.27,g:"360 g",pl:"♀",s:[6,0,1,1],w:"90g Frucht je 100g — die Feige, seit Homer der Venus heilig, warm & saftig."},
 {n:"Pistaziencreme",it:"Crema dolce di pistacchio (45%)",pr:8.78,g:"190 g",pl:"♃",s:[6,1,0,1],w:"Jovialisch nach Ficino — warm, nährend, dem Geist zuträglich.",lmiv:{bez:"Pistaziencreme (süß)",zut:"Pistazien* (45%), brauner Zucker*, Olivenöl*, Sonnenblumenöl*.",alg:["Pistazien"],spur:"Kann Spuren von anderen Nüssen enthalten."}},
 {n:"Mandelcreme",it:"Crema dolce di mandorle (38%)",pr:6.48,g:"190 g",pl:"♃",s:[6,1,1,0],w:"Ibn Sīnā verschrieb Mandeln gegen Übermaß schwarzer Galle."},
 {n:"Haselnusscreme",it:"Crema dolce di nocciole (38%)",pr:6.08,g:"190 g",pl:"♃",s:[5,0,0,3],w:"Dem Jupiter geweiht — festlich, erheiternd, sanguinisch-weich.",lmiv:{bez:"Haselnusscreme (süß)",zut:"Haselnüsse* (38%), brauner Zucker*, Olivenöl*, Sonnenblumenöl*.",alg:["Haselnüsse"],spur:"Kann Spuren von anderen Nüssen enthalten."}},
 /* Die beiden Olivenoele von Calvi. ACHTUNG: pr ist vorlaeufig aus dem
    Endkundenpreis des Herstellers zurueckgerechnet (18,00 € bzw. 16,00 €
    geteilt durch 1,6) — sobald der eigene Einkaufspreis feststeht, hier
    ersetzen. Auf der Seite wird kein Einzelpreis angezeigt. */
 {n:"Olivenöl Extra Vergine Bio Rêuza",leit:true,it:"Olio extra vergine di oliva bio Rêuza",pr:11.25,g:"750 ml",pl:"♃",s:[6,1,0,1],w:"Reife Biancolilla und Taggiasca, kalt gepresst — nach Galen warm und feucht, das jovialische Grundöl der Küche.",lmiv:{bez:"Natives Olivenöl extra",zut:"Natives Olivenöl extra* aus biologischem Anbau.",alg:[]}},
 {n:"Olivenöl Extra Vergine Bio Frutto Verde",leit:true,it:"Olio extra vergine di oliva bio Frutto Verde",pr:10.00,g:"750 ml",pl:"♄",s:[1,1,6,0],w:"Aus grün geernteter Frucht — das omphacium der Alten: kalt, trocken und herb, dem Saturn zugeordnet.",lmiv:{bez:"Natives Olivenöl extra",zut:"Natives Olivenöl extra* aus biologischem Anbau.",alg:[]}},
];
const HUM={sang:{name:"Sanguinisch",col:"var(--sang)",hex:"#5a82bf",q:"heiß & feucht"},
 chol:{name:"Cholerisch",col:"var(--chol)",hex:"#bf5a2a",q:"heiß & trocken"},
 mel:{name:"Melancholisch",col:"var(--mel)",hex:"#6a8060",q:"kalt & trocken"},
 phleg:{name:"Phlegmatisch",col:"var(--phleg)",hex:"#4a8aaa",q:"kalt & feucht"}};
const HK=["sang","chol","mel","phleg"];
/* Planetennamen zu den Zeichen aus dem Feld pl — dieselbe Zuordnung wie in
   der Tabelle "Die Planeten und ihre Temperamente" auf lehre.html. */
const PLANET={"\u2609":"Sol","\u263D":"Luna","\u263E":"Luna","\u263F":"Mercurius","\u2640":"Venus","\u2642":"Mars","\u2643":"Iuppiter","\u2644":"Saturnus"};
const eur=x=>x.toFixed(2).replace('.',',')+' €';

/* Die drei Korbgroessen — Bruttogrenzen fuer Endkunden. Werden vom
   Temperament-Kalkulator (fertige Koerbe) und vom Sortiment (eigener
   Korb) gleichermassen benutzt, damit beide Wege denselben Rahmen haben. */
/* kurz = Kuerzel auf den Korbkarten, anz = feste Stueckzahl, preis = Verkaufspreis brutto, max = Grenze fuer
   den Warenwert der Zusammenstellung. Der Preis steht fest; die Grenze ist
   gleich dem Preis, damit ein Korb nie mehr kostet, als seine Produkte
   einzeln wert sind. Die Stueckzahlen sind
   so gewaehlt, dass alle vier Elementkoerbe die jeweilige Grenze einhalten
   und gut ausschoepfen — bei zehn Stueck passte der Luftkorb nicht mehr
   unter 50 Euro. */
const GROESSEN=[
 {id:'klein', kurz:'S', name:'Small',  anz: 9, preis: 49, max: 49 },
 {id:'medium',kurz:'M', name:'Medium', anz:11, preis: 59, max: 59 },
 /* oel: der grosse Korb bekommt das Oel seines Elements fest zugeteilt.
    Eine 750-ml-Flasche kostet so viel wie drei kleine Glaeser; nur hier ist
    dafuer Platz, ohne dass der Korb seinen Charakter verliert. Dafuer sind
    es 17 statt 19 Produkte — mit 19 passte das Oel nicht mehr unter 109 €. */
 {id:'large', kurz:'L', name:'Large',  anz:17, preis:109, max:109, oel:true}];
/* Endkundenpreis = Listino + 60 % */
const vkPreis=p=>p.pr*1.6;
