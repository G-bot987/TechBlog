// import models
const BlogPost = require('./Blogpost');
const User = require('./User');


   

// User has many posts(s)
User.hasMany(BlogPost, {
  foreignKey: 'PostOwnerId',
  onDelete: 'CASCADE',
});

BlogPost.belongsTo(User, {
  foreignKey: 'PostOwnerId',
});




module.exports = {
    User,
    BlogPost,
};