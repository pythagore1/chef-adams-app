// ====== LANG ======
var lang = "fr";
var TX = {
  fr:{
    navTagline:"Yaounde, Cameroun",navMenu:"Menu",navOrder:"Commander",navContact:"Contact",
    heroTitle:"Bienvenue chez<br/><em>Chef Adams</em>",
    heroSub:"Grillades, sauces savoureuses et cuisine authentique.<br/>Ouvert tous les jours de 8h à 23h · Commandez par WhatsApp.",
    heroCta1:"Voir le menu",heroCta2:"Commander via WhatsApp",
    stat1:"Plats",stat2:"Fait maison",stat4:"Livraison Yaounde",
    menuLabel:"Notre menu",menuTitle:"Nos plats du jour",
    menuSub:"Des saveurs authentiques preparees avec des ingredients frais. Commandez facilement via WhatsApp.",
    howLabel:"Processus",howTitle:"Comment commander ?",howSub:"Simple, rapide et pratique via WhatsApp.",
    payLabel:"Paiement",payTitle:"Paiements Mobile Money",
    paySub:"Paiements via MTN Mobile Money ou Orange Money. Apres confirmation sur WhatsApp, effectuez le virement et envoyez la capture.",
    contactWaTxt:"Nous contacter sur WhatsApp",
    footTag:"Restaurant de grillades et cuisine africaine authentique. Ouvert 7j/7 de 8h à 23h.",
    footLinksHdr:"Liens",fMenu:"Menu",fOrder:"Commander",fContact:"Contact",
    footPay:"Paiement via MTN Mobile Money et Orange Money",
    inStock:"Disponible",outStock:"Indisponible",
    orderBtn:"Commander via WhatsApp",orangeBtn:"Payer Orange Money",
    step1t:"Choisissez votre plat",step1d:"Parcourez notre menu et selectionnez le plat qui vous fait envie.",
    step2t:"Cliquez Commander",step2d:"Le bouton WhatsApp vous redirige avec votre commande deja redigee.",
    step3t:"Confirmez la commande",step3d:"Nous validons et vous communiquons l heure de livraison ou de retrait.",
    step4t:"Payez par Mobile Money",step4d:"Transfert MTN MoMo ou Orange Money. Envoyez la capture en confirmation.",
    chooseVar:"Choisir l option :",qtyLbl:"Quantite souhaitee",stockLbl:"Dispo :",totLbl:"Total :",
    allerg:"Infos / Allergenes :",
    waMsg:"Bonjour Chef Adams \ud83c\udf7d\ufe0f\n\nJe souhaite commander :\n\n\ud83c\udf7d\ufe0f *{name}*{variant}\n\ud83d\udce6 Quantite : {qty} {unit}(s)\n\ud83d\udcb0 Prix unitaire : {price} FCFA\n\ud83d\udcb5 Total : {total} FCFA\n\nPouvez-vous confirmer la disponibilite et les details de livraison ? Merci !",
    omMsg:"Bonjour Chef Adams \ud83c\udf7d\ufe0f\n\nJe souhaite payer via Orange Money pour :\n\n\ud83c\udf7d\ufe0f *{name}*{variant}\n\ud83d\udce6 Quantite : {qty} {unit}(s)\n\ud83d\udcb5 Total : {total} FCFA\n\nVeuillez confirmer le numero Orange Money. Merci !",
  },
  en:{
    navTagline:"Yaounde, Cameroon",navMenu:"Menu",navOrder:"Order",navContact:"Contact",
    heroTitle:"Welcome to<br/><em>Chef Adams</em>",
    heroSub:"Grills, flavorful sauces and authentic cuisine.<br/>Open daily 8am–11pm · Order via WhatsApp.",
    heroCta1:"View menu",heroCta2:"Order via WhatsApp",
    stat1:"Dishes",stat2:"Homemade",stat4:"Yaounde Delivery",
    menuLabel:"Our menu",menuTitle:"Today's dishes",
    menuSub:"Authentic flavors prepared with fresh ingredients. Order easily via WhatsApp.",
    howLabel:"Process",howTitle:"How to order?",howSub:"Simple, fast and convenient via WhatsApp.",
    payLabel:"Payment",payTitle:"Mobile Money Payments",
    paySub:"Payments via MTN Mobile Money or Orange Money. After WhatsApp confirmation, make the transfer and send the screenshot.",
    contactWaTxt:"Contact us on WhatsApp",
    footTag:"African grill restaurant, open daily 8am–11pm. Yaoundé, Cameroun.",
    footLinksHdr:"Links",fMenu:"Menu",fOrder:"Order",fContact:"Contact",
    footPay:"Payment via MTN Mobile Money and Orange Money",
    inStock:"Available",outStock:"Unavailable",
    orderBtn:"Order via WhatsApp",orangeBtn:"Pay Orange Money",
    step1t:"Choose your dish",step1d:"Browse our menu and select the dish you want.",
    step2t:"Click Order",step2d:"The WhatsApp button redirects you with your order already drafted.",
    step3t:"Confirm the order",step3d:"We validate and let you know the delivery or pickup time.",
    step4t:"Pay by Mobile Money",step4d:"Transfer via MTN MoMo or Orange Money. Send screenshot as confirmation.",
    chooseVar:"Choose option:",qtyLbl:"Desired quantity",stockLbl:"Avail.:",totLbl:"Total:",
    allerg:"Info / Allergens:",
    waMsg:"Hello Chef Adams \ud83c\udf7d\ufe0f\n\nI would like to order:\n\n\ud83c\udf7d\ufe0f *{name}*{variant}\n\ud83d\udce6 Quantity: {qty} {unit}(s)\n\ud83d\udcb0 Unit price: {price} FCFA\n\ud83d\udcb5 Total: {total} FCFA\n\nCan you confirm availability and delivery details? Thank you!",
    omMsg:"Hello Chef Adams \ud83c\udf7d\ufe0f\n\nI would like to pay via Orange Money for:\n\n\ud83c\udf7d\ufe0f *{name}*{variant}\n\ud83d\udce6 Quantity: {qty} {unit}(s)\n\ud83d\udcb5 Total: {total} FCFA\n\nPlease confirm the Orange Money number. Thank you!",
  }
};
function tx(k){return (TX[lang]||TX.fr)[k]||k;}
function applyLang(){
  var ids=["navTagline","navMenu","navOrder","navContact","heroTitle","heroSub","heroCta1",
    "stat1","stat2","stat4","menuLabel","menuTitle","menuSub","howLabel","howTitle","howSub",
    "payLabel","payTitle","paySub","contactWaTxt","footTag","footLinksHdr","fMenu",
    "fOrder","fContact","footPay"];
  for(var i=0;i<ids.length;i++){var el=document.getElementById(ids[i]);if(el)el.innerHTML=tx(ids[i]);}
  document.getElementById("heroCta2").textContent=tx("heroCta2");
  document.getElementById("btnLang").textContent=lang==="fr"?"EN":"FR";
  document.getElementById("mmLang").textContent=lang==="fr"?"English":"Francais";
  renderSteps();renderProducts();renderPayCards();updateWaLinks();
}
function toggleLang(){lang=lang==="fr"?"en":"fr";applyLang();
// Masquer le splash screen une fois tout charge
(function(){
  var sp=document.getElementById("splashScreen");
  if(!sp)return;
  sp.style.opacity="0";
  setTimeout(function(){sp.style.display="none";},450);
})();}

