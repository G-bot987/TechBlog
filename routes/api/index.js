const router = require('express').Router();
const UserRoutes = require('./User-routes');
const PostRoutes = require('./Post-routes');
const { User } = require('../../models');
const LoginRoutes = require('./login-routes')


// /api routes, mainly update create and deletes

router.use('/', UserRoutes);
router.use('/', PostRoutes);
router.use('/login', LoginRoutes);


module.exports = router;