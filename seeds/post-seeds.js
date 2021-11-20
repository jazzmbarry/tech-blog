const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    body: "I'm baby 8-bit VHS glossier, lyft man bun four dollar toast tousled mumblecore bespoke chartreuse church-key lo-fi fam. Gochujang mixtape waistcoat, glossier brunch VHS franzen.",
    user_id: 10,
    username: "bste",
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    body: 'Authentic green juice put a bird on it drinking vinegar letterpress lumbersexual disrupt heirloom wolf offal mustache typewriter normcore fam. Messenger bag truffaut drinking.',
    user_id: 8,
    username: "kper",
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    body: 'Lumbersexual vice messenger bag, cardigan slow-carb pour-over subway tile glossier fanny pack mumblecore. Vape green juice flannel sartorial. Tofu shabby chic aesthetic kinfolk.',
    user_id: 1,
    username: "nwest",
  },
  {
    title: 'Nunc purus.',
    body: "Green juice ugh pug woke lumbersexual plaid gentrify, affogato mustache VHS farm-to-table. Truffaut organic air plant, health goth chia twee cloud bread wolf tacos.",
    user_id: 4,
    username: "ihel",
  },
  {
    title: 'Pellentesque eget nunc.',
    body: "IPhone snackwave shabby chic, chambray slow-carb meditation gentrify twee celiac helvetica. Air plant wolf yuccie tilde literally. Kitsch cray vegan microdosing air plant freegan ramps chillwave lyft. Glossier gastropub XOXO.",
    user_id: 7,
    username: "hnap",
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    body: 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger.',
    user_id: 4,
    username: "ihel",
  },
  {
    title: 'In hac habitasse platea dictumst.',
    body: 'Cum horribilem walking dead resurgere de crazed sepulcris creaturis, zombie sicut de grave feeding iride et serpens. Pestilentia, shaun ofthe dead scythe animated corpses ipsa.',
    user_id: 1,
    username: "nwest",
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    body: 'Lucio fulci tremor est dark vivos magna. Expansis creepy arm yof darkness ulnis witchcraft missing carnem armis Kirkman Moore and Adlard caeruleum in locis?',
    user_id: 1,
    username: "nwest",
  },
  {
    title: 'Duis ac nibh.',
    body: 'In Craven omni memoria patriae zombieland clairvius narcisse religionis sunt diri undead historiarum. Golums, zombies unrelenting et Raimi fascinati beheading. Maleficia!',
    user_id: 9,
    username: "lmon",
  },
  {
    title: 'Curabitur at ipsum ac tellus semper interdum.',
    body: 'Whyt zomby Ut fames after death cerebro virus enim carnis grusome, viscera et organa viventium. Sicut spargit virus ad impetum, qui supersumus flesh eating. Avium, brains guts.',
    user_id: 5,
    username: "gmid",
  },
  {
    title: 'In hac habitasse platea dictumst.',
    body: 'Bacon ipsum dolor amet prosciutto ribeye brisket ground round alcatra pork loin. Pork chop tenderloin frankfurter, ham hock pork belly meatball short loin. Shoulder pork pork.',
    user_id: 3,
    username: "csto",
  },
  {
    title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    body: 'Spare ribs fatback strip steak buffalo, porchetta chuck drumstick shoulder sausage ham tongue andouille meatball. Turducken cow jowl fatback pastrami, beef burgdoggen ham hock.',
    user_id: 10,
    username: "bste",
  },
  {
    title: 'Donec dapibus.',
    body: 'Sirloin prosciutto kielbasa ham hock capicola bresaola landjaeger kevin. Jerky salami cow kielbasa tri-tip porchetta. Pastrami biltong chuck meatloaf kielbasa buffalo andouille.',
    user_id: 8,
    username: "kper",
  },
  {
    title: 'Nulla tellus.',
    body: 'T-bone pork loin filet mignon kevin prosciutto swine tri-tip burgdoggen cow turkey doner tongue. Hamburger biltong cow pancetta. Bacon jowl salami, sausage pork loin strip steak.',
    user_id: 3,
    username: "csto",
  },
  {
    title: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    body: 'Doner brisket bacon tongue. Bresaola chislic landjaeger flank ribeye pancetta. Burgdoggen venison ribeye, pork belly picanha chislic meatball pork chop tongue corned beef ball tip.',
    user_id: 3,
    username: "csto",
  },
  {
    title:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    body: 'Apple pie marshmallow gummies cupcake liquorice. Brownie pudding cake jelly wafer tiramisu bear claw donut. Wafer cake fruitcake chupa chups chocolate liquorice cake dessert tart.',
    user_id: 7,
    username: "hnap",
  },
  {
    title: 'In hac habitasse platea dictumst.',
    body: 'Bonbon topping soufflé chupa chups cotton candy sweet roll cake sweet roll jelly. Topping jelly marshmallow gingerbread lemon drops icing cotton candy. Caramels tiramisu oat.',
    user_id: 6,
    username: "larn",
  },
  {
    title: 'Etiam justo.',
    body: 'Chupa chups bonbon chupa chups oat cake tart pie. Sweet candy marzipan croissant lollipop. Icing carrot cake croissant lemon drops danish jelly. Cookie lollipop jelly-o soufflé marshmallow cupcake sugar plum danish danish.',
    user_id: 4,
    username: "ihel",
  },
  {
    title: 'Nulla ut erat id mauris vulputate elementum.',
    body: 'Sweet carrot cake candy canes donut cotton candy gummies. Apple pie cookie toffee bear claw candy topping apple pie cupcake. Halvah sesame snaps dessert jelly beans jelly fruitcake tart.',
    user_id: 6,
    username: "larn",
  },
  {
    title: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    body: 'Sweet macaroon gingerbread fruitcake ice cream. Muffin gummies biscuit candy canes gingerbread. Sweet marzipan donut tootsie roll sweet dessert chocolate jujubes.',
    user_id: 7,
    username: "hnap",
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
