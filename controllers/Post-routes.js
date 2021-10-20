const router = require('express').Router();
const { User, BlogPost } = require('../models');
const { Sequelize } = require("sequelize");

// router.get('/', async (req, res) => {
//   // We find all Post in the db and set the data equal to PostData
//   const PostData = await BlogPost.findAll().catch((err) => {
//     res.json(err);
//   });
//   // We use map() to iterate over PostData and then add .get({ plain: true }) each object to serialize it. 
//   const Posts = PostData.map((post) => post.get({ plain: true }));
//   console.log(Posts)
//   // We render the template, 'all', passing in Post, a new array of serialized objects.
//   res.render('all', { Posts });
// });

router.get('/', async (req, res) => {
  res.render('post');
});


module.exports = router;