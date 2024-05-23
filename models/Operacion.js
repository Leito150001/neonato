'use strict';
module.exports = (sequelize, DataTypes) => {
  const Operacion = sequelize.define('Operacion', {
    VentilacionPreoperatoria: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    FechadeOperacion: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    NombredeOperacion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CirujanoPrincipal: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CirujanoAyudante: {
      type: DataTypes.STRING,
      allowNull: false
    },
    DiasVentilacionPreoperatoria: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    VentilacionPosoperatoria: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    OtrasComplicaiones: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    pacienteId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Paciente',
        key: 'id'
      }
    }
  }, {});
  
  Operacion.associate = function(models) {
    // Asociaciones
    Operacion.belongsTo(models.Paciente, {
      foreignKey: 'pacienteId',
      as: 'paciente'
    });
  };
  
  return Operacion;
};