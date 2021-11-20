const { User , Post } = require('../models');

const userdata = [
  {
    email: 'nwestnedge0@cbc.ca',
    username: "nwest",
    password: 'password123'
  },
  {
    email: 'rmebes1@sogou.com',
    username: "rmeb" ,
    password: 'password123'
  },
  {
    email: 'cstoneman2@last.fm',
    username: "csto" ,
    password: 'password123'
  },
  {
    email: 'ihellier3@goo.ne.jp',
    username: "ihel" ,
    password: 'password123'
  },
  {
    email: 'gmidgley4@weather.com',
    username: "gmid" ,
    password: 'password123'
  },
  {
    email: 'larnout5@imdb.com',
    username: "larn" ,
    password: 'password123'
  },
  {
    email: 'hnapleton6@feedburner.com',
    username: "hnap" ,
    password: 'password123'
  },
  {
    email: 'kperigo7@china.com.cn',
    username: "kper" ,
    password: 'password123'
  },
  {
    email: 'lmongain8@google.ru',
    username: "lmon" ,
    password: 'password123'
  },
  {
    email: 'bsteen9@epa.gov',
    username: "bste" ,
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