// ====== DATA ======
var DEF_PRODUCTS=[
    {
      "id": "e1",
      "name": "Salade César",
      "category": "Entrées",
      "description": "Laitue romaine, croûtons dorés, parmesan, sauce César maison.",
      "allergens": "",
      "stock": 0,
      "unit": "portion",
      "photos": [],
      "variants": [
        {
          "id": "e1v0",
          "name": "Portion",
          "basePrice": 1500,
          "photos": [
            "./menu/salc.avif"
          ]
        }
      ],
      "qtyPricing": []
    },
    {
      "id": "e2",
      "name": "Salade Capricieuse",
      "category": "Entrées",
      "description": "Salade garnie aux légumes frais et assaisonnements variés.",
      "allergens": "",
      "stock": 0,
      "unit": "portion",
      "photos": [],
      "variants": [
        {
          "id": "e2v0",
          "name": "Portion",
          "basePrice": 1000,
          "photos": [
            "./menu/salcap.avif"
          ]
        }
      ],
      "qtyPricing": []
    },
    {
      "id": "e3",
      "name": "Salade d'Avocat",
      "category": "Entrées",
      "description": "Avocat frais avec légumes croquants et vinaigrette légère.",
      "allergens": "",
      "stock": 0,
      "unit": "portion",
      "photos": [],
      "variants": [
        {
          "id": "e3v0",
          "name": "Portion",
          "basePrice": 1000,
          "photos": [
            "./menu/sala.avif"
          ]
        }
      ],
      "qtyPricing": []
    },
    {
      "id": "a1",
      "name": "Riz Pilaf",
      "category": "Accompagnements",
      "description": "Riz parfumé cuit avec des épices et aromates.",
      "allergens": "",
      "stock": 0,
      "unit": "portion",
      "photos": [],
      "variants": [
        {
          "id": "a1v0",
          "name": "Portion",
          "basePrice": 500,
          "photos": [
            "./menu/rp.avif"
          ]
        }
      ],
      "qtyPricing": []
    },
    {
      "id": "a2",
      "name": "Frites de Pommes",
      "category": "Accompagnements",
      "description": "Frites de pommes de terre croustillantes, fraîchement préparées.",
      "allergens": "",
      "stock": 0,
      "unit": "portion",
      "photos": [],
      "variants": [
        {
          "id": "a2v0",
          "name": "Portion",
          "basePrice": 500,
          "photos": [
            "./menu/fpom.avif"
          ]
        }
      ],
      "qtyPricing": []
    },
    {
      "id": "a3",
      "name": "Frites de Plantain",
      "category": "Accompagnements",
      "description": "Frites de plantains mûrs, dorées et savoureuses.",
      "allergens": "",
      "stock": 0,
      "unit": "portion",
      "photos": [],
      "variants": [
        {
          "id": "a3v0",
          "name": "Portion",
          "basePrice": 500,
          "photos": [
            "./menu/fp.avif"
          ]
        }
      ],
      "qtyPricing": []
    },
    {
      "id": "g1",
      "name": "Poulet Grillé",
      "category": "Grillades",
      "description": "Poulet mariné aux épices et grillé au feu de bois. Saveur authentique.",
      "allergens": "",
      "stock": 0,
      "unit": "portion",
      "photos": [],
      "variants": [
        {
          "id": "g1v0",
          "name": "Portion",
          "basePrice": 2000,
          "photos": [
            "./menu/pg.avif"
          ]
        }
      ],
      "qtyPricing": []
    },
    {
      "id": "g2",
      "name": "Poulet Braisé",
      "category": "Grillades",
      "description": "Poulet braisé à la sauce tomate avec aromates. Tendre et juteux.",
      "allergens": "",
      "stock": 0,
      "unit": "portion",
      "photos": [],
      "variants": [
        {
          "id": "g2v0",
          "name": "Portion",
          "basePrice": 2000,
          "photos": [
            "./menu/pb.avif"
          ]
        }
      ],
      "qtyPricing": []
    },
    {
      "id": "g3",
      "name": "Saucisse Braisée",
      "category": "Grillades",
      "description": "Saucisse grillée, juteuse et bien assaisonnée.",
      "allergens": "",
      "stock": 0,
      "unit": "portion",
      "photos": [],
      "variants": [
        {
          "id": "g3v0",
          "name": "À partir de",
          "basePrice": 1000,
          "photos": [
            "./menu/sg.avif"
          ]
        }
      ],
      "qtyPricing": []
    },
    {
      "id": "g4",
      "name": "Côtelette de Porc Grillé",
      "category": "Grillades",
      "description": "Côtelette de porc marinée et grillée au charbon, tendre et savoureuse.",
      "allergens": "",
      "stock": 0,
      "unit": "portion",
      "photos": [],
      "variants": [
        {
          "id": "g4v0",
          "name": "Portion",
          "basePrice": 2000,
          "photos": [
            "./menu/cp.avif"
          ]
        }
      ],
      "qtyPricing": []
    },
    {
      "id": "m1",
      "name": "Crevettes Sautées à l'Ail",
      "category": "Plats principaux",
      "description": "Crevettes fraîches sautées à l'ail et aux herbes. Un délice marin.",
      "allergens": "",
      "stock": 0,
      "unit": "portion",
      "photos": [],
      "variants": [
        {
          "id": "m1v0",
          "name": "Portion",
          "basePrice": 3000,
          "photos": [
            "./menu/crev.avif"
          ]
        }
      ],
      "qtyPricing": []
    },
    {
      "id": "m2",
      "name": "Poulet Yassa",
      "category": "Plats principaux",
      "description": "Poulet mariné au citron et oignons, mijoté à la sauce yassa. Plat sénégalais emblématique.",
      "allergens": "",
      "stock": 0,
      "unit": "portion",
      "photos": [],
      "variants": [
        {
          "id": "m2v0",
          "name": "Portion",
          "basePrice": 2500,
          "photos": [
            "./menu/py.avif"
          ]
        }
      ],
      "qtyPricing": []
    },
    {
      "id": "m3",
      "name": "Poulet Pané",
      "category": "Plats principaux",
      "description": "Poulet pané croustillant, doré à point. Servi avec sauce maison.",
      "allergens": "",
      "stock": 0,
      "unit": "portion",
      "photos": [],
      "variants": [
        {
          "id": "m3v0",
          "name": "Portion",
          "basePrice": 2500,
          "photos": [
            "./menu/pp.avif"
          ]
        }
      ],
      "qtyPricing": []
    },
    {
      "id": "m4",
      "name": "Poulet MAYO",
      "category": "Plats principaux",
      "description": "Poulet nappé de sauce mayonnaise maison et herbes fraîches.",
      "allergens": "",
      "stock": 0,
      "unit": "portion",
      "photos": [],
      "variants": [
        {
          "id": "m4v0",
          "name": "Portion",
          "basePrice": 2500,
          "photos": [
            "./menu/pm.avif"
          ]
        }
      ],
      "qtyPricing": []
    },
    {
      "id": "m5",
      "name": "Poulet DG",
      "category": "Plats principaux",
      "description": "Poulet braisé sauce tomate avec plantains mûrs et légumes. Classique camerounais.",
      "allergens": "",
      "stock": 0,
      "unit": "portion",
      "photos": [],
      "variants": [
        {
          "id": "m5v0",
          "name": "Portion",
          "basePrice": 2000,
          "photos": [
            "./menu/pdg.avif"
          ]
        }
      ],
      "qtyPricing": []
    },
    {
      "id": "m6",
      "name": "Tripes façon Grand-Mère",
      "category": "Plats principaux",
      "description": "Tripes mijotées à l'ancienne, épicées et savoureuses comme chez grand-mère.",
      "allergens": "",
      "stock": 0,
      "unit": "portion",
      "photos": [],
      "variants": [
        {
          "id": "m6v0",
          "name": "Portion",
          "basePrice": 2000,
          "photos": [
            "./menu/tgm.avif"
          ]
        }
      ],
      "qtyPricing": []
    },
    {
      "id": "m7",
      "name": "Spaghettis Bolognaise",
      "category": "Plats principaux",
      "description": "Spaghettis al dente nappés de sauce bolognaise maison bien relevée.",
      "allergens": "",
      "stock": 0,
      "unit": "portion",
      "photos": [],
      "variants": [
        {
          "id": "m7v0",
          "name": "Portion",
          "basePrice": 2000,
          "photos": [
            "./menu/sb.avif"
          ]
        }
      ],
      "qtyPricing": []
    },
    {
      "id": "m8",
      "name": "Riz du Chef Adams",
      "category": "Plats principaux",
      "description": "Riz spécial signature du Chef Adams, cuisiné avec des épices secrètes.",
      "allergens": "",
      "stock": 0,
      "unit": "portion",
      "photos": [],
      "variants": [
        {
          "id": "m8v0",
          "name": "Portion",
          "basePrice": 2000,
          "photos": [
            "./menu/rca.avif"
          ]
        }
      ],
      "qtyPricing": []
    },
    {
      "id": "m9",
      "name": "Spaghettis Viande Hachée",
      "category": "Plats principaux",
      "description": "Spaghettis à la viande hachée, sauce tomate épicée.",
      "allergens": "",
      "stock": 0,
      "unit": "portion",
      "photos": [],
      "variants": [
        {
          "id": "m9v0",
          "name": "Portion",
          "basePrice": 1500,
          "photos": [
            "./menu/sva.avif"
          ]
        }
      ],
      "qtyPricing": []
    },
    {
      "id": "m10",
      "name": "Spaghettis Viande",
      "category": "Plats principaux",
      "description": "Spaghettis aux morceaux de viande tendres en sauce.",
      "allergens": "",
      "stock": 0,
      "unit": "portion",
      "photos": [],
      "variants": [
        {
          "id": "m10v0",
          "name": "Portion",
          "basePrice": 1000,
          "photos": [
            "./menu/sv.avif"
          ]
        }
      ],
      "qtyPricing": []
    },
    {
      "id": "m11",
      "name": "Spaghettis Saucisson",
      "category": "Plats principaux",
      "description": "Spaghettis au saucisson grillé, sauce tomate maison.",
      "allergens": "",
      "stock": 0,
      "unit": "portion",
      "photos": [],
      "variants": [
        {
          "id": "m11v0",
          "name": "Portion",
          "basePrice": 1000,
          "photos": [
            "./menu/sc.avif"
          ]
        }
      ],
      "qtyPricing": []
    },
    {
      "id": "m12",
      "name": "Spaghettis Sardines",
      "category": "Plats principaux",
      "description": "Spaghettis aux sardines, sauce légère aux herbes.",
      "allergens": "",
      "stock": 0,
      "unit": "portion",
      "photos": [],
      "variants": [
        {
          "id": "m12v0",
          "name": "Portion",
          "basePrice": 700,
          "photos": [
            "./menu/ss.avif"
          ]
        }
      ],
      "qtyPricing": []
    },
    {
      "id": "b1",
      "name": "Bières (33export, Kadji, Castel, Mutzig, Doppel, Bosster, Chill)",
      "category": "Boissons alcoolisées",
      "description": "Sélection de bières fraîches locales et importées.",
      "allergens": "",
      "stock": 0,
      "unit": "bouteille",
      "photos": [],
      "variants": [
        {
          "id": "b1v0",
          "name": "Bouteille",
          "basePrice": 800,
          "photos": [
            "./menu/b.avif"
          ]
        }
      ],
      "qtyPricing": []
    },
    {
      "id": "b2",
      "name": "Bières Premium (Petite Guinness, Origine, Icce)",
      "category": "Boissons alcoolisées",
      "description": "Bières de qualité supérieure pour les amateurs.",
      "allergens": "",
      "stock": 0,
      "unit": "bouteille",
      "photos": [],
      "variants": [
        {
          "id": "b2v0",
          "name": "Bouteille",
          "basePrice": 850,
          "photos": [
            "./menu/g.avif"
          ]
        }
      ],
      "qtyPricing": []
    },
    {
      "id": "b3",
      "name": "Bières Importées (Heineken, Vody)",
      "category": "Boissons alcoolisées",
      "description": "Bières internationales premium, fraîches et rafraîchissantes.",
      "allergens": "",
      "stock": 0,
      "unit": "bouteille",
      "photos": [],
      "variants": [
        {
          "id": "b3v0",
          "name": "Bouteille",
          "basePrice": 1000,
          "photos": [
            "./menu/hei.avif"
          ]
        }
      ],
      "qtyPricing": []
    },
    {
      "id": "b4",
      "name": "Cocktails Alcoolisés",
      "category": "Boissons alcoolisées",
      "description": "Cocktails créatifs préparés par notre barman. Grande variété de saveurs.",
      "allergens": "",
      "stock": 0,
      "unit": "verre",
      "photos": [],
      "variants": [
        {
          "id": "b4v0",
          "name": "Petit (à partir de)",
          "basePrice": 2500,
          "photos": [
            "./menu/ca.avif"
          ]
        },
        {
          "id": "b4v1",
          "name": "Grand (à partir de)",
          "basePrice": 5000,
          "photos": [
            "./menu/ca.avif"
          ]
        }
      ],
      "qtyPricing": []
    },
    {
      "id": "s1",
      "name": "Eau Supermont",
      "category": "Boissons non alcoolisées",
      "description": "Eau minérale fraîche Supermont.",
      "allergens": "",
      "stock": 0,
      "unit": "bouteille",
      "photos": [],
      "variants": [
        {
          "id": "s1v0",
          "name": "Bouteille",
          "basePrice": 500,
          "photos": [
            "./menu/sm.avif"
          ]
        }
      ],
      "qtyPricing": []
    },
    {
      "id": "s2",
      "name": "Pamplemousse",
      "category": "Boissons non alcoolisées",
      "description": "Boisson gazeuse au pamplemousse, rafraîchissante.",
      "allergens": "",
      "stock": 0,
      "unit": "bouteille",
      "photos": [],
      "variants": [
        {
          "id": "s2v0",
          "name": "Bouteille",
          "basePrice": 600,
          "photos": [
            "./menu/pam.avif"
          ]
        }
      ],
      "qtyPricing": []
    },
    {
      "id": "s3",
      "name": "Djino",
      "category": "Boissons non alcoolisées",
      "description": "Djino, boisson fruitée populaire au Cameroun.",
      "allergens": "",
      "stock": 0,
      "unit": "bouteille",
      "photos": [],
      "variants": [
        {
          "id": "s3v0",
          "name": "Bouteille",
          "basePrice": 900,
          "photos": [
            "./menu/dji.avif"
          ]
        }
      ],
      "qtyPricing": []
    },
    {
      "id": "s4",
      "name": "Vimto",
      "category": "Boissons non alcoolisées",
      "description": "Vimto, boisson aux fruits rouges. Douce et désaltérante.",
      "allergens": "",
      "stock": 0,
      "unit": "bouteille",
      "photos": [],
      "variants": [
        {
          "id": "s4v0",
          "name": "Bouteille",
          "basePrice": 1000,
          "photos": [
            "./menu/vimto.avif"
          ]
        }
      ],
      "qtyPricing": []
    },
    {
      "id": "s5",
      "name": "Bavaria / Baobab / Malta",
      "category": "Boissons non alcoolisées",
      "description": "Boissons maltées sans alcool, riches et nutritives.",
      "allergens": "",
      "stock": 0,
      "unit": "bouteille",
      "photos": [],
      "variants": [
        {
          "id": "s5v0",
          "name": "Bouteille",
          "basePrice": 1000,
          "photos": [
            "./menu/bao.avif"
          ]
        }
      ],
      "qtyPricing": []
    },
    {
      "id": "s6",
      "name": "Cocktails Sans Alcool",
      "category": "Boissons non alcoolisées",
      "description": "Cocktails sans alcool créatifs, colorés et savoureux.",
      "allergens": "",
      "stock": 0,
      "unit": "verre",
      "photos": [],
      "variants": [
        {
          "id": "s6v0",
          "name": "Petit (à partir de)",
          "basePrice": 1500,
          "photos": [
            "./menu/cn.avif"
          ]
        },
        {
          "id": "s6v1",
          "name": "Grand (à partir de)",
          "basePrice": 3000,
          "photos": [
            "./menu/cn.avif"
          ]
        }
      ],
      "qtyPricing": []
    },
    {
      "id": "v1",
      "name": "Nos Vins (Moët, Moscato, Vin blanc)",
      "category": "Vins & Spiritueux",
      "description": "Sélection de vins et champagnes. Prix sur demande.",
      "allergens": "",
      "stock": 0,
      "unit": "bouteille",
      "photos": [],
      "variants": [
        {
          "id": "v1v0",
          "name": "Prix sur demande",
          "basePrice": 0,
          "photos": [
            "./menu/vin.avif"
          ]
        }
      ],
      "qtyPricing": []
    },
    {
      "id": "v2",
      "name": "Nos Whiskies (Chivas, Jack Daniel, Red Label, Grant's, Singleton, WS, Impérial Bleu, Baileys, Monkey)",
      "category": "Vins & Spiritueux",
      "description": "Sélection de whiskies et spiritueux premium. Prix selon la marque.",
      "allergens": "",
      "stock": 0,
      "unit": "verre",
      "photos": [],
      "variants": [
        {
          "id": "v2v0",
          "name": "Verre (prix sur demande)",
          "basePrice": 0,
          "photos": [
            "./menu/w.avif"
          ]
        }
      ],
      "qtyPricing": []
    },
    {
      "id": "c1",
      "name": "Chicha",
      "category": "Chicha",
      "description": "Chicha parfumée, machine complète avec charbon et tabac. Saveurs variées.",
      "allergens": "",
      "stock": 0,
      "unit": "machine",
      "photos": [],
      "variants": [
        {
          "id": "c1v0",
          "name": "La machine",
          "basePrice": 3000,
          "photos": [
            "./menu/chi.avif"
          ]
        }
      ],
      "qtyPricing": []
    }
  ];

