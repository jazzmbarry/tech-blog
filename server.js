const express = require("express");
const path = require("path");

const session = require("express-session");
const controller = require('./controllers');

const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const chalk = require("chalk");

const exphbs = require("express-handlebars");
const helpers = require("./utils/helpers");

const sess = {
    secret: "This is a thing for the thing",
    cookie: {maxAge: null},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize,
    }),
  };

  const hbs = exphbs.create({ helpers });

const app = express();
const PORT = process.env.PORT || 3005;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(session(sess));

app.use(controller);

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

sequelize.sync({ force: false }).then(() => {
  process.on("unhandledRejection", (e) => { throw e });
  app.listen(PORT, () => console.log(chalk.blue("Now listening!")));
});
