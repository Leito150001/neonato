const { DataTypes } = require('sequelize');
const sequelize = require('../src/database');


const sequelize = require('../src/database');
const Reintervencion = sequelize.define('reintervencion', {
    
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


})

mnodule

