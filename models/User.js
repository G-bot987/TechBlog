const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// const bcrypt = require('bcrypt');

class User extends Model {
  // checkPassword(loginpassword) {
  //   console.log(loginpassword, this.password)
    
  //   return bcrypt.compareSync(loginpassword, this.password);
  
  // }

}

User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [8,20],
          },
        },
    },
    
  
  {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'User',
  } 
  );

module.exports = User;