const faker = require('faker');

const { User } = require('../models');

const UserData = [...Array(10)].map(() => ({
  name: faker.name.findName(),
  email: faker.internet.exampleEmail(),
  password: faker.internet.password(),
 
}));

const seedUsers = async () => {
  try {
    console.log('Seeding Users');
    await User.bulkCreate(UserData);
    console.log('Seeded Users');
  } catch (error) {
    console.error('ERROR - seedUsers():', error);
  }
};


module.exports = seedUsers;