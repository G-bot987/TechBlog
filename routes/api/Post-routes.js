const router = require('express').Router();
const { BlogPost, User } = require('../../models');

router.get('/', async (req, res) => {
  // find all BlogPost
  // be sure to include its associated User

  try {
    const posts = await BlogPost.findAll({
      include: [{ model: User }],
    });
    res.render('post', { posts: JSON.parse(JSON.stringify(posts)) });
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;