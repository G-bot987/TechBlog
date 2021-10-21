// import models
const BlogPost = require('./Blogpost');
const User = require('./User');
const Comments = require('./Comments');


   

// User has many posts(s)
User.hasMany(BlogPost, {
  foreignKey: 'PostOwnerId',
  onDelete: 'CASCADE',
});

BlogPost.belongsTo(User, {
  foreignKey: 'PostOwnerId',
});

User.hasMany(Comments, {
  foreignKey: 'commentOwnerId',
  onDelete: 'CASCADE',
});

Comments.belongsTo(User, {
  foreignKey: 'commentOwnerId',
});

BlogPost.hasMany(Comments, {
  foreignKey: 'commentedPost',
  onDelete: 'CASCADE',
});

Comments.belongsTo(User, {
  foreignKey: 'commentedPost',
});







module.exports = {
    User,
    BlogPost,
    Comments,
};