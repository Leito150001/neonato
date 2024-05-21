'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Reintervencion', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Reintervencion: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    FechadeOperacion: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    NombredeOperacion: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    CirujanoPrincipal: {
        type: DataTypes.STRING(255),
        allowNull: false
    },

    OtrasComplicaiones: {
        type: DataTypes.TEXT,
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
    await queryInterface.dropTable('Reintervencion');
  }
};