/* ============ PRODUKTE — Listino Biologico 2023 (23 Positionen) ============
   Gemeinsame Datenbasis fuer index.html (Kalkulator/Urkunde) und
   sortiment.html (Produktgrid). Aenderungen hier wirken auf beide Seiten. */
const P=[
 {n:"Kirschtomatensauce",it:"Salsa pronta di pomodoro ciliegino",pr:2.16,g:"330 g",pl:"☉",s:[0,7,0,1],w:"Solarfrucht vom Ätna-Hang — heiß & trocken, cholerisch-vital."},
 {n:"Kirschtomatensauce mit Paprika",it:"Salsa ciliegino con peperoni",pr:2.43,g:"330 g",pl:"☿",s:[2,5,0,1],w:"Mercurische Synthese zweier Früchte — cholerisch mit sanguinischer Note."},
 {n:"Datterino-Tomatensauce",it:"Salsa pronta di pomodoro datterino",pr:2.43,g:"330 g",pl:"☉",s:[1,6,0,1],w:"Die süße Datteltomate — Solarfrucht mit sanguinischer Milde."},
 {n:"Sugo alla Siciliana",it:"Sugo pronto alla Siciliana",pr:2.43,g:"250 g",pl:"☉",s:[1,6,0,1],w:"Kapern, Sellerie, Zitrone — das cholerische Fundament Siziliens."},
 {n:"Sugo all'Arrabbiata",it:"Sugo pronto all'Arrabbiata",pr:2.43,g:"250 g",pl:"♂",s:[0,7,1,0],w:"Die Wütende — marsisch-cholerisch, heiß im dritten Grad."},
 {n:"Sugo alla Puttanesca",it:"Sugo pronto alla Puttanesca",pr:2.43,g:"250 g",pl:"♂",s:[1,6,0,1],w:"Oliven, Kapern, Fenchelsamen — provokant-cholerisch, salzige Tiefe."},
 {n:"Sugo alla Palermitana",it:"Sugo pronto alla Palermitana",pr:2.43,g:"250 g",pl:"☿",s:[3,3,1,1],w:"Sultaninen & Fenchel — arabisch-normannische Mischung, mercurisch."},
 {n:"Sugo alla Norma",it:"Sugo pronto alla Norma",pr:2.43,g:"250 g",pl:"☽",s:[0,1,2,5],w:"Bellinis Mondpriesterin — Aubergine kalt & feucht, lunisch-phlegmatisch."},
 {n:"Sugo alla Mediterranea",it:"Sugo pronto alla Mediterranea",pr:2.43,g:"250 g",pl:"♀",s:[4,3,1,0],w:"Rosmarin, Oregano, Kapern — die harmonische Venussauce der Waage."},
 {n:"Passata di Pomodoro",it:"Passata di pomodoro (99%)",pr:2.57,g:"420 g",pl:"☉",s:[0,8,0,0],w:"Reine Sonnenessenz — 99% Tomate, cholerisch im höchsten Grad."},
 {n:"Wildfenchel-Pesto",it:"Pesto finocchietto selvatico",pr:4.46,g:"190 g",pl:"♀",s:[7,1,0,0],w:"Wilder Fenchel (48%) — luftig-sanguinisch, Frühlingskraft der Venus."},
 {n:"Pesto Trapanese",it:"Pesto trapanese",pr:4.46,g:"190 g",pl:"♀",s:[5,2,1,0],w:"Vom Heiligtum der Venus Erycina — Tomate, Mandel, Basilikum."},
 {n:"Sizilianisches Basilikum-Pesto",it:"Pesto di basilico alla siciliana",pr:4.46,g:"190 g",pl:"♀",s:[7,1,0,0],w:"Basilikum (53%) mit Mandeln — sanguinischste Venuspflanze, erheiternd."},
 {n:"Auberginen-Paté",it:"Patè di melanzane",pr:4.46,g:"190 g",pl:"☽",s:[0,0,2,6],w:"Die Mondpflanze der arabischen Ärzte — kühlend, phlegmatisch."},
 {n:"Chili-Paté",it:"Patè di peperoncino (83%)",pr:4.46,g:"190 g",pl:"♂",s:[0,8,0,0],w:"Peperoncino heiß im vierten Grad — rein marsisch-cholerisch."},
 {n:"Caponata Siciliana",it:"Caponata siciliana",pr:4.46,g:"190 g",pl:"☿",s:[2,2,2,2],w:"Agrodolce — alle vier Qualitäten in einem Glas. Die Quintessenz."},
 {n:"Blutorangen-Marmelade",it:"Marmellata di arance rosse",pr:4.32,g:"360 g",pl:"☉",s:[1,5,2,0],w:"Die Moro — Purpursonne des Winters, cholerisch mit melancholischem Zug."},
 {n:"Zitronen-Marmelade",it:"Marmellata di limoni",pr:4.32,g:"360 g",pl:"♀",s:[1,0,5,2],w:"Venus als Abendstern — säuerlich-herb, melancholisch konserviert."},
 {n:"Mandarinen-Marmelade",it:"Marmellata di mandarini",pr:4.32,g:"360 g",pl:"♀",s:[1,0,5,2],w:"Herbstfrucht des Abendsterns — süß-bitter, melancholisch-mild."},
 {n:"Weiße-Feigen-Konfitüre extra",it:"Confettura extra di fichi bianchi",pr:5.27,g:"360 g",pl:"♀",s:[6,0,1,1],w:"90g Frucht je 100g — die Feige, seit Homer der Venus heilig, warm & saftig."},
 {n:"Pistaziencreme",it:"Crema dolce di pistacchio (45%)",pr:8.78,g:"190 g",pl:"♃",s:[6,1,0,1],w:"Jovialisch nach Ficino — warm, nährend, dem Geist zuträglich."},
 {n:"Mandelcreme",it:"Crema dolce di mandorle (38%)",pr:6.48,g:"190 g",pl:"♃",s:[6,1,1,0],w:"Ibn Sīnā verschrieb Mandeln gegen Übermaß schwarzer Galle."},
 {n:"Haselnusscreme",it:"Crema dolce di nocciole (38%)",pr:6.08,g:"190 g",pl:"♃",s:[5,0,0,3],w:"Dem Jupiter geweiht — festlich, erheiternd, sanguinisch-weich."},
];
const HUM={sang:{name:"Sanguinisch",col:"var(--sang)",hex:"#5a82bf",q:"heiß & feucht"},
 chol:{name:"Cholerisch",col:"var(--chol)",hex:"#bf5a2a",q:"heiß & trocken"},
 mel:{name:"Melancholisch",col:"var(--mel)",hex:"#6a8060",q:"kalt & trocken"},
 phleg:{name:"Phlegmatisch",col:"var(--phleg)",hex:"#4a8aaa",q:"kalt & feucht"}};
const HK=["sang","chol","mel","phleg"];
const eur=x=>x.toFixed(2).replace('.',',')+' €';