var DEF_CONTACTS={
  order:[{id:"c1",label:"Principal",number:"+237656929480"}],
  mtn:[{id:"c2",label:"Compte MTN",number:"+237652964254"}],
  orange:[{id:"c3",label:"Compte Orange",number:"+237656929480"}]
};

var state={products:[],contacts:JSON.parse(JSON.stringify(DEF_CONTACTS)),adminPwd:"chefadams2025",logged:false};
var editVars=[],editQty=[];
var currentCat="Tous";

function loadState(){
  try{
    var s=localStorage.getItem("chef_adams_state");
    if(s){
      var p=JSON.parse(s);state=Object.assign({},state,p);
      if(!state.contacts)state.contacts=JSON.parse(JSON.stringify(DEF_CONTACTS));
      if(!state.contacts.order)state.contacts.order=DEF_CONTACTS.order.slice();
      if(!state.contacts.mtn)state.contacts.mtn=DEF_CONTACTS.mtn.slice();
      if(!state.contacts.orange)state.contacts.orange=DEF_CONTACTS.orange.slice();
    }else{state.products=DEF_PRODUCTS.slice();saveState();}
    if(!state.products||!state.products.length){state.products=DEF_PRODUCTS.slice();saveState();}
    state.products.forEach(function(p){if(!p.variants)p.variants=[];if(!p.photos)p.photos=[];if(!p.allergens)p.allergens="";p.variants.forEach(function(v){if(!v.id)v.id="v"+Date.now()+Math.random();if(!v.photos)v.photos=[];});});
  }catch(e){state.products=DEF_PRODUCTS.slice();}
}
function saveState(){localStorage.setItem("chef_adams_state",JSON.stringify(state));}

