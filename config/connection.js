// create connection to our database
// import the Sequelize constructor from the library
const Sequelize = require('sequelize');
// import Dotenv for loading env variables
require('dotenv').config();

const sequelize = process.env.JAWSDB_URL
? new Sequelize(process.env.JAWSDB_URL)
: new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: "localhost",
    dialect: "mysql",
    dialectOtions: {
        decimalNumbers: true,
    },
});

module.exports = sequelize;