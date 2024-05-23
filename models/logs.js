const { DataTypes } = require('sequelize');
const sequelize = require('../src/database'); // Ajusta la ruta a tu instancia de sequelize

const Logs= sequelize.define('Logs', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    metodo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    endpoint: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    codigoEstado: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    mensaje: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    timestamp: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
}, {
    timestamps: false,
});

module.exports = Logs;
