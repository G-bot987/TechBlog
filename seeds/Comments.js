const faker = require('faker');

const { Comments } = require('../models');

const CommentsData = [...Array(10)].map(() => ({
    commentbody: faker.lorem.sentence(),
    commentOwnerId: faker.datatype.number({ min: 1, max: 10 }),
    commentedPost: faker.datatype.number({ min: 1, max: 10 }),
}));

const seedComments = async () => {
    try {
        console.log('Seeding comments');
        await Comments.bulkCreate(CommentsData);
        console.log('Seeded comments');
    } catch (error) {
        console.error('ERROR - seedcomments():', error);
    }
};

module.exports = seedComments;