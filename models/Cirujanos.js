const { DataTypes } = require('sequelize');
const sequelize = require('../src/database');


const sequelize = require('../src/database');
const cirujano = sequelize.define('cirujano', {
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
      }

},{
        sequelize,
        modelName: 'cirujanos',
        tableName: 'cirujanos',
        timestamps: true,
      
})

module.exports = cirujano
