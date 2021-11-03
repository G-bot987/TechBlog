const router = require('express').Router();
const UserRoutes = require('./User-routes');
// const PostRoutes = require('./Post-routes');
const { User } = require('../../models');
const LoginRoutes = require('./login-routes')
const PostDetailRoutes = require('./Postid-routes')

// /api routes, mainly update create and deletes

router.use('/', UserRoutes);
// router.use('/', PostRoutes);
router.use('/login', LoginRoutes);
router.use('/post', PostDetailRoutes);


module.exports = router;