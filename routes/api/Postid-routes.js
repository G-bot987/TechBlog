const router = require('express').Router();
const { BlogPost, User, Comments } = require('../../models');

router.get('/:id', async (req, res) => {
    // find all BlogPost
    // be sure to include its associated User
  
    try {
      const postData = await BlogPost.findByPk(req.params.id,{
        include: [User, Comments]
      });
      // display all posts, parsed data to display
      // changed to view post from post/:id
      const post = postData.get({plain: true})
      res.render('viewpost', {... JSON.parse(JSON.stringify(post)) });
      
      // res.status(200).json(post);
      // console.log(post)
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = router;