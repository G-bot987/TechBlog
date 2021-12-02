const router = require('express').Router();
const { BlogPost, User, Comments } = require('../../models');
const withAuth = require("../../util/auth")

router.get('/:id', async (req, res) => {
    // find BlogPost by id
     
      try {
        const postData = await BlogPost.findByPk(req.params.id,{
          include: [{model: User} ],
        
        });
   
   
        const post = postData.get({plain: true})
      
        const commentData = await Comments.findAll({
          where: {
            commentedPost: req.params.id
          },
          include: {
              model: User
          }

        })

        const commentUserData= await commentData.map( comment => comment.get({plain: true}))


        post.comments = commentUserData
        console.log('this is post:', post )
        console.log('comments', post.comments)

        res.render('viewpost', post);
  
      } catch (err) {
        res.status(500).json(err);
      }
    });



      // leave a comment
  router.post("/:id", withAuth, async (req, res) => {
    try {
      const newComment = await Comments.create({
          ...req.body,
          commentbody: req.body.text,
          commentOwnerId: req.session.user_id,
          commentedPost: req.params.id,
      });
      
       console.log('new comment', req.session.user_id, 'commentpost', req.params.id)
  console.log('new comment', newComment)
      res.status(200).json(newComment);
    } catch (err) {
      console.log(err)
      res.status(400).json(err);
    }
  });
  
  // router.post('/:id', (req, res) => {
  //   // Use Sequelize's `create()` method to add a row to the table
  //   // Similar to `INSERT INTO` in plain SQL
  //   Comments.create({
  //     Commentbody: req.body.title,
  //     commentOwnerId: req.session.user_id,
  //     commentedPost: req.params.id,
  //   })
  //     .then((newBook) => {
  //       // Send the newly created row as a JSON object
  //       res.json(newBook);
  //     })
  //     .catch((err) => {
  //       res.json(err);
  //     });
  // });





module.exports = router;