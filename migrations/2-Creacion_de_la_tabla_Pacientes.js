'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Pacientes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
    // Identificacion////
    nombre: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    apellidos: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    CarnetdelaMadre: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    telefono: {
        type: Sequelize.STRING(20),
        allowNull: false
    },
    Direccion: {
        type: Sequelize.STRING(20),
        allowNull: false
    },
    Provincia: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    Municipio: {
        type: Sequelize.STRING(20),
        allowNull: false
    },
    FechadeIngreso: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    FechadeEgreso: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    HistoriaClinicaPaciente: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    DiagnosticoAlIngreso: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    // ///Traslado////
    CoincidenciaDiagnositica: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    CoordinacionTraslado: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    EvaluaciondelTraslado: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    OrigendelTraslado: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    
    // ///////Datos Al Egreso////
    ResultadoalAlta: {
        type: Sequelize.ENUM('Vivo', 'Muerto',),
        allowNull: false
      },
      FechadeAlta: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      DiagnosticoAlEgreso: {
        type: Sequelize.TEXT,
        allowNull: false
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
    await queryInterface.dropTable('pacientes');
  }
};