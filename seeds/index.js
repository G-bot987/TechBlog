const sequelize = require('../config/connection');
const seedUser = require('./UserData');
const seedBlogPost = require('./BlogPost');


const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();
  await seedBlogPost();


  process.exit(0);
};

seedAll();