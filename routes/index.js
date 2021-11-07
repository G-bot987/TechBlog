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
    // console.log('posts', posts); 
 
    res.render('homepage', { posts});
  });

  // render to dashboard
  router.get('/dashboard', withAuth, async (req, res) => {
    console.log(req.session)
    
    res.render('dashboard');
  });


module.exports = router;