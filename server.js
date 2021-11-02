// import sequelize connection
const express = require('express');
// Import express-handlebars
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const path = require('path');
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;
const sequelize = require('./config/connection');
const seedBlogPost = require('./seeds/BlogPost');
const seedUsers = require('./seeds/UserData');
const seedComments = require('./seeds/Comments')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const sess = {
  secret: "supermegatechblogsecret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};
app.use(session(sess));

// The following two lines of code are setting Handlebars.js as the default template engine.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));
// app.use('/api/post', require('./controllers/Post-routes'));

// app.get('/api/post', (req, res) => {
  //   res.send('hello world');
  // })
  const routes = require('./routes');
  app.use(routes);
  
  // sync sequelize models to the database, then turn on the server
  sequelize.sync({ force: true }).then(async () => {
    try {
      await seedUsers();
      await seedBlogPost();
      await seedComments();
      
      app.listen(PORT, () => console.log('Now listening'));
    } catch (error) {
      console.error('ERROR - init():', error);
      process.exit(1);
    }
});

// // turn on connection to db and server
// sequelize.sync({ force: false }).then(() => {
//     app.listen(PORT, () => console.log('Now listening'));
//   });