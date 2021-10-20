// import sequelize connection
const express = require('express');
const routes = require('./routes');
// Import express-handlebars
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;
const sequelize = require('./config/connection');
const seedBlogPost = require('./seeds/BlogPost');
const seedUsers = require('./seeds/UserData');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// The following two lines of code are setting Handlebars.js as the default template engine.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));
// app.use('/api/post', require('./controllers/Post-routes'));

app.get('/api/post', (req, res) => {
  res.send('hello world');
})

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: true }).then(async () => {
  try {
    await seedUsers();
    await seedBlogPost();
  
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