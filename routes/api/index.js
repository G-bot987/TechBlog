const router = require('express').Router();
const UserRoutes = require('./User-routes');
const PostRoutes = require('./Post-routes');


// /api routes, mainly update create and deletes

router.use('/user', UserRoutes);
router.use('/post', PostRoutes);


module.exports = router;