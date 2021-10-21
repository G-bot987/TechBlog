const sequelize = require('../config/connection');
const seedUser = require('./UserData');
const seedBlogPost = require('./BlogPost');
const seedComments = require('./Comments');


const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();
  await seedBlogPost();
  await seedComments();


  process.exit(0);
};

seedAll();