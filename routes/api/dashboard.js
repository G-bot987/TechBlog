const router = require('express').Router();
const { BlogPost, User, Comments } = require("../../models");
const withAuth = require("../../util/auth")

router.get('/', withAuth, async () => {
    try {
        const { id } = req.session;
        const currentUser = await User.findByPk(id);

        const posts = await BlogPost.findAll({ where: { postOwnerId: id }, raw: true });

        res.render('dashboard', { posts, 
            logged_in: req.session.logged_in, currentUser})
    } catch (error) {
        console.error('ERROR - dashboard.js - / get:', error);
    }
});

router.get('/', withAuth, async (req , res) =>{
    console.log('test')
    const findUser = await User.findOne({
        where: {
            id: req.session.user_id,
        },
        raw: true,
    });
    
    const currentUser = await findUser.get({ plain: true });

// gets posts user has added
    const postData = await BlogPost.findAll({
        attributes : ['id', 'title', 'topic', 'description'],
      group: ['id'],
      
        where: {
            owner_id: req.session.user_id,
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

// router.get('/:id', withAuth, async function (req, res) {
//     const postData  = await BlogPost.findByPk(req.params.id);

//     const postFinder = await postData.get({ plain: true });
//    console.log('tst')
//     res.render('dashboard', { restaurants: postFinder, 
//         logged_in: req.session.logged_in, });

// });



module.exports = router;
