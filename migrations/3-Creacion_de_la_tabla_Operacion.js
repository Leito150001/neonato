'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Operacion', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      pacienteId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Paciente', // Nombre de la tabla referenciada
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      VentilacionPreoperatoria: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      FechadeOperacion: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      NombredeOperacion: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      CirujanoPrincipal: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      CirujanoAyudante: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      DiasVentilacionPreoperatoria: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      VentilacionPosoperatoria: {
        type: Sequelize.BOOLEAN,
        allowNull: true
      },
      OtrasComplicaiones: {
        type: Sequelize.TEXT,
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
    await queryInterface.dropTable('Operacion');
  }
};