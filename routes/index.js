const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/', apiRoutes);
// ref to url link
router.get('/login', async (req, res) => {
    // render to post
    // ref to handlebars file
    res.render('login');
  });

  router.get('/', async (req, res) => {
    // render to homepage
    res.render('homepage');
  });

  router.get('/dashboard', async (req, res) => {
    // render to dashboard
    res.render('dashboard');
  });
module.exports = router;