function emoji(c){return{
  "Plats principaux":"🍛","Grillades":"🔥","Entrées":"🥗","Accompagnements":"🍚","Boissons alcoolisées":"🍺","Boissons non alcoolisées":"🥤","Vins & Spiritueux":"🥃","Chicha":"💨","Autre":"🍴"
}[c]||"\ud83c\udf74";}

function fmt(n){return Number(n).toLocaleString("fr-FR");}

function waIcon(){return'<svg viewBox="0 0 24 24" fill="currentColor" style="width:15px;height:15px;flex-shrink:0"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.057.522 4.01 1.513 5.734L0 24l6.38-1.498A11.926 11.926 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.854 0-3.612-.48-5.144-1.33l-.367-.219-3.785.889.906-3.694-.24-.38A9.96 9.96 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/></svg>';}

function getMainImg(p,vi){var v=p.variants&&p.variants[vi||0];if(v&&v.photos&&v.photos.length&&v.photos[0]&&v.photos[0].length>10)return v.photos[0];if(p.photos&&p.photos.length&&p.photos[0]&&p.photos[0].length>10)return p.photos[0];return null;}
function getAllPhotos(p,vi){var v=p.variants&&p.variants[vi||0];var vp=v&&v.photos?v.photos.filter(function(x){return x&&x.length>10;}):[];var pp=p.photos?p.photos.filter(function(x){return x&&x.length>10;}):[];return vp.length?vp:pp;}
function getFirstWaNum(){var c=state.contacts&&state.contacts.order&&state.contacts.order[0];return c?c.number.replace(/\s/g,"").replace("+",""):"237656929480";}
function updateWaLinks(){
  var n=getFirstWaNum();var href="https://wa.me/"+n;
  ["navWa","heroCta2","contactWa","footWa"].forEach(function(id){var el=document.getElementById(id);if(el)el.href=href;});
}



// ====== NAV ======
function toggleMobMenu(){var m=document.getElementById("mobMenu");m.style.display=m.style.display==="flex"?"none":"flex";}
function closeMobMenu(){document.getElementById("mobMenu").style.display="none";}

// ====== STEPS ======
function renderSteps(){
  var g=document.getElementById("stepsGrid");if(!g)return;
  g.innerHTML=[{t:tx("step1t"),d:tx("step1d")},{t:tx("step2t"),d:tx("step2d")},{t:tx("step3t"),d:tx("step3d")},{t:tx("step4t"),d:tx("step4d")}]
    .map(function(s,i){return'<div class="step-card"><div class="step-num">'+(i+1)+'</div><div class="step-title">'+s.t+'</div><div class="step-desc">'+s.d+'</div></div>';}).join("");
}

// ====== PAYMENT CARDS ======
function renderPayCards(){
  var g=document.getElementById("payCards");if(!g)return;
  var html="";
  (state.contacts.mtn||[]).forEach(function(c){html+='<div class="pay-card mtn"><div style="font-size:28px">&#128241;</div><div><div class="pay-card-label">MTN MoMo &middot; '+c.label+'</div><div class="pay-num">'+c.number+'</div></div></div>';});
  (state.contacts.orange||[]).forEach(function(c){html+='<div class="pay-card orange"><div style="font-size:28px">&#127825;</div><div><div class="pay-card-label">Orange Money &middot; '+c.label+'</div><div class="pay-num">'+c.number+'</div></div></div>';});
  g.innerHTML=html;
  var fb=document.getElementById("footBadges");if(!fb)return;
  var bh="";
  (state.contacts.mtn||[]).slice(0,1).forEach(function(c){bh+='<span class="pay-badge mtn">&#128241; MTN: '+c.number+'</span>';});
  (state.contacts.orange||[]).slice(0,1).forEach(function(c){bh+='<span class="pay-badge org">&#127825; Orange: '+c.number+'</span>';});
  fb.innerHTML=bh;
}

// ====== CATEGORY FILTER ======
function renderCatFilter(){
  var cats=["Tous"];
  state.products.forEach(function(p){if(cats.indexOf(p.category)<0)cats.push(p.category);});
  var g=document.getElementById("catFilter");if(!g)return;
  g.innerHTML=cats.map(function(c){return'<button class="cat-btn'+(c===currentCat?" on":"")+'" onclick="filterCat(\''+c+'\')">'+emoji(c)+" "+c+'</button>';}).join("");
}
function filterCat(cat){currentCat=cat;renderCatFilter();renderProducts();}

// ====== PRODUCTS ======
function getPrice(p,qty,vi){
  if(p.qtyPricing&&p.qtyPricing.length){
    var s=p.qtyPricing.slice().sort(function(a,b){return a.min-b.min;});
    var pr=s[0].price;
    for(var i=0;i<s.length;i++){var r=s[i];if(qty>=r.min&&(r.max===0||qty<=r.max)){pr=r.price;break;}}
    return pr;
  }
  var v=p.variants&&p.variants[vi||0];return v?v.basePrice:0;
}

function renderProducts(){
  var grid=document.getElementById("productsGrid");if(!grid)return;
  grid.innerHTML="";
  var filtered=currentCat==="Tous"?state.products:state.products.filter(function(p){return p.category===currentCat;});
  // update stat
  var sn=document.getElementById("statProdNum");if(sn)sn.textContent=state.products.length+"+";
  filtered.forEach(function(p){
    var v0=p.variants&&p.variants[0];
    var price=p.qtyPricing&&p.qtyPricing.length?p.qtyPricing[0].price:(v0?v0.basePrice:0);
    var inStock=p.stock===0||p.stock>0;// 0 = illimite
    var outNow=p.stock<0;
    var mainImg=getMainImg(p,0);
    var imgH=mainImg?'<div class="card-img-wrap"><img class="card-img" src="'+mainImg+'" alt="'+p.name+'" loading="lazy"/></div>':'<div class="card-placeholder">'+emoji(p.category)+'</div>';
    var chips="";
    if(p.variants&&p.variants.length>1){chips='<div class="card-variants">'+p.variants.map(function(v,i){return'<span class="vchip'+(i===0?" on":"")+'" onclick="event.stopPropagation();selVC(this,\''+p.id+'\','+i+')">'+v.name+'</span>';}).join("")+'</div>';}
    var card=document.createElement("div");
    card.className="pcard"+(outNow?" oos":"");
    card.dataset.pid=p.id;
    card.innerHTML=(inStock&&!outNow?'<span class="stock-badge ok">'+tx("inStock")+'</span>':'<span class="stock-badge">'+tx("outStock")+'</span>')+
      imgH+'<div class="card-body">'+
        '<div class="card-cat">'+emoji(p.category)+' '+p.category+'</div>'+
        '<div class="card-name">'+p.name+'</div>'+
        '<div class="card-desc">'+(p.description||"").substring(0,85)+((p.description||"").length>85?"...":"")+'</div>'+
        chips+
        '<div class="card-price" id="cp-'+p.id+'">'+fmt(price)+' FCFA</div>'+
        '<div class="card-price-note">'+(p.qtyPricing&&p.qtyPricing.length>1?"Prix selon quantite":"")+(p.variants&&p.variants.length>1?" &bull; "+p.variants.length+" options":"")+'</div>'+
        '<button class="btn-add-cart" onclick="event.stopPropagation();addToCart(\''+p.id+'\',0,1,this)">+ Ajouter au panier</button>'+
      '</div>';
    card.addEventListener("click",function(){openModal(p.id,0);});
    grid.appendChild(card);
  });
}

function selVC(el,pid,idx){
  var p=state.products.find(function(x){return x.id===pid;});if(!p)return;
  el.parentNode.querySelectorAll(".vchip").forEach(function(c){c.classList.remove("on");});el.classList.add("on");
  var v=p.variants[idx];var price=p.qtyPricing&&p.qtyPricing.length?p.qtyPricing[0].price:(v?v.basePrice:0);
  var cp=document.getElementById("cp-"+pid);if(cp)cp.textContent=fmt(price)+" FCFA";
  var mainImg=getMainImg(p,idx);var card=document.querySelector('[data-pid="'+pid+'"]');
  if(card&&mainImg){var w=card.querySelector(".card-img-wrap");if(w){var im=w.querySelector("img");if(im)im.src=mainImg;}}
}

// ====== MODAL ======
var curVar=0;
function openModal(pid,vi){
  var p=state.products.find(function(x){return x.id===pid;});if(!p)return;
  curVar=vi||0;var photos=getAllPhotos(p,curVar);var box=document.getElementById("modalBox");
  var mainImgH=photos.length?'<img class="modal-main-img" id="mImg" src="'+photos[0]+'" alt="'+p.name+'"/>'
    :'<div style="width:100%;height:220px;background:var(--dark3);display:flex;align-items:center;justify-content:center;font-size:64px;border-radius:16px 16px 0 0">'+emoji(p.category)+'</div>';
  var thumbsH=photos.length>1?'<div class="modal-thumbs">'+photos.map(function(ph,i){return'<img class="mthumb'+(i===0?" on":"")+'" src="'+ph+'" onclick="switchImg(\''+ph+'\',this)" alt=""/>';}).join("")+'</div>':"";
  var priceRows=(p.qtyPricing||[]).map(function(r){return'<tr><td>'+r.min+(r.max>0?" - "+r.max:" et plus")+'</td><td>'+(p.unit||"portion")+'</td><td>'+fmt(r.price)+' FCFA</td></tr>';}).join("");
  var varSelH="";
  if(p.variants&&p.variants.length>1){varSelH='<div style="margin-bottom:12px"><div style="font-size:11px;color:var(--gray);margin-bottom:7px">'+tx("chooseVar")+'</div><div class="card-variants">'+p.variants.map(function(v,i){return'<span class="vchip'+(i===curVar?" on":"")+'" onclick="switchVarModal(\''+pid+'\','+i+',this)">'+v.name+'</span>';}).join("")+'</div></div>';}
  var curV=p.variants&&p.variants[curVar];
  var allergH=p.allergens?'<div class="modal-allerg">&#9888;&#65039; '+tx("allerg")+' '+p.allergens+'</div>':"";
  box.innerHTML='<button class="modal-close" onclick="closeModal()">&#10005;</button>'+
    mainImgH+thumbsH+
    '<div class="modal-body">'+
      '<div class="modal-cat">'+emoji(p.category)+' '+p.category+'</div>'+
      '<div class="modal-name">'+p.name+'</div>'+
      '<div class="modal-desc">'+(p.description||"")+'</div>'+
      allergH+varSelH+
      (priceRows?'<table class="ptable"><thead><tr><th>'+tx("qtyLbl")+'</th><th>Unite</th><th>Prix unitaire</th></tr></thead><tbody>'+priceRows+'</tbody></table>':
        (curV?'<div style="font-size:18px;color:var(--red-light);font-weight:700;margin-bottom:12px">'+fmt(curV.basePrice)+' FCFA</div>':""))+
      '<div class="order-row">'+
        '<div><div style="font-size:11px;color:var(--gray);margin-bottom:5px">'+tx("qtyLbl")+'</div>'+
        '<div class="qty-ctrl">'+
          '<button class="qty-btn" onclick="chQty(-1,\''+p.id+'\')">&#8722;</button>'+
          '<input class="qty-inp" type="number" id="qty-'+p.id+'" value="1" min="1" max="'+(p.stock>0?p.stock:999)+'" onchange="updTotal(\''+p.id+'\')"/>'+
          '<button class="qty-btn" onclick="chQty(1,\''+p.id+'\')">+</button>'+
        '</div></div>'+
        '<div style="flex:1;min-width:120px">'+
          '<div class="total-disp">'+tx("totLbl")+' <span id="tot-'+p.id+'">'+fmt(getPrice(p,1,curVar))+' FCFA</span></div>'+
          '<div style="font-size:10px;color:var(--gray);margin-top:3px">'+(p.stock>0?tx("stockLbl")+' '+p.stock+' '+(p.unit||"portion")+'(s)':"Disponible")+'</div>'+
        '</div>'+
      '</div>'+
      '<div class="pay-btns">'+
        '<button class="btn-add-cart" style="font-size:14px;padding:13px;margin-bottom:4px" onclick="addToCart(\''+p.id+'\',curVar,parseInt(document.getElementById(\'qty-'+p.id+'\').value)||1,null,true)">+ Ajouter au panier</button>'+
        '<button class="btn-wa" style="font-size:12px;padding:9px;opacity:.75" onclick="orderWAModal(\''+p.id+'\')">'+waIcon()+' Commander ce plat seul</button>'+
      '</div>'+
    '</div>';
  document.getElementById("prodModal").classList.add("open");document.body.style.overflow="hidden";
}
function switchVarModal(pid,idx,el){
  curVar=idx;el.parentNode.querySelectorAll(".vchip").forEach(function(c){c.classList.remove("on");});el.classList.add("on");
  var p=state.products.find(function(x){return x.id===pid;});if(!p)return;
  var photos=getAllPhotos(p,idx);var mi=document.getElementById("mImg");if(mi&&photos.length)mi.src=photos[0];
  var tc=document.querySelector(".modal-thumbs");
  if(tc)tc.innerHTML=photos.length>1?photos.map(function(ph,i){return'<img class="mthumb'+(i===0?" on":"")+'" src="'+ph+'" onclick="switchImg(\''+ph+'\',this)" alt=""/>';}).join(""):"";
  updTotal(pid);
}
function switchImg(src,el){var m=document.getElementById("mImg");if(m)m.src=src;el.parentNode.querySelectorAll(".mthumb").forEach(function(t){t.classList.remove("on");});el.classList.add("on");}
function closeModal(){document.getElementById("prodModal").classList.remove("open");document.body.style.overflow="";}
function chQty(d,pid){var i=document.getElementById("qty-"+pid);if(!i)return;i.value=Math.max(1,(parseInt(i.value)||1)+d);updTotal(pid);}
function updTotal(pid){var p=state.products.find(function(x){return x.id===pid;});if(!p)return;var q=parseInt(document.getElementById("qty-"+pid).value)||1;var el=document.getElementById("tot-"+pid);if(el)el.textContent=fmt(getPrice(p,q,curVar)*q)+" FCFA";}
function buildMsg(p,vi,qty,template){
  var v=p.variants&&p.variants[vi];var vt=v?" - "+v.name:"";var pr=getPrice(p,qty,vi);
  return encodeURIComponent(template.replace("{name}",p.name).replace("{variant}",vt).replace("{qty}",qty).replace("{unit}",p.unit||"portion").replace("{price}",fmt(pr)).replace("{total}",fmt(pr*qty)));
}
function orderWA(pid,vi,qty){var p=state.products.find(function(x){return x.id===pid;});if(!p)return;window.open("https://wa.me/"+getFirstWaNum()+"?text="+buildMsg(p,vi,qty,tx("waMsg")),"_blank");}
function orderWAModal(pid){orderWA(pid,curVar,parseInt(document.getElementById("qty-"+pid).value)||1);}
function orderOrangeModal(pid){var p=state.products.find(function(x){return x.id===pid;});if(!p)return;var qty=parseInt(document.getElementById("qty-"+pid).value)||1;window.open("https://wa.me/"+getFirstWaNum()+"?text="+buildMsg(p,curVar,qty,tx("omMsg")),"_blank");}
document.getElementById("prodModal").addEventListener("click",function(e){if(e.target===this)closeModal();});

// ====== TOAST ======
function showToast(msg,type){var t=document.getElementById("toast");t.textContent=msg;t.style.borderColor=(type==="err")?"rgba(231,76,60,.4)":"rgba(192,57,43,.3)";t.classList.add("show");setTimeout(function(){t.classList.remove("show");},3000);}

// ====== LOGIN ======
function openLogin(){document.getElementById("loginBg").style.display="flex";setTimeout(function(){document.getElementById("loginPwd").focus();},50);}
function closeLogin(){document.getElementById("loginBg").style.display="none";}
function doLogin(){if(document.getElementById("loginPwd").value===state.adminPwd){state.logged=true;closeLogin();showAdmin();}else{document.getElementById("loginErr").style.display="block";document.getElementById("loginPwd").value="";}}
function doLogout(){state.logged=false;showVitrine();}

// ====== ADMIN NAV ======
function navAdm(sec,el){
  document.querySelectorAll(".adm-sec").forEach(function(s){s.classList.remove("on");});
  var t=document.getElementById("sec-"+sec);if(t)t.classList.add("on");
  document.querySelectorAll(".sb-item").forEach(function(s){s.classList.remove("on");});
  var sid=document.querySelector('.sb-item[data-s="'+sec+'"]');if(sid)sid.classList.add("on");
  document.querySelectorAll(".adm-mob-tab").forEach(function(t){t.classList.remove("on");});
  var mid=document.querySelector('.adm-mob-tab[data-s="'+sec+'"]');if(mid)mid.classList.add("on");
  if(sec==="products")renderAdmProducts();
  if(sec==="dashboard")renderAdmDashboard();
  if(sec==="settings")renderAdmSettings();
}
function showAdmin(){document.getElementById("vitrine").style.display="none";document.getElementById("admin-panel").style.display="block";navAdm("dashboard");}
function showVitrine(){document.getElementById("admin-panel").style.display="none";document.getElementById("vitrine").style.display="block";renderCatFilter();renderProducts();renderPayCards();updateWaLinks();}

