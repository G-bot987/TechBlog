const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// const bcrypt = require('bcrypt');

class Comments extends Model {


}

Comments.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      commentbody: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      commentOwnerId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'User',
            key: 'id',
            unique: false
        }
    },
    
    commentedPost: {
        type: DataTypes.INTEGER,
        references: {
            model: 'BlogPost',
            key: 'id',
            unique: false
        }
    },

    },
    
  
  {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'Comments',
  } 
  );

module.exports = Comments;