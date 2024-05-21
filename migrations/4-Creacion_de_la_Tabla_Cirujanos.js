'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Cirujanos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombreApellidos: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
    DoctorId :{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    Especializcion: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
     
    createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Cirujanos');
  }
};