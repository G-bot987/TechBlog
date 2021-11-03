const router = require('express').Router();
const { User } = require('../../models');


// this route is working
router.post('/', async (req, res) => {
    // create a new user 
    try {
        const userData = await User.create(req.body);

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.status(200).json("User created");
        })

    } catch (err) {
        res.status(400).json(err);
    }

});

// logout
router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });


module.exports = router;

