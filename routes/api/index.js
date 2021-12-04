const router = require('express').Router();
const UserRoutes = require('./User-routes');
// const PostRoutes = require('./Post-routes');
const { User } = require('../../models');
const LoginRoutes = require('./login-routes')
const PostDetailRoutes = require('./Postid-routes')
const dashboardRoutes = require('./dashboard')
const newPostRoutes = require('./newblogpost')
// /api routes, mainly update create and deletes

router.use('/', UserRoutes);
// router.use('/', PostRoutes);
router.use('/login', LoginRoutes);
router.use('/post', PostDetailRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/createnewpost', newPostRoutes);

module.exports = router;