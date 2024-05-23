'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Logs', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        metodo: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        endpoint: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        codigoEstado: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        mensaje: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        userId: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        username: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        timestamp: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW,
        },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Logs');
  }
};