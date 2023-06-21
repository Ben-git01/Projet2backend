const express = require("express");
const cors = require("cors")
const app = express();
// REGLAGE DU PORT
const port = 4242;

app.use(cors(

))

const figurines = 
[
  {
      "id": 1,
      "itemNumber": "69060",
      "name": "Iron Man",
      "series": "Iron Man",
      "license": "Marvel",
      "price": 15.00, 
      "promotion": false,
      "new": true,
      "description": "Suit up with Pop! Iron Man! When the world's most evil villains attack, call on Earth's Mightiest Heroes™ to save the day. Double your superhero power with an exclusive Pop! Iron Man and Pop! Pin Iron Man combination. These collectibles are a part of the Marvel Avengers Beyond Earth's Mightiest 60th Anniversary Collection. Boost your Marvel set with this genius Pop! and Pop! Pin combination.",
      "height": 5.27, 
      "picture1": "https://cdn.shopify.com/s/files/1/0433/1952/5529/products/69060_POPMarvel_A60_Comic_IronMan_GLAM-WEB_600x.png?v=1668780983",
      "picture2": "https://cdn.shopify.com/s/files/1/0433/1952/5529/products/69060_POPMarvel_A60_Comic_IronMan_GLAM-1-WEB_aeef03c9-3ebf-4080-a8f7-8e4d6150f55d_600x.png?v=1676460939"
  },
  {
      "id": 2,
      "itemNumber": "67610",
      "name": "Spider-Man",
      "series": "Spider-Man",
      "license": "Marvel",
      "price": 15.00,
      "promotion": false,
      "new": false,
      "description": "Pop! Spider-Man is swinging into your Spider-Man: No Way Home collection in this red and metallic blue suit. Help Peter Parker face this challenge by incorporating him into your Marvel set. ",
      "height": 4.1,
      "picture1": "https://cdn.shopify.com/s/files/1/0433/1952/5529/products/67610_POPMarvel_SMNWH_SpiderMan_FinaleSuit_GLAM-WEB_600x.png?v=1669133896",
      "picture2": "https://cdn.shopify.com/s/files/1/0433/1952/5529/products/67610_POPMarvel_SMNWH_SpiderMan_FinaleSuit_GLAM-1-WEB_600x.png?v=1669133896"
  },
  {
      "id": 3,
      "itemNumber": "7223",
      "name": "Captain America",
      "series": "Captain America",
      "license": "Marvel",
      "price": 12.00,
      "promotion": false,
      "new": false,
      "description": "Celebrate your Marvel fandom with a Pop! of the classic character, Captain America! Complete your Captain America Civil War collection with Pop! Captain America. ",
      "height": 3.75,
      "picture1": "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dw279f9e11/images/funko/7223-1.png?sw=800&sh=800",
      "picture2": "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dw50b97b30/images/funko/7223-2.png?sw=800&sh=800"
  },
  {
      "id": 4,
      "itemNumber": "45634",
      "name": "Hulk",
      "series": "Hulk",
      "license": "Marvel",
      "price": 35.00,
      "promotion": false,
      "new": true,
      "description": "The Marvel Avengers Assemble series is a brand-new, Amazon-exclusive initiative from Funko. The Funko Pop! Deluxe Avengers assemble series will feature 6 new, unique collectibles, continuing with The Incredible Hulk. This series will capture the iconic moment from the first Avengers movie, where the team circles up, and assembles for the first time.",
      "height": 12,
      "picture1": "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dw06346cc6/images/funko/45634-1.png?sw=800&sh=800",
      "picture2": "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dw1e7f7a6a/images/funko/45634-2.png?sw=800&sh=800"
  },
  {
      "id": 5,
      "itemNumber": "68725",
      "name": "Jumbo Groot",
      "series": "Guardians of the Galaxy",
      "license": "Marvel",
      "price": 40.00,
      "promotion": false,
      "new": true,
      "description": "Take off on a galactic adventure with this exclusive, Jumbo Pop! Groot on his next mission with his family of misfits. Complete your Guardians of the Galaxy: Volume 3 collection with this Flora Colossus hero. Groot has done a lot of growing up and is ready to uproot any threats in his way.",
      "height": 10.45,
      "picture1": "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dw033cf7e2/images/funko/68725-2_C.png?sw=800&sh=800",
      "picture2": "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dw18276366/images/funko/68725-1_C.png?sw=800&sh=800"
  },
  {
      "id": 6,
      "itemNumber": "13704-PX-1TF",
      "name": "Superman Crouching",
      "series": "Justice League",
      "license": "DC",
      "price": 12.00,
      "promotion": false,
      "new": false,
      "description": "Superman has joined the Justice League to aid in the fight to save the world. Help Pop! Superman rejoin the super heroes in your Justice League collection.",
      "height": 3.75,
      "picture1": "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dwc46d49aa/images/funko/13704-PX-1TF-1.png?sw=800&sh=800",
      "picture2": "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dw018b5e40/images/funko/13704-PX-1TF-2.png?sw=800&sh=800"
  },
  {
      "id": 7,
      "itemNumber": "71863",
      "name": "Indiana Jones",
      "series":  "Indiana Jones",
      "license":  "Indiana Jones",
      "price": 15.00,
      "promotion": false,
      "new": false,
      "description": "Dr. Jones is on a mission to prevent historical treasures from falling into the wrong hands. Help this legendary archaeologist recover the Sankara Stones by joining Pop! Indiana Jones™ on his next expedition.",
      "height": 4.6,
      "picture1": "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dwfc52fe55/images/funko/upload/71863_IJ2_IndianaWithWhip_POP_GLAM-WEB.png?sw=800&sh=800",
      "picture2": "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dw08f67b2d/images/funko/upload/71863_IJ2_IndianaWithWhip_POP_GLAM-1-HT-WEB.png?sw=800&sh=800"
  },
  {
      "id": 8,
      "itemNumber": "29325",
      "name": "Hades",
      "series": "Hercules",
      "license": "Disney",
      "price": 12.00,
      "promotion": false,
      "new": false,
      "description": "Hades is ready to take the next step in his plan to get back at his brother Zeus by making a devilish deal with young Hercules. Add Pop! Hades to complete your Disney Hercules collection.",
      "height": 5.5,
      "picture1": "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dwde4426dd/images/funko/upload/29325_Disney_Hercules_Hedes_POP_GLAM-WEB.png?sw=800&sh=800",
      "picture2": "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dw60511216/images/funko/upload/29325_Disney_Hercules_Hedes_POP_GLAM-1-WEB.png?sw=800&sh=800"
  },
  {
      "id": 9,
      "itemNumber": "71519",
      "name": "Kastuki Bakugo",
      "series": "My Hero Academia",
      "license": "My Hero Academia",
      "price": 15.00,
      "promotion": false,
      "new": false,
      "description": "Aiming to be a Pro Hero, Katsuki Bakugo will need to persevere through his U.A. High School training to prove that he's hero material. Help this exclusive Pop! Katsuki Bakugo find the right mentor in your My Hero Academia collection.",
      "height": 4.85,
      "picture1": "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dw89132c53/images/funko/upload/71519_MHA_KatsukiBakugoTraining_POP_GLAM-WEB.png?sw=800&sh=800",
      "picture2": "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dw77133f1e/images/funko/upload/71519_MHA_KatsukiBakugoTraining_POP_GLAM-1-BL-WEB.png?sw=800&sh=800"
  },
  {
      "id": 10,
      "itemNumber": "49010",
      "name": "Kamado Tanjiro",
      "series": "Demon Slayer",
      "license": "Demon Slayer",
      "price": 12.00,
      "promotion": false,
      "new": false,
      "description": "Only two of the Kamado family survived a demon attack, and now Tanjiro and Nezuko are out for revenge. Expand your Demon Slayer collection with Pop! Tanjiro Kamado.",
      "height": 4.25,
      "picture1": "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dw65414352/images/funko/49010-1.png?sw=800&sh=800",
      "picture2": "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dwff9cfdc7/images/funko/49010-2.png?sw=800&sh=800"
  },
  {
      "id": 11,
      "itemNumber": "12784-PX-1RY",
      "name": "Star-Lord",
      "series": "Guardians of the Galaxy",
      "license": "Marvel",
      "price": 12.00,
      "promotion": false,
      "new": false,
      "description": "Your Marvel collection is about to go on a galactic adventure with the arrival of Pop! Star-Lord.",
      "height": 4,
      "picture1": "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dwd49e3673/images/funko/12784-PX-1RY-1.png?sw=800&sh=800",
      "picture2": "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dw5185f960/images/funko/12784-PX-1RY-2.png?sw=800&sh=800"
  },
  {
      "id": 12,
      "itemNumber": "7229",
      "name": "Black panther",
      "series": "Black panther",
      "license": "Marvel",
      "price": 12.00,
      "promotion": false,
      "new": false,
      "description": "Long live the King! Give your Pop! Marvel collection the royal treatment with a stylized vinyl bobblehead of Black Panther, based on his appearance in Captain America: Civil War!",
      "height": 3.75,
      "picture1": "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dwfa3cea08/images/funko/7229-1.png?sw=800&sh=800",
      "picture2": "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dw07f4e657/images/funko/7229-2.png?sw=800&sh=800"
  },
  {
      "id": 13,
      "itemNumber": "4780",
      "name": "Thor",
      "series": "Thor",
      "license": "Marvel",
      "price": 12.00,
      "promotion": false,
      "new": false,
      "description": "The Asgardian god of thunder, Thor Odinson, flies into your Marvel collection to defend against invading evil. Dressed in his classic armor, hair down, and Mjolnir in his hand, Pop!",
      "height": 4.15,
      "picture1": "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dw1077c464/images/funko/4780-1.png?sw=800&sh=800",
      "picture2": "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dw2c93d55f/images/funko/4780-2.png?sw=800&sh=800"
  },
  {
      "id": 14,
      "itemNumber": "2277",
      "name": "Wolverine",
      "series": "X-men",
      "license": "Marvel",
      "price": 12.00,
      "promotion": false,
      "new": false,
      "description": "Collect a Marvel classic with this Pop! Wolverine in his original, Funko power pose! ",
      "height": 3.75,
      "picture1": "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dw14a4e376/images/funko/2277-1.png?sw=800&sh=800",
      "picture2": "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dwd71bb71e/images/funko/2277-2.png?sw=800&sh=800"
  },
  {
      "id": 15,
      "itemNumber": "47705",
      "name": "Le Sphinx",
      "series": "Batman",
      "license": "DC",
      "price":12.00,
      "promotion": false,
      "new": false,
      "description": "He has a genius-level IQ, but he still leaves clues of his crimes to taunt Batman. Collect this Pop! of The Riddler for your Batman Forever collection. It'll make it much easier for Batman to him track down.",
      "height": 3.75,
      "picture1": "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dw1330e255/images/funko/47705-1.png?sw=800&sh=800",
      "picture2": "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dwe397a721/images/funko/47705-2.png?sw=800&sh=800"
  },
  {
      "id": 16,
      "itemNumber": "12545-PX-1RE",
      "name": "Wonder Woman",
      "series": "Wonder Woman",
      "license": "DC",
      "price": 12.00,
      "promotion": false,
      "new": false,
      "description": "Diana heard about the war raging around the world and left her homeland to put her Amazonian™ warrior training to the test. Collect Pop! Wonder Woman™ to lead the frontlines of your DC Wonder Woman collection.",
      "height": 3.75,
      "picture1": "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dw73b59569/images/funko/12545-PX-1RE-1.png?sw=800&sh=800",
      "picture2": "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dw87e3c0bd/images/funko/12545-PX-1RE-2.png?sw=800&sh=800"
  },
  {
      "id": 17,
      "itemNumber": "11496-PX-1MA",
      "name": "Batman",
      "series": "Batman",
      "license": "DC",
      "price": 12.00,
      "promotion": false,
      "new": false,
      "description": "Celebrate one of DC’s most recognizable super heroes, Batman™. Collect this classic Batman Pop! for your DC collection.",
      "height": 3.75,
      "picture1": "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dwef747fbc/images/funko/11496-PX-1MA-1.png?sw=800&sh=800",
      "picture2": "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dw41bb6e49/images/funko/11496-PX-1MA-2.png?sw=800&sh=800"
  },
  {
      "id": 18,
      "itemNumber": "8401",
      "name": "Harley Quinn",
      "series": "Suicide Squad",
      "license": "DC",
      "price": 12.00,
      "promotion": false,
      "new": false,
      "description": "Pop! Harley Quinn™ is unleashed and looking for her Joker in your Suicide Squad collection.",
      "height": 3.75,
      "picture1": "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dwff50e1a4/images/funko/8401-1.png?sw=800&sh=800",
      "picture2": "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dwc61e53a5/images/funko/8401-2.png?sw=800&sh=800"
  },
  {
      "id": 19,
      "itemNumber": "36672",
      "name": "Thanos",
      "series": "Avengers",
      "license": "Marvel",
      "price": 12.00,
      "promotio": false,
      "new": false,
      "description": "You won't need time travel to relive the gripping Endgame battle. Collect this Marvel Endgame Pop! Thanos.",
      "height": 3.75,
      "picture1": "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dw572ce958/images/funko/36672-1.png?sw=800&sh=800",
      "picture2": "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dwfc763cf2/images/funko/36672-2.png?sw=800&sh=800"
  },
  {
      "id": 20,
      "itemNumber": "14748-PX-1VW",
      "name": "Chewbacca with Porg",
      "series": "Star-Wars",
      "license": "Star-Wars",
      "price": 12.00,
      "promotion": false,
      "new": false,
      "description": "Celebrate the most stellar fandom of them all with the Star Wars™ The Last Jedi™ Pop! Chewbacca with Porg.",
      "height": 5,
      "picture1": "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dwed96619c/images/funko/14748-PX-1VW-1.png?sw=800&sh=800",
      "picture2": "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dwcb05d846/images/funko/14748-PX-1VW-2.png?sw=800&sh=800"
  },
  {
      "id": 21,
      "itemNumber": "20146",
      "name": "Sonic with ring",
      "series": "Sonic the hedgehog",
      "license":  "Sonic the hedgehog",
      "price": 12.00,
      "promotion": false,
      "new": false,
      "description": "Pop! Sonic is one step, or rather one ring, closer to defeating Doctor Eggman in your Sonic the Hedgehog collection.",
      "height": 3.75,
      "picture1": "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dwc4eaa120/images/funko/20146-1.png?sw=800&sh=800",
      "picture2": "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dw7e253f38/images/funko/20146-2.png?sw=800&sh=800"
  },
  {
      "id": 22,
      "itemNumber": "51102",
      "name": "Master chief",
      "series": "Halo Infinite",
      "license": "Halo",
      "price": 12.00,
      "promotion": false,
      "new": false,
      "description": "John-117, also known by his rank as Master Chief, is a Spartan-II super soldier serving under the United Nations Space Command. Add Pop! Master Chief (with MA40 Assault Rifle) to lead the charge against the Covenant Empire in your Halo Infinite collection.",
      "height": 4,
      "picture1": "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dw2b791292/images/funko/51102-1.png?sw=800&sh=800",
      "picture2": "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dw18110e5c/images/funko/51102-2.png?sw=800&sh=800"
  }
]

app.get('/', (req, res) => {
    
    res.send("Yo le back");
  });

//  ROUTE POUR TOUTES LES POPS

app.get('/figurines', (req, res) => {
    
    res.json(figurines);
  });

//  ROUTE POUR CHAQUE POP EN UTILISANT L'ID  

  app.get('/figurines/:id', (req, res) => {
    const id = req.params.id;
    // Recherchez l'objet correspondant à l'ID dans votre tableau de figurines
    const figurine = figurines.find(fig => fig.id === parseInt(id));
    
    if (figurine) {
      res.json(figurine);
    } else {
      res.status(404).json({ message: 'Figurine non trouvée' });
    }
  });

app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});