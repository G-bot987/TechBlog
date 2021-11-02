const router = require('express').Router();
const { BlogPost, User, Comments } = require('../../models');
const withAuth = require("../../util/auth")

router.get('/',withAuth, async (req, res) => {
  // find all BlogPost
  // be sure to include its associated User

  try {
    const posts = await BlogPost.findAll({
      include: [User, Comments]
      // where: {
      //   userId: req.session.userId
      // }
    });
    // display all posts, parsed data to display
    res.render('homepage', { posts: JSON.parse(JSON.stringify(posts)) });
    
    // res.status(200).json(posts);
    // console.table(posts)
  } catch (err) {
    res.status(500).json(err);

    res.render('homepage')
  }
});


module.exports = router;