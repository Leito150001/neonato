const { DataTypes } = require('sequelize');
const sequelize = require('../src/database');

const Users = sequelize.define('Users', {
    nombreApellidos: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      username: {
        type: DataTypes.STRING(15),
        allowNull: false
      },
      correoElectronico: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      password: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      isAdmin: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
},{
    sequelize,
    modelName: 'Users',
    tableName: 'Users',
    timestamps: true,
  })

  module.exports = Users;
