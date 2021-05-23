const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('sqlite::memory:');

// class User extends Model {}

const User = sequelize.define('user', {
  full_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  passwordHash: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
});

exports.module = User;
