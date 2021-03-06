const router = require('express').Router();
const { BlogPost, User, Comments } = require('../../models');

// router.get('/', async (req, res) => {
//   // find all BlogPost
//   // be sure to include its associated User

//   try {
//     const posts = await BlogPost.findAll({
//       include: [User, Comments]
//     });
//     // display all posts, parsed data to display
//     res.render('login', { posts: JSON.parse(JSON.stringify(posts)) });

//     // res.status(200).json(posts);
//     // console.table(posts)
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// find all users this route works 
router.get('/users', async (req, res) => {

  // be sure to include its associated User

  try {
    const Users = await User.findAll({
    });
    // display all posts, parsed data to display
    // res.render('login', { posts: JSON.parse(JSON.stringify(Users)) });

    res.status(200).json(Users);
    // console.table(posts)
  } catch (err) {
    res.status(500).json(err);
  }
});

// logs in user 

router.post('/', async (req, res) => {
  try {
    const preuserData = await User.findOne({ where: { email: req.body.email } });
    const userData = preuserData.get({ plain: true })
    console.log("this is userdate", userData)
    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      console.log('log in failed')
      return;
    }


    console.log('req.body.pword= ', req.body.password)
    const  authopword = userData.password
    console.log('authpword ',authopword)
    // the below works 
    // const validPassword = req.body.password
    // const validPassword = await userData.checkPassword(req.body.password);
    // console.log('this is validatedpword', validPassword)
    if (req.body.password !== authopword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      console.log('password validation failed')
      return;
    }
    console.log('you logged in', userData)

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;


      res.json({ user: userData, message: 'You are now logged in!' });

    });
  } catch (err) {
    res.status(400).json(err);
    console.log(err)
  }
});








module.exports = router;