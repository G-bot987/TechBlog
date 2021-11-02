const faker = require('faker');

const { BlogPost } = require('../models');

const BlogPostData = [...Array(10)].map(() => ({
  title: faker.name.jobType(),
  topic: faker.lorem.sentence(),
  description: faker.lorem.paragraph(),
  postOwnerId: faker.datatype.number ({ min: 1, max: 10 }),
  created_at: faker.date.between('2015-01-01', '2021-01-11'),
}));

const seedBlogPost = async () => {
  try {
    console.log('Seeding blog posts');
    await BlogPost.bulkCreate(BlogPostData);
    console.log('Seeded blog posts');
  } catch (error) {
    console.error('ERROR - seedBlogPost():', error);
  }
};

module.exports = seedBlogPost;
