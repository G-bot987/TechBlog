const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class BlogPost extends Model { }

BlogPost.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        Title: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        Topic: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        Post: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        PostOwnerId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'User',
                key: 'id',
                unique: false
            }
        },
    },

    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'BlogPost',
    }
);

module.exports = BlogPost;