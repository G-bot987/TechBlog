const faker = require('faker');

const { blogpost, BlogPost } = require('../models');

const BlogPostData = [...Array(1000)].map(() => ({
  title: faker.internet.userName(),
  topic: faker.internet.userName(),
  post: faker.internet.userName(),
  postOwnerId: 1,
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
