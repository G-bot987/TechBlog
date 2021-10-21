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



// const UserData = [
//     {
//         name: 'Atestuser',
//         email: 'Atestuser@test.com',
//         password: 'test1234',
//       },
//       {
//         name: 'Asecondtestuser',
//         email: 'Asecondtestuser@test.com',
//         password: 'test1234',
//       },
//       {
//         name: 'Athirdtestuser',
//         email: 'Athirdtestuser@test.com',
//         password: 'test1234',
//       },
// ];
// const seedUsers = async () => {
//   try {
//     await User.bulkCreate(UserData)
//   } catch (error) {
//     console.error('ERROR - seedUsers():', error);
//     throw error;
//   }
// };
// // const seedUser = () => User.bulkCreate(UserData, {
// // individualHooks: true,
// // returning: true
// // });

module.exports = seedUsers;