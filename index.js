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
  },
  {
    "id": 23,
    "itemNumber": "57360",
    "name": "Harry Potter pushing trolley",
    "series": "Harry Potter",
    "license": "Harry Potter",
    "price": 30.00,
    "promotion": false,
    "new": true,
    "description": "Harry Potter has his luggage on the trolley but he's not quite sure where to go from here. Help him find his way again by adding the Pop! Deluxe Harry Potter Pushing Trolley into your collection.",
    "height": 4,
    "picture1": "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dwf419b277/images/funko/57360-1.png?sw=800&sh=800",
    "picture2": "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dw5c5db3b9/images/funko/57360-2.png?sw=800&sh=800"
},
{
  "id": 24,
  "itemNumber": "70278",
  "name": "Hedwig with letter",
  "series": "Harry Potter",
  "license": "Harry Potter",
  "price": 15,
  "promotion": false,
  "new": false,
  "description": "Your Hogwarts letter has arrived, courtesy of your very own snowy owl! In addition to being intelligent and loyal, this exclusive Pop! Hedwig with Letter is the perfect pet for any budding wizard or witch. Spread the wingspan of your Wizarding World collection with this lovable messenger.",
  "height": 2.95,
  "picture1": "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dw1ba78a31/images/funko/upload/70278_HP_Hedwig%20with%20Letter_POP_GLAM-WEB.png?sw=800&sh=800",
  "picture2": "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dwb7e54c78/images/funko/upload/70278a_HP_Hedwig%20with%20Letter_POP_GLAM-1-WCLE-WEB.png?sw=800&sh=800"
},
{
  "id": 25,
  "itemNumber": "65654",
  "name": "Ron Weasley in flying car",
  "series": "Harry Potter",
  "license": "Harry Potter",
  "price": 30,
  "promotion": false,
  "new": true,
  "description": "Escape in a ride where all windows are sky-view. Hop into this Super Deluxe Pop! Ride with Ron Weasley™ at the wheel. The invisibility booster of the car might not be reliable, but Pop! Ron Weasley is delivering a daring rescue. Add Pop! Weasley in his Flying Car to your Harry Potter™ collection and celebrate the Harry Potter and The Chamber of Secrets movie. Create magical adventures by expanding your Wizarding World™ set.",
  "height": 4.46,
  "picture1": "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dwccb80993/images/funko/65654-1.png?sw=800&sh=800",
  "picture2": "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dw03d42af9/images/funko/65654-3.png?sw=800&sh=800"
},
{
  "id": 26,
  "itemNumber": "65653",
  "name": "Hermione Granger with mirror",
  "series": "Harry Potter",
  "license": "Harry Potter",
  "price": 12,
  "promotion": false,
  "new": true,
  "description": "Sneak around the corner to catch a glimpse of Pop! Hermione™, holding a mirror. What petrifying image might she see? Add Pop! Hermione to your Harry Potter™ collection and celebrate the Harry Potter and The Chamber of Secrets movie. Create magical adventures by expanding your Wizarding World™ set. Collect them all.",
  "height": 3.60,
  "picture1": "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dw31c36a17/images/funko/65653-1.png?sw=800&sh=800",
  "picture2": "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dw523efc64/images/funko/65653-2.png?sw=800&sh=800"
},
{
  "id": 27,
  "itemNumber": "65647",
  "name": "Neville Longbottom with honeydukes",
  "series": "Harry Potter",
  "license": "Harry Potter",
  "price": 30,
  "promotion": false,
  "new": false,
  "description": "Take a trip out of Hogwarts and visit Hogsmeade with the Pop! Deluxe Neville Longbottom with Honeydukes. Build Hogsmeade in your Wizarding World collection by completing the set!",
  "height": 6.55,
  "picture1": "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dw5e657876/images/funko/65647-1.png?sw=800&sh=800",
  "picture2": "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dw29f5efb0/images/funko/65647-3.png?sw=800&sh=800"
},
{
  "id": 28,
  "itemNumber": "65651",
  "name": "Gilderoy lockheart",
  "series": "Harry Potter",
  "license": "Harry Potter",
  "price": 12,
  "promotion": false,
  "new": false,
  "description": "Fame is magical for the Professor of Defence Against the Dark Arts™. Add Pop! Gilderoy Lockhart™ to your Harry Potter™ set. Celebrate the Harry Potter and The Chamber of Secrets movie by uniting him with his adoring fans. You might even have fun creating an impromptu book-signing, so he can tell of his encounters with dark creatures—and all of his accomplishments. Create magical adventures by expanding your Wizarding World™ set.",
  "height": 3.92,
  "picture1": "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dw1f0a2245/images/funko/65651-1.png?sw=800&sh=800",
  "picture2": "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dw1d4da459/images/funko/65651-2.png?sw=800&sh=800"
},
{
  "id": 29,
  "itemNumber": "65650",
  "name": "Dobby with diary",
  "series": "Harry Potter",
  "license": "Harry Potter",
  "price": 12,
  "promotion": false,
  "new": false,
  "description": "He's finally free! Welcome home one of the most well-known and lovable house-elves of the Wizarding World with this Pop! Dobby holding the diary with its hidden sock! Wave a wand and celebrate the 20th anniversary of the Harry Potter and The Chamber of Secrets movie. Cast a spell and create magical adventures by expanding your Wizarding World set. Collect them all.",
  "height": 3.53,
  "picture1": "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dw0f3d7fb3/images/funko/65650-1.png?sw=800&sh=800",
  "picture2": "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dw4cb73927/images/funko/65650-3.png?sw=800&sh=800"
},
{
  "id": 30,
  "itemNumber": "6572",
  "name": "Luno Lovegood",
  "series": "Harry Potter",
  "license": "Harry Potter",
  "price": 12,
  "promotion": false,
  "new": false,
  "description": "Luna's eccentric style, character, and habits lead her to stand out from her fellow Ravenclaws. Often called 'Loony Lovegood' by bullies, Luna pays little attention to their taunts. Even in her school robes she finds a way to stand out, like wearing radish earrings. Though people don't believe her as often as they should, she is exceptionally intelligent and goes on to prove that just because something has not been discovered yet it doesn't mean it doesn't exist. Invite Pop! Luna Lovegood into your Harry Potter collection to help Harry Potter defeat the Dark Lord once and for all.",
  "height": 3.75,
  "picture1": "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dw947c0bf0/images/funko/6572-1.png?sw=800&sh=800",
  "picture2": "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dwcdacee91/images/funko/6572-2.png?sw=800&sh=800"
},
{
  "id": 31,
  "itemNumber": "5891",
  "name": "Albus Dumbledore with wand",
  "series": "Harry Potter",
  "license": "Harry Potter",
  "price": 12,
  "promotion": false,
  "new": false,
  "description": "Albus Dumbledore is one of the most powerful wizards in the world and he is also the headmaster of Hogwarts. He has a track record of cancelling final exams and fights to protect all against dark witches and wizards who seek to harm others and oppress muggles. Add Pop! Albus Dumbledore to your Harry Potter collection.",
  "height": 4,
  "picture1": "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dw32d322e3/images/funko/5891-1.png?sw=800&sh=800",
  "picture2": "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dw317e8782/images/funko/5891-2.png?sw=800&sh=800"
},
{
  "id": 32,
  "itemNumber": "6570",
  "name": "Sirius Black",
  "series": "Harry Potter",
  "license": "Harry Potter",
  "price": 12,
  "promotion": false,
  "new": false,
  "description": "Sirius Black was imprisoned in Azkaban on false murder charges but escaped to find Harry Potter. He is a character whose courage, penchant for mischief, and animagus form are unforgettable and essential to helping Harry Potter learn more about his parents and himself. Every Padfoot fan will need this Pop! of Sirius Black for their collection.",
  "height": 3.75,
  "picture1": "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dwd067f71b/images/funko/6570-1.png?sw=800&sh=800",
  "picture2": "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dwf5546702/images/funko/6570-2.png?sw=800&sh=800"
},
{
  "id": 33,
  "itemNumber": "5862",
  "name": "Severus Snape",
  "series": "Harry Potter",
  "license": "Harry Potter",
  "price": 12,
  "promotion": false,
  "new": false,
  "description": "Professor Snape has been teaching Potions at Hogwarts School of Witchcraft and Wizardry for years. Everyone knows that he really wants to teach Defense Against the Dark Arts though. Complete your Harry Potter Wizarding World collection with Pop! Severus Snape.",
  "height": 4.5,
  "picture1": "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dw91382134/images/funko/5862-1.png?sw=800&sh=800",
  "picture2": "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dwf5ea57a5/images/funko/5862-2.png?sw=800&sh=800"
},
{
  "id": 34,
  "itemNumber": "43263",
  "name": "Pikachu",
  "series": "Pokemon",
  "license": "Pokemon",
  "price": 12,
  "promotion": false,
  "new": false,
  "description": "Your dream of becoming a Trainer is not out of reach! Pikachu is waving to you. Catch this Pop! of Pikachu to add to your Pokémon collection.",
  "height": 3.75,
  "picture1": "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dw8de08a6d/images/funko/43263-1.png?sw=800&sh=800",
  "picture2": "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dwaf0cf328/images/funko/43263-2.png?sw=800&sh=800"
},
{
  "id": 35,
  "itemNumber": "50544",
  "name": "Eevee",
  "series": "Pokemon",
  "license": "Pokemon",
  "price": 12,
  "promotion": false,
  "new": false,
  "description": "Your dream of becoming a Trainer is not out of reach! Catch this Pop! Eevee to add to your Pokémon collection.",
  "height": 3.5,
  "picture1": "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dw5b06710c/images/funko/50544-1.png?sw=800&sh=800",
  "picture2": "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dwe5d72880/images/funko/50544-2.png?sw=800&sh=800"
},
{
  "id": 36,
  "itemNumber": "55229",
  "name": "Meowth",
  "series": "Pokemon",
  "license": "Pokemon",
  "price": 12,
  "promotion": false,
  "new": false,
  "description": "Your dream of becoming a Trainer is not out of reach! Catch this Pop! Meowth to add to your Pokémon collection. ",
  "height": 3.25,
  "picture1": "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dw0b874fad/images/funko/55229-1.png?sw=800&sh=800",
  "picture2": "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dwdd4789c9/images/funko/55229-2.png?sw=800&sh=800"
},
{
  "id": 37,
  "itemNumber": "46864",
  "name": "Mewtwo",
  "series": "Pokemon",
  "license": "Pokemon",
  "price": 12,
  "promotion": false,
  "new": false,
  "description": "Your dream of becoming a Trainer is not out of reach! Catch this Pop! of Mewtwo to add to your Pokémon collection.",
  "height":3.75,
  "picture1": "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dwb407c1c3/images/funko/46864-1.png?sw=800&sh=800",
  "picture2": "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dwa0518a8b/images/funko/46864-2.png?sw=800&sh=800"
},
{
  "id": 38,
  "itemNumber": "48400",
  "name": "Growlithe",
  "series": "Pokemon",
  "license": "Pokemon",
  "price": 12,
  "promotion": false,
  "new": false,
  "description": "Your dream of becoming a Trainer is not out of reach! Catch this Pop! of Growlithe to add to your Pokémon collection.",
  "height": 3.75,
  "picture1": "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dwef868872/images/funko/48400-1.png?sw=800&sh=800",
  "picture2": "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dw7ff65d43/images/funko/48400-2.png?sw=800&sh=800"
},
{
  "id": 39,
  "itemNumber": "55230",
  "name": "Psyduck",
  "series": "Pokemon",
  "license": "Pokemon",
  "price": 12,
  "promotion": false,
  "new": false,
  "description": "Your dream of becoming a Trainer is not out of reach! Catch this Pop! Psyduck to add to your Pokémon collection.",
  "height": 3.5,
  "picture1": "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dw71f2cf11/images/funko/55230-1.png?sw=800&sh=800",
  "picture2": "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dw453c1a3d/images/funko/55230-2.png?sw=800&sh=800"
},
{
  "id": 40,
  "itemNumber": "62271",
  "name": "Scorebunny",
  "series": "Pokemon",
  "license": "Pokemon",
  "price": 12,
  "promotion": false,
  "new": true,
  "description": "Your dream of becoming a Trainer is not out of reach! Catch this Pop! Scorbunny to add to your Pokémon collection. ",
  "height": 4.15,
  "picture1": "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dw56efa23a/images/funko/upload/62271_Pokemon_Scorbunny_POP_GLAM-WEB.png?sw=800&sh=800",
  "picture2": "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dw86745496/images/funko/upload/62271_Pokemon_Scorbunny_POP_GLAM-1-WEB.png?sw=800&sh=800"
},
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