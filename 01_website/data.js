/* ============ PRODUKTE — Listino Biologico 2023 (23 Positionen) ============
   Gemeinsame Datenbasis fuer index.html (Kalkulator/Urkunde) und
   sortiment.html (Produktgrid). Aenderungen hier wirken auf beide Seiten. */
const P=[
 {n:"Datterino-Tomatensauce",img:"images/produkte/03.jpg",vk:4.50,it:"Salsa pronta di pomodoro datterino",pr:2.43,g:"330 g",pl:"☉",s:[1,6,0,1],w:"Die süße Datteltomate — Solarfrucht mit sanguinischer Milde.",lmiv:{bez:"Datteltomatensauce (gebrauchsfertig)",zut:"Datterino Tomaten* (96%), Natives Olivenöl extra* (1,7%), Meersalz, Basilikum* (0,5%).",alg:[]}},
 {n:"Sugo alla Siciliana",img:"images/produkte/04.jpg",vk:4.50,it:"Sugo pronto alla Siciliana",pr:2.43,g:"250 g",pl:"☉",s:[1,6,0,1],w:"Kapern, Sellerie, Zitrone — das cholerische Fundament Siziliens.",lmiv:{bez:"Tomatensauce nach sizilianischer Art",zut:"Kirschtomaten* (95%), Natives Olivenöl extra* (1,5%), Zwiebeln*, Kapern*, Meersalz, Sellerie* (0,7%), Karotten*, Basilikum*, Petersilie*, Knoblauch*, Zitronenschale*, schwarzer Pfeffer*, scharfer Pfeffer*.",alg:["Sellerie"]}},
 {n:"Sugo all'Arrabbiata",img:"images/produkte/05.jpg",vk:4.50,it:"Sugo pronto all'Arrabbiata",pr:2.43,g:"250 g",pl:"♂",s:[0,7,1,0],w:"Die Wütende — marsisch-cholerisch, heiß im dritten Grad.",lmiv:{bez:"Scharfe Tomatensauce mit Chili",zut:"Kirschtomaten* (94%), Natives Olivenöl extra*, Zwiebeln*, Meersalz, Basilikum* (0,3%), scharfer Pfeffer* (0,1%), Petersilie*, Zitronenschale*, Knoblauch*.",alg:[],spur:"Kann Spuren von Sellerie und Nüssen enthalten."}},
 {n:"Sugo alla Puttanesca",img:"images/produkte/06.jpg",vk:4.50,it:"Sugo pronto alla Puttanesca",pr:2.43,g:"250 g",pl:"♂",s:[1,6,0,1],w:"Oliven, Kapern, Fenchelsamen — provokant-cholerisch, salzige Tiefe.",lmiv:{bez:"Würzige Tomatensauce",zut:"Kirschtomaten* (92%), Natives Olivenöl extra* (2,5%), Kapern Bourbons*, Zwiebeln*, Meersalz, schwarze Oliven*, grüne Oliven*, Basilikum*, Petersilie*, schwarzer Pfeffer*, Knoblauch*, Zitronenschale*, wilder Fenchelsamen*, Paprika*.",alg:[],spur:"Kann Spuren von Sellerie und Nüssen enthalten."}},
 {n:"Sugo alla Palermitana",img:"images/produkte/07.jpg",vk:4.50,it:"Sugo pronto alla Palermitana",pr:2.43,g:"250 g",pl:"☿",s:[3,3,1,1],w:"Sultaninen & Fenchel — arabisch-normannische Mischung, mercurisch.",lmiv:{bez:"Tomatensauce nach Palermo-Art",zut:"Kirschtomaten* (94%), Natives Olivenöl extra*, Zwiebeln*, Meersalz, Kapern*, Basilikum*, Sultaninen*, wilder Fenchelsamen*, Petersilie*, Knoblauch*, Zitronenschale*, schwarzer Pfeffer*.",alg:[],spur:"Kann Spuren von Sellerie und Nüssen enthalten."}},
 {n:"Sugo alla Norma",img:"images/produkte/08.jpg",vk:4.50,it:"Sugo pronto alla Norma",pr:2.43,g:"250 g",pl:"☽",s:[0,1,2,5],w:"Bellinis Mondpriesterin — Aubergine kalt & feucht, lunisch-phlegmatisch.",lmiv:{bez:"Tomatensauce mit Auberginen",zut:"Kirschtomaten* (82,6%), Auberginen* (11,5%), Basilikum*, Natives Olivenöl extra*, Apfelessig*, Meersalz, Knoblauch*.",alg:[],spur:"Kann Spuren von Sellerie und Nüssen enthalten."}},
 {n:"Pesto Trapanese",img:"images/produkte/12.jpg",vk:6.60,it:"Pesto trapanese",pr:4.46,g:"190 g",pl:"♀",s:[5,2,1,0],w:"Vom Heiligtum der Venus Erycina — Tomate, Mandel, Basilikum.",lmiv:{bez:"Sizilianisches Tomaten-Mandel-Pesto",zut:"Tomaten* (82%), Natives Olivenöl extra* (10%), Basilikum*, Mandeln* (2,4%), Weinessig*, Meersalz, Knoblauch*.",alg:["Mandeln"],spur:"Kann Spuren von Sellerie und Nüssen enthalten."}},
 {n:"Sizilianisches Basilikum-Pesto",img:"images/produkte/13.jpg",vk:6.60,it:"Pesto di basilico alla siciliana",pr:4.46,g:"190 g",pl:"♀",s:[7,1,0,0],w:"Basilikum (53%) mit Mandeln — sanguinischste Venuspflanze, erheiternd.",lmiv:{bez:"Klassisches Basilikum-Pesto",zut:"Basilikum* (53%), Natives Olivenöl extra* (32%), Mandeln* (5%), konzentrierter Apfelsaft*, Apfelessig*, getrocknete Tomaten*, Meersalz, Knoblauch*, schwarzer Pfeffer*.",alg:["Mandeln"],spur:"Kann Spuren von Sellerie und Nüssen enthalten."}},
 {n:"Chili-Paté",img:"images/produkte/15.jpg",vk:6.60,it:"Patè di peperoncino (83%)",pr:4.46,g:"190 g",pl:"♂",s:[0,8,0,0],w:"Peperoncino heiß im vierten Grad — rein marsisch-cholerisch.",lmiv:{bez:"Chili-Aufstrich",zut:"Scharfer Chili* (83%), Natives Olivenöl extra* (13%), Weißweinessig*, Meersalz, Kartoffelstärke*.",alg:[],spur:"Kann Spuren von Sellerie und Nüssen enthalten."}},
 {n:"Blutorangen-Marmelade",img:"images/produkte/17.jpg",vk:6.60,it:"Marmellata di arance rosse",pr:4.32,g:"360 g",pl:"☉",s:[1,5,2,0],w:"Die Moro — Purpursonne des Winters, cholerisch mit melancholischem Zug.",lmiv:{bez:"Orangenmarmelade",zut:"Brauner Zucker*, Blutorangen mit Zesten*, Geliermittel: Fruchtpektin, Säuerungsmittel: Zitronensäure.",alg:[]}},
 {n:"Pistaziencreme",img:"images/produkte/21.jpg",vk:11.90,it:"Crema dolce di pistacchio (45%)",pr:8.78,g:"190 g",pl:"♃",s:[6,1,0,1],w:"Jovialisch nach Ficino — warm, nährend, dem Geist zuträglich.",lmiv:{bez:"Pistaziencreme (süß)",zut:"Pistazien* (45%), brauner Zucker*, Olivenöl*, Sonnenblumenöl*.",alg:["Pistazien"],spur:"Kann Spuren von anderen Nüssen enthalten."}},
 {n:"Haselnusscreme",img:"images/produkte/23.jpg",vk:8.30,it:"Crema dolce di nocciole (38%)",pr:6.08,g:"190 g",pl:"♃",s:[5,0,0,3],w:"Dem Jupiter geweiht — festlich, erheiternd, sanguinisch-weich.",lmiv:{bez:"Haselnusscreme (süß)",zut:"Haselnüsse* (38%), brauner Zucker*, Olivenöl*, Sonnenblumenöl*.",alg:["Haselnüsse"],spur:"Kann Spuren von anderen Nüssen enthalten."}},
 /* Die beiden Olivenoele von Calvi. ACHTUNG: pr ist vorlaeufig aus dem
    Endkundenpreis des Herstellers zurueckgerechnet (18,00 € bzw. 16,00 €
    geteilt durch 1,6) — sobald der eigene Einkaufspreis feststeht, hier
    ersetzen. Auf der Seite wird kein Einzelpreis angezeigt. */
 {n:"Olivenöl Extra Vergine Bio Rêuza",img:"images/produkte/24.jpg",vk:17.30,leit:true,it:"Olio extra vergine di oliva bio Rêuza",pr:11.25,g:"750 ml",pl:"♃",s:[6,1,0,1],w:"Reife Biancolilla und Taggiasca, kalt gepresst — nach Galen warm und feucht, das jovialische Grundöl der Küche.",lmiv:{bez:"Natives Olivenöl extra",zut:"Natives Olivenöl extra* aus biologischem Anbau.",alg:[]}},
 {n:"Olivenöl Extra Vergine Bio Frutto Verde",img:"images/produkte/25.jpg",vk:15.70,leit:true,it:"Olio extra vergine di oliva bio Frutto Verde",pr:10.00,g:"750 ml",pl:"♄",s:[1,1,6,0],w:"Aus grün geernteter Frucht — das omphacium der Alten: kalt, trocken und herb, dem Saturn zugeordnet.",lmiv:{bez:"Natives Olivenöl extra",zut:"Natives Olivenöl extra* aus biologischem Anbau.",alg:[]}},
 /* 500-ml-Varianten derselben Oele. Gleiche Flasche, gleiches Oel, nur
    kleinere Fuellmenge — darum dasselbe Foto. leit bleibt bei 750 ml, damit
    der grosse Korb die grosse Flasche bekommt. */
 {n:"Olivenöl Extra Vergine Bio Rêuza 500 ml",img:"images/produkte/24.jpg",vk:14.25,it:"Olio extra vergine di oliva bio Rêuza",pr:8.91,g:"500 ml",pl:"♃",s:[6,1,0,1],w:"Dieselbe reife Pressung in der kleineren Flasche — warm und feucht, jovialisch.",lmiv:{bez:"Natives Olivenöl extra",zut:"Natives Olivenöl extra* aus biologischem Anbau.",alg:[]}},
 {n:"Olivenöl Extra Vergine Bio Frutto Verde 500 ml",img:"images/produkte/25.jpg",vk:12.80,it:"Olio extra vergine di oliva bio Frutto Verde",pr:8.00,g:"500 ml",pl:"♄",s:[1,1,6,0],w:"Dasselbe grün geerntete Öl in der kleineren Flasche — kalt, trocken, saturnisch.",lmiv:{bez:"Natives Olivenöl extra",zut:"Natives Olivenöl extra* aus biologischem Anbau.",alg:[]}},
 /* Weine: Platzhalter. Ohne Preis nehmen sie nicht an der Korbberechnung
    teil und sind nicht bestellbar; die Pflichtangaben stehen aber schon. */
 {n:"Rotwein Nero d'Avola",platzhalter:true,vk:0,it:"Nero d'Avola biologico",pr:0,g:"0,75 l",pl:"♂",s:[3,6,1,0],w:"Die dunkle Rebe Siziliens — nach alter Lehre heiß und trocken, marsisch.",lmiv:{bez:"Rotwein",zut:"Rotwein* (enthält Sulfite).",alg:["Sulfite"]}},
 {n:"Weißwein Grillo",platzhalter:true,vk:0,it:"Grillo biologico",pr:0,g:"0,75 l",pl:"☿",s:[6,2,0,1],w:"Leicht und luftig — die helle Rebe, heiß und feucht, merkurisch.",lmiv:{bez:"Weißwein",zut:"Weißwein* (enthält Sulfite).",alg:["Sulfite"]}},
 {n:"Roséwein",platzhalter:true,vk:0,it:"Rosato biologico",pr:0,g:"0,75 l",pl:"♀",s:[5,4,0,1],w:"Zwischen beiden stehend — sanguinisch mit cholerischem Zug, der Venus zugeordnet.",lmiv:{bez:"Roséwein",zut:"Roséwein* (enthält Sulfite).",alg:["Sulfite"]}},
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
 {id:'medium',kurz:'M', name:'Medium', anz:10, preis: 69, max: 69 },
 /* oel: der grosse Korb bekommt das Oel seines Elements fest zugeteilt.
    Eine 750-ml-Flasche kostet so viel wie drei kleine Glaeser; nur hier ist
    dafuer Platz, ohne dass der Korb seinen Charakter verliert. Dafuer sind
    es 14 statt 15 Produkte — mit 15 passte das Oel nicht mehr unter 109 €. */
 {id:'large', kurz:'L', name:'Large',  anz:14, preis:109, max:109, oel:true}];
/* Verkaufspreis: vk ist der vom Haendler gesetzte Bruttopreis. pr bleibt als
   Listino-Wert zur Orientierung stehen, wird aber nicht mehr gerechnet. */
const vkPreis=p=>p.vk;

/* ---- Preisanzeige -------------------------------------------------------
   Solange der Shop nicht steht, werden KEINE Preise angezeigt: die
   Preisangabenverordnung verlangt dann auch Grundpreis je Kilogramm bzw.
   Liter, einen Hinweis zur Umsatzsteuer und die Versandkosten. Fehlen die,
   ist die Preisauszeichnung abmahnfaehig.

   Die Preise bleiben in den Daten, weil die Koerbe damit zusammengestellt
   werden — sie werden nur nicht ausgegeben. Zum Wiedereinschalten hier auf
   true setzen; alle Stellen richten sich danach.                          */
const PREISE_ZEIGEN=false;
/* Preis als Text, oder leer solange die Anzeige aus ist */
const preisText=betrag=>PREISE_ZEIGEN?eur(betrag):'';