// ====== ADMIN DASHBOARD ======
function renderAdmDashboard(){
  var total=state.products.length;
  var avail=state.products.filter(function(p){return p.stock>=0;}).length;
  var cats=[...new Set(state.products.map(function(p){return p.category;}))].length;
  document.getElementById("admStats").innerHTML=
    '<div class="adm-stat"><div class="lbl">Plats</div><div class="val">'+total+'</div></div>'+
    '<div class="adm-stat"><div class="lbl">Disponibles</div><div class="val">'+avail+'</div></div>'+
    '<div class="adm-stat"><div class="lbl">Categories</div><div class="val">'+cats+'</div></div>';
  document.querySelector("#dashTbl tbody").innerHTML=state.products.slice(0,6).map(function(p){
    var img=getMainImg(p,0);
    return'<tr><td>'+(img?'<img src="'+img+'" alt=""/>':'<span style="font-size:22px">'+emoji(p.category)+'</span>')+'</td>'+
      '<td><strong style="color:var(--white)">'+p.name+'</strong></td>'+
      '<td><span class="tag tg">'+p.category+'</span></td>'+
      '<td>'+(p.stock===0?"Illimite":p.stock)+'</td>'+
      '<td><span class="tag '+(p.stock>=0?"tgr":"trd")+'">'+(p.stock>=0?"Dispo":"Indispo")+'</span></td></tr>';
  }).join("");
}
function renderAdmProducts(){
  document.querySelector("#prodTbl tbody").innerHTML=state.products.map(function(p){
    var img=getMainImg(p,0);
    return'<tr>'+
      '<td style="padding-left:14px">'+(img?'<img src="'+img+'" alt=""/>':'<span style="font-size:22px">'+emoji(p.category)+'</span>')+'</td>'+
      '<td><div style="font-weight:500;color:var(--white);font-size:13px">'+p.name+'</div><div style="font-size:10px;color:var(--gray)">'+(p.description||"").substring(0,40)+'...</div></td>'+
      '<td><span class="tag tg">'+p.category+'</span></td>'+
      '<td>'+(p.variants||[]).map(function(v){return'<div style="font-size:10px;color:var(--gray-light);white-space:nowrap">'+v.name+' - '+fmt(v.basePrice)+' FCFA</div>';}).join("")+'</td>'+
      '<td><input type="number" value="'+p.stock+'" min="-1" style="width:68px;background:var(--dark3);border:1px solid rgba(255,255,255,.1);color:var(--white);padding:3px 6px;border-radius:4px;font-size:11px" title="-1=indispo, 0=illimite" onchange="updStock(\''+p.id+'\',this.value)"/></td>'+
      '<td style="white-space:nowrap"><button class="bsm bgh" style="margin-right:3px;font-size:10px" onclick="editProduct(\''+p.id+'\')">Modifier</button><button class="bsm bdr" style="font-size:10px" onclick="delProduct(\''+p.id+'\')">Suppr.</button></td>'+
    '</tr>';
  }).join("");
}
function updStock(pid,val){var p=state.products.find(function(x){return x.id===pid;});if(p){p.stock=parseInt(val);saveState();showToast("Disponibilite mise a jour");}}
function delProduct(pid){if(!confirm("Supprimer ce plat ?"))return;state.products=state.products.filter(function(p){return p.id!==pid;});saveState();renderAdmProducts();renderAdmDashboard();showToast("Plat supprime");}

// ====== SETTINGS ======
function renderAdmSettings(){
  renderContactList("order","listOrder");
  renderContactList("mtn","listMtn");
  renderContactList("orange","listOrange");
}
function renderContactList(type,cid){
  var list=state.contacts[type]||[];var el=document.getElementById(cid);if(!el)return;
  if(!list.length){el.innerHTML='<div style="font-size:12px;color:var(--gray);padding:8px 0">Aucun numero configure</div>';return;}
  el.innerHTML=list.map(function(c,i){
    return'<div class="clist-item">'+
      '<div class="clist-label">'+c.label+'</div>'+
      '<div class="clist-num">'+c.number+'</div>'+
      '<button class="bsm bgh" style="font-size:10px;padding:4px 8px" onclick="editContactLine(\''+type+'\','+i+')">Modifier</button>'+
      '<button class="bsm bdr" style="font-size:10px;padding:4px 8px" onclick="delContact(\''+type+'\','+i+')">Suppr.</button>'+
    '</div>';
  }).join("");
}
function addContact(type){
  var m={order:["inOrderLabel","inOrderNum"],mtn:["inMtnLabel","inMtnNum"],orange:["inOrgLabel","inOrgNum"]};
  var ids=m[type];if(!ids)return;
  var lbl=document.getElementById(ids[0]).value.trim();var num=document.getElementById(ids[1]).value.trim();
  if(!lbl||!num){showToast("Remplissez le label et le numero","err");return;}
  if(!state.contacts[type])state.contacts[type]=[];
  state.contacts[type].push({id:"c"+Date.now(),label:lbl,number:num});
  saveState();document.getElementById(ids[0]).value="";document.getElementById(ids[1]).value="";
  renderAdmSettings();renderPayCards();updateWaLinks();showToast("Numero ajoute !");
}
function delContact(type,idx){if(!confirm("Supprimer ce numero ?"))return;state.contacts[type].splice(idx,1);saveState();renderAdmSettings();renderPayCards();updateWaLinks();showToast("Numero supprime");}
function editContactLine(type,idx){
  var c=state.contacts[type][idx];var cid={order:"listOrder",mtn:"listMtn",orange:"listOrange"}[type];
  var el=document.getElementById(cid);if(!el)return;var items=el.querySelectorAll(".clist-item");if(!items[idx])return;
  items[idx].innerHTML=
    '<input type="text" value="'+c.label+'" id="el_lbl_'+type+'_'+idx+'" style="flex:1;background:var(--dark3);border:1px solid rgba(255,255,255,.1);color:var(--white);padding:5px 8px;border-radius:5px;font-size:12px"/>'+
    '<input type="text" value="'+c.number+'" id="el_num_'+type+'_'+idx+'" style="flex:1;background:var(--dark3);border:1px solid rgba(255,255,255,.1);color:var(--white);padding:5px 8px;border-radius:5px;font-size:12px"/>'+
    '<button class="bsm bg" style="font-size:10px;padding:5px 10px" onclick="saveContactLine(\''+type+'\','+idx+')">OK</button>'+
    '<button class="bsm bgh" style="font-size:10px;padding:5px 10px" onclick="renderAdmSettings()">Ann.</button>';
}
function saveContactLine(type,idx){
  var lbl=document.getElementById("el_lbl_"+type+"_"+idx).value.trim();var num=document.getElementById("el_num_"+type+"_"+idx).value.trim();
  if(!lbl||!num){showToast("Champs requis","err");return;}
  state.contacts[type][idx]={id:state.contacts[type][idx].id,label:lbl,number:num};
  saveState();renderAdmSettings();renderPayCards();updateWaLinks();showToast("Numero modifie !");
}
function changePwd(){
  var p1=document.getElementById("newPwd").value,p2=document.getElementById("confPwd").value;
  if(!p1){showToast("Entrez un mot de passe","err");return;}
  if(p1!==p2){showToast("Les mots de passe ne correspondent pas","err");return;}
  state.adminPwd=p1;saveState();document.getElementById("newPwd").value="";document.getElementById("confPwd").value="";showToast("Mot de passe change !");
}
function exportData(){var b=new Blob([JSON.stringify(state,null,2)],{type:"application/json"});var a=document.createElement("a");a.href=URL.createObjectURL(b);a.download="chef-adams-data.json";a.click();}
function exportHTML(){
  showToast("Génération du HTML en cours...");
  // Get the current full page HTML
  var fullHTML = document.documentElement.outerHTML;
  // Replace the DEF_PRODUCTS with current state products so the new file is standalone
  var productsJSON = JSON.stringify(state.products);
  var contactsJSON = JSON.stringify(state.contacts);
  var pwdVal = state.adminPwd;
  // Patch DEF_PRODUCTS
  fullHTML = fullHTML.replace(/var DEF_PRODUCTS=\[[\s\S]*?\];/, "var DEF_PRODUCTS="+productsJSON+";");
  // Patch DEF_CONTACTS
  fullHTML = fullHTML.replace(/var DEF_CONTACTS=\{[\s\S]*?\};/, "var DEF_CONTACTS="+contactsJSON+";");
  // Patch default password
  fullHTML = fullHTML.replace(/adminPwd:"[^"]*"/, 'adminPwd:"'+pwdVal.replace(/"/g,'\"')+'"');
  // Remove any runtime localStorage state so the new file loads from DEF_PRODUCTS
  fullHTML = fullHTML.replace(/var state=\{products:\[\],/, "var state={products:[],");
  // Build blob and trigger download
  var b=new Blob([fullHTML],{type:"text/html;charset=utf-8"});
  var a=document.createElement("a");
  a.href=URL.createObjectURL(b);
  a.download="index.html";
  a.click();
  setTimeout(function(){showToast("index.html téléchargé !");},400);
}

// ====== PRODUCT FORM ======
function resetForm(){
  document.getElementById("editId").value="";document.getElementById("pName").value="";
  document.getElementById("pCat").value="Plats principaux";document.getElementById("pDesc").value="";
  document.getElementById("pAllerg").value="";document.getElementById("pStock").value="";document.getElementById("pUnit").value="";
  document.getElementById("formTitle").textContent="Ajouter un plat";
  editVars=[];editQty=[];renderVars();renderQtyRows();addVarRow();
}
function addVarRow(name,price,photos){editVars.push({id:"v"+Date.now()+Math.random(),name:name||"",price:price||"",photos:photos?(photos.slice()):[]});renderVars();}
function renderVars(){
  var c=document.getElementById("varsContainer");c.innerHTML="";
  editVars.forEach(function(v,i){
    var div=document.createElement("div");div.className="var-item";
    div.innerHTML='<div class="var-hdr" onclick="toggleVarBody('+i+')">'+
      '<svg id="varrow-'+i+'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:12px;height:12px;color:var(--gray);flex-shrink:0;transition:transform .2s"><path d="M9 18l6-6-6-6"/></svg>'+
      '<span class="var-title">'+(v.name||"Nouvelle option")+'</span>'+
      '<span class="var-price">'+(v.price?fmt(v.price)+" FCFA":"")+'</span>'+
      '<button class="bic" style="padding:4px;margin-left:8px" onclick="event.stopPropagation();editVars.splice('+i+',1);renderVars()"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:11px;height:11px"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/></svg></button></div>'+
      '<div class="var-body" id="vbody-'+i+'">'+
        '<div class="fgrid" style="margin-bottom:10px">'+
          '<div class="fg"><label>Nom option *</label><input type="text" placeholder="Normale, Grande, Demi..." value="'+v.name+'" oninput="editVars['+i+'].name=this.value;document.querySelector(\'#varsContainer .var-item:nth-child('+(i+1)+') .var-title\').textContent=this.value||\'Nouvelle option\'"/></div>'+
          '<div class="fg"><label>Prix (FCFA)</label><input type="number" placeholder="2500" value="'+v.price+'" oninput="editVars['+i+'].price=this.value;document.querySelector(\'#varsContainer .var-item:nth-child('+(i+1)+') .var-price\').textContent=this.value?fmt(this.value)+\' FCFA\':\'\'"/></div>'+
        '</div>'+
        '<div style="font-size:11px;color:var(--gray-light);margin-bottom:6px">Photos de ce plat</div>'+
        '<div class="vphoto-grid" id="vpg-'+i+'">'+buildVPhotoHtml(v.photos,i)+'</div>'+
        '<div style="display:flex;gap:7px;flex-wrap:wrap;align-items:center;margin-top:8px">'+
          '<label style="display:inline-flex;align-items:center;gap:5px;cursor:pointer;background:rgba(192,57,43,.07);border:1px dashed rgba(192,57,43,.3);padding:5px 11px;border-radius:5px;font-size:11px;color:var(--red-light)">Uploader photo<input type="file" accept="image/*" multiple style="display:none" onchange="addVPhotos('+i+',this)"/></label>'+
          '<div style="display:flex;gap:5px;flex:1;min-width:180px">'+
            '<input type="text" id="vurl-'+i+'" placeholder="URL image (imgbb...)" style="flex:1;background:var(--dark3);border:1px solid rgba(255,255,255,.1);color:var(--white);padding:5px 9px;border-radius:5px;font-size:11px"/>'+
            '<button onclick="addVPhotoUrl('+i+')" style="background:rgba(192,57,43,.12);border:1px solid rgba(192,57,43,.3);color:var(--red-light);padding:5px 10px;border-radius:5px;font-size:11px;cursor:pointer;white-space:nowrap">+ URL</button>'+
          '</div>'+
        '</div>'+
      '</div>';
    c.appendChild(div);
  });
}
function toggleVarBody(i){var b=document.getElementById("vbody-"+i);if(!b)return;b.classList.toggle("open");var a=document.getElementById("varrow-"+i);if(a)a.style.transform=b.classList.contains("open")?"rotate(90deg)":"";}
function buildVPhotoHtml(photos,vi){
  return(photos||[]).map(function(ph,pi){
    if(!ph||ph.length<10)return"";
    return'<div class="vphoto'+(pi===0?" is-main":"") +'" draggable="true" data-vi="'+vi+'" data-pi="'+pi+'">'+
      '<img src="'+ph+'" alt=""/>'+
      (pi===0?'<div class="main-badge">&#11088;</div>':'')+
      '<div class="vphoto-actions">'+
        (pi>0?'<button class="va-btn star" onclick="setVMain('+vi+','+pi+')">&#11088; Principal</button>':'<span style="font-size:9px;color:var(--red-light)">Principale</span>')+
        '<button class="va-btn" style="color:#E74C3C" onclick="delVPhoto('+vi+','+pi+')">Retirer</button>'+
      '</div></div>';
  }).join("");
}
function addVPhotos(vi,input){Array.from(input.files).forEach(function(f){var r=new FileReader();r.onload=function(e){editVars[vi].photos.push(e.target.result);var g=document.getElementById("vpg-"+vi);if(g)g.innerHTML=buildVPhotoHtml(editVars[vi].photos,vi);};r.readAsDataURL(f);});}
function addVPhotoUrl(vi){var inp=document.getElementById("vurl-"+vi);if(!inp)return;var url=inp.value.trim();if(!url||!url.startsWith("http")){showToast("URL invalide","err");return;}editVars[vi].photos.push(url);var g=document.getElementById("vpg-"+vi);if(g)g.innerHTML=buildVPhotoHtml(editVars[vi].photos,vi);inp.value="";showToast("Photo ajoutee !");}
function setVMain(vi,pi){var ph=editVars[vi].photos;var m=ph.splice(pi,1)[0];ph.unshift(m);var g=document.getElementById("vpg-"+vi);if(g)g.innerHTML=buildVPhotoHtml(ph,vi);}
function delVPhoto(vi,pi){editVars[vi].photos.splice(pi,1);var g=document.getElementById("vpg-"+vi);if(g)g.innerHTML=buildVPhotoHtml(editVars[vi].photos,vi);}
function addQtyRow(mn,mx,pr){editQty.push({min:mn||"",max:mx||"",price:pr||""});renderQtyRows();}
function renderQtyRows(){
  var c=document.getElementById("qtyRows");var hdr=c.querySelector("div");c.innerHTML="";if(hdr)c.appendChild(hdr);
  editQty.forEach(function(q,i){
    var row=document.createElement("div");row.style.cssText="display:grid;grid-template-columns:1fr 1fr 1fr auto;gap:7px;padding:4px 0";
    row.innerHTML='<input type="number" placeholder="Min" value="'+q.min+'" style="background:var(--dark3);border:1px solid rgba(255,255,255,.1);color:var(--white);padding:5px 8px;border-radius:5px;font-size:12px" onchange="editQty['+i+'].min=this.value"/>'+
      '<input type="number" placeholder="Max(0=inf)" value="'+q.max+'" style="background:var(--dark3);border:1px solid rgba(255,255,255,.1);color:var(--white);padding:5px 8px;border-radius:5px;font-size:12px" onchange="editQty['+i+'].max=this.value"/>'+
      '<input type="number" placeholder="Prix FCFA" value="'+q.price+'" style="background:var(--dark3);border:1px solid rgba(255,255,255,.1);color:var(--white);padding:5px 8px;border-radius:5px;font-size:12px" onchange="editQty['+i+'].price=this.value"/>'+
      '<button class="bic" onclick="editQty.splice('+i+',1);renderQtyRows()"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:11px;height:11px"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/></svg></button>';
    c.appendChild(row);
  });
}
function saveProduct(){
  var id=document.getElementById("editId").value;var name=document.getElementById("pName").value.trim();
  if(!name){showToast("Le nom est obligatoire","err");return;}
  var variants=editVars.filter(function(v){return v.name;}).map(function(v){return{id:v.id,name:v.name,basePrice:parseInt(v.price)||0,photos:v.photos||[]};});
  if(!variants.length){showToast("Ajoutez au moins une option","err");return;}
  var qtyPricing=editQty.filter(function(q){return q.min&&q.price;}).map(function(q){return{min:parseInt(q.min),max:parseInt(q.max)||0,price:parseInt(q.price)};});
  var product={id:id||"p"+Date.now(),name:name,category:document.getElementById("pCat").value,description:document.getElementById("pDesc").value,allergens:document.getElementById("pAllerg").value,stock:parseInt(document.getElementById("pStock").value)||0,unit:document.getElementById("pUnit").value||"portion",photos:[],variants:variants,qtyPricing:qtyPricing};
  if(id){var idx=state.products.findIndex(function(p){return p.id===id;});if(idx>=0)state.products[idx]=product;}
  else state.products.push(product);
  saveState();renderAdmProducts();renderAdmDashboard();showToast("Plat enregistre !");resetForm();navAdm("products");
}
function editProduct(pid){
  var p=state.products.find(function(x){return x.id===pid;});if(!p)return;
  navAdm("addProduct");
  document.getElementById("formTitle").textContent="Modifier le plat";
  document.getElementById("editId").value=p.id;document.getElementById("pName").value=p.name;
  document.getElementById("pCat").value=p.category;document.getElementById("pDesc").value=p.description||"";
  document.getElementById("pAllerg").value=p.allergens||"";
  document.getElementById("pStock").value=p.stock;document.getElementById("pUnit").value=p.unit||"";
  editVars=(p.variants||[]).map(function(v){return{id:v.id,name:v.name,price:v.basePrice,photos:(v.photos||[]).slice()};});
  editQty=(p.qtyPricing||[]).map(function(q){return{min:q.min,max:q.max,price:q.price};});
  renderVars();renderQtyRows();
  setTimeout(function(){editVars.forEach(function(_,i){var b=document.getElementById("vbody-"+i);if(b){b.classList.add("open");var a=document.getElementById("varrow-"+i);if(a)a.style.transform="rotate(90deg)";}});},30);
}

// ====== INIT ======
loadState();
renderSteps();
renderCatFilter();
renderProducts();
renderPayCards();
updateWaLinks();
applyLang();
// Masquer le splash screen une fois tout charge
(function(){
  var sp=document.getElementById("splashScreen");
  if(!sp)return;
  sp.style.opacity="0";
  setTimeout(function(){sp.style.display="none";},450);
})();

// ====== CART ======
var cart = [];

function addToCart(pid, vi, qty, btnEl, fromModal) {
  var p = state.products.find(function(x){ return x.id === pid; });
  if (!p) return;
  var vi2 = vi || 0;
  var v = p.variants && p.variants[vi2];
  var price = getPrice(p, qty || 1, vi2);
  var varName = (p.variants && p.variants.length > 1 && v) ? v.name : "";
  var img = getMainImg(p, vi2);
  var key = pid + "_" + vi2;
  var existing = cart.find(function(c){ return c.key === key; });
  if (existing) {
    existing.qty += (qty || 1);
  } else {
    cart.push({ key: key, pid: pid, vid: vi2, name: p.name, varName: varName, qty: qty || 1, price: price, img: img, unit: p.unit || "portion" });
  }
  updateCartUI();
  if (btnEl) {
    btnEl.textContent = "✓ Ajouté !";
    btnEl.classList.add("added");
    setTimeout(function(){ btnEl.textContent = "+ Ajouter"; btnEl.classList.remove("added"); }, 1500);
  }
  if (fromModal) { closeModal(); showToast("Ajouté au panier ! 🛒"); }
  else { showToast(p.name + " ajouté au panier !"); }
}

function removeFromCart(key) {
  cart = cart.filter(function(c){ return c.key !== key; });
  updateCartUI();
  renderCartItems();
}

function updateCartQty(key, delta) {
  var item = cart.find(function(c){ return c.key === key; });
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  var p = state.products.find(function(x){ return x.id === item.pid; });
  if (p) item.price = getPrice(p, item.qty, item.vid);
  updateCartUI();
  renderCartItems();
}

function clearCart() {
  if (!confirm("Vider le panier ?")) return;
  cart = [];
  updateCartUI();
  renderCartItems();
}

function cartTotal() {
  return cart.reduce(function(sum, c){ return sum + c.price * c.qty; }, 0);
}

function cartCount() {
  return cart.reduce(function(sum, c){ return sum + c.qty; }, 0);
}

function updateCartUI() {
  var count = cartCount();
  var fab = document.getElementById("cartFab");
  var navBtn = document.getElementById("navCartBtn");
  if (fab) fab.classList.toggle("visible", count > 0);
  if (navBtn) navBtn.classList.toggle("visible", count > 0);
  var els = { fabCartCount: count, navCartCount: count };
  Object.keys(els).forEach(function(id){ var el = document.getElementById(id); if (el) el.textContent = els[id]; });
  var hdr = document.getElementById("cartHdrCount");
  if (hdr) hdr.textContent = count + (count > 1 ? " articles" : " article");
  var fab2 = document.getElementById("fabCartLabel");
  if (fab2) fab2.textContent = count > 0 ? count + " article" + (count > 1 ? "s" : "") + " · " + fmt(cartTotal()) + " FCFA" : "Panier";
  var footer = document.getElementById("cartFooter");
  if (footer) footer.style.display = count > 0 ? "block" : "none";
  var tv = document.getElementById("cartTotalVal");
  if (tv) tv.textContent = fmt(cartTotal()) + " FCFA";
}

function renderCartItems() {
  var el = document.getElementById("cartItemsList");
  if (!el) return;
  if (!cart.length) {
    el.innerHTML = '<div class="cart-empty"><div class="cart-empty-icon">🛒</div><p>Votre panier est vide<br/><span style="color:var(--gray);font-size:12px">Ajoutez des plats depuis le menu.</span></p></div>';
    return;
  }
  el.innerHTML = cart.map(function(item) {
    var imgH = item.img
      ? '<img src="' + item.img + '" alt="' + item.name + '" style="width:100%;height:100%;object-fit:cover"/>'
      : item.name.charAt(0);
    return '<div class="cart-item">' +
      '<div class="cart-item-img">' + imgH + '</div>' +
      '<div class="cart-item-info">' +
        '<div class="cart-item-name">' + item.name + '</div>' +
        '<div class="cart-item-variant">' + (item.varName ? item.varName + " · " : "") + fmt(item.price) + ' FCFA / ' + item.unit + '</div>' +
        '<div class="cart-item-row">' +
          '<div class="cart-qty-ctrl">' +
            '<button class="cart-qty-btn" onclick="updateCartQty(\'' + item.key + '\',-1)">&#8722;</button>' +
            '<div class="cart-qty-val">' + item.qty + '</div>' +
            '<button class="cart-qty-btn" onclick="updateCartQty(\'' + item.key + '\',1)">+</button>' +
          '</div>' +
          '<span class="cart-item-price">' + fmt(item.price * item.qty) + ' FCFA</span>' +
          '<button class="cart-item-del" onclick="removeFromCart(\'' + item.key + '\')" title="Retirer">&#10005;</button>' +
        '</div>' +
      '</div>' +
    '</div>';
  }).join("");
}

function openCart() {
  renderCartItems();
  updateCartUI();
  document.getElementById("cartOverlay").classList.add("open");
  document.getElementById("cartDrawer").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeCart() {
  document.getElementById("cartOverlay").classList.remove("open");
  document.getElementById("cartDrawer").classList.remove("open");
  document.body.style.overflow = "";
}

function buildCartMsg() {
  var lines = cart.map(function(item) {
    var vt = item.varName ? " (" + item.varName + ")" : "";
    return "\uD83C\uDF7D\uFE0F *" + item.name + "*" + vt + "\n   \uD83D\uDCE6 " + item.qty + " " + item.unit + "(s) \xD7 " + fmt(item.price) + " FCFA = *" + fmt(item.price * item.qty) + " FCFA*";
  }).join("\n\n");
  var total = fmt(cartTotal());
  var msg = "Bonjour Chef Adams \uD83C\uDF7D\uFE0F\n\nJe souhaite commander :\n\n" + lines + "\n\n\uD83D\uDCB5 *TOTAL : " + total + " FCFA*\n\nPouvez-vous confirmer la disponibilite et les details de livraison ? Merci !";
  return encodeURIComponent(msg);
}

function checkoutWA() {
  if (!cart.length) { showToast("Votre panier est vide", "err"); return; }
  window.open("https://wa.me/" + getFirstWaNum() + "?text=" + buildCartMsg(), "_blank");
}

function checkoutOrange() {
  if (!cart.length) { showToast("Votre panier est vide", "err"); return; }
  var lines = cart.map(function(item) {
    var vt = item.varName ? " (" + item.varName + ")" : "";
    return "\uD83C\uDF7D\uFE0F *" + item.name + "*" + vt + " \xD7 " + item.qty + " = *" + fmt(item.price * item.qty) + " FCFA*";
  }).join("\n");
  var msg = encodeURIComponent("Bonjour Chef Adams \uD83C\uDF7D\uFE0F\n\nJe souhaite payer via Orange Money :\n\n" + lines + "\n\n\uD83D\uDCB5 *TOTAL : " + fmt(cartTotal()) + " FCFA*\n\nVeuillez confirmer le num\xE9ro Orange Money. Merci !");
  window.open("https://wa.me/" + getFirstWaNum() + "?text=" + msg, "_blank");
}