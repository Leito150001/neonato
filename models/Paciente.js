const { DataTypes } = require('sequelize');
const sequelize = require('../src/database');



  const Paciente = sequelize.define('Paciente', {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    apellidos: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CarnetdelaMadre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    telefono: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Direccion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Provincia: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Municipio: {
      type: DataTypes.STRING,
      allowNull: false
    },
    FechadeIngreso: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    FechadeEgreso: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    HistoriaClinicaPaciente: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    DiagnosticoAlIngreso: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    CoincidenciaDiagnositica: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    CoordinacionTraslado: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    EvaluaciondelTraslado: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    OrigendelTraslado: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    ResultadoalAlta: {
      type: DataTypes.ENUM('Vivo', 'Muerto'),
      allowNull: false
    },
    FechadeAlta: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    DiagnosticoAlEgreso: {
      type: DataTypes.TEXT,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Paciente',
    tableName: 'Paciente',
    timestamps: true,
  });

  Paciente.associate = function(models) {
    Paciente.hasMany(models.Operacion, {
      foreignKey: 'pacienteId',
      as: 'operaciones'
    });
  };
  

  return Paciente;
  
module.exports = Paciente

