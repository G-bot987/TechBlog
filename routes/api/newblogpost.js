const router = require('express').Router();
const { BlogPost } = require('../../models');
const withAuth = require("../../util/auth")

router.post("/", withAuth, async (req, res) => {
   console.log('this is req.body', req.body)
   try {
     

     
     const newPost = await BlogPost.create({
         ...req.body,
         title: req.body.title,
         topic: req.body.topic,
         description: req.body.description,
         postOwnerId: req.session.user_id,
         
     });
     
      console.log('req.session.user_id', req.session.user_id, 'req.params.id', req.params.id)
 console.log('new post', newPost)
     res.status(200).json(newPost);
   } catch (err) {
     console.log(err)
     res.status(400).json(err);
   }
});

module.exports = router;