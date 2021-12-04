const router = require('express').Router();

const apiRoutes = require('./api');
const {BlogPost, User, Comments} = require('../models')

const withAuth = require("../util/auth")


router.use('/api', apiRoutes);



// ref to url link
router.get('/login', async (req, res) => {
    // render to post
    console.log(req.session)
    // const posts = await BlogPost.findAll({
    //   include: [User, Comments],
    //   raw: true
    // });

    // // const posts = postsData.get({plain: true})
    // console.log('posts', posts); 
    // // console.log('**username', username)
    // // ref to handlebars file
    // res.render('login', { posts});
    res.render('login');
  });

  // render to homepage
  router.get('/', async (req, res) => {
    console.log(req.session)
    const posts = await BlogPost.findAll({
      include: [User, Comments],
      raw: true
    });
    // const posts = postsData.get({plain: true})
    console.log('posts homepage', posts); 
 
    res.render('homepage', { posts});
  });

  router.get('/createnewpost', async (req, res) =>{ 
 
    res.render('createnewpost')
  });

  router.get('/dashboard', withAuth, async function (req , res) {
    console.log('test')
    console.log('REQ.SES.ID', req.session.user_id)
    const findUser = await User.findOne({
        where: {
            id: req.session.user_id,
        },
        raw: true,
    });
    console.log('find user', findUser)
    const currentUser = await findUser
    console.log('currentUser', currentUser)
// gets posts user has added
    const postData = await BlogPost.findAll({
        attributes : ['id', 'title', 'topic', 'description', 'created_at'],
      group: ['id'],
      
        where: {
            post_owner_id: req.session.user_id,
       },
        include: [
            {
              model: User,
              attributes: ['name'],
            },
            {
                model: Comments,
                include: [User],
                attributes: {
                    exclude: ['password'],
                }
                
            }
          ],
    });
console.log('postdata dash', postData)
    const userPosts = postData.map((eachRest) => 
    eachRest.get({ plain: true })
    );
console.log('userposts', userPosts)
    res.render('dashboard', { posts: userPosts, 
        logged_in: req.session.logged_in, currentUser});

});


module.exports = router;