const {DataTypes} = require('sequelize');
const sequelize = require('../src/database');

const pacientes = sequelize.define('pacientes', {
    // Identificacion////
    nombre: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    apellidos: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    CarnetdelaMadre: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    telefono: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    Direccion: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    Provincia: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    Municipio: {
        type: DataTypes.STRING(20),
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
    // ///Traslado////
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
    // //Operacion////
    VentilacionPreoperatoria: {
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
    DiasVentilacionPreoperatoria: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    // ///////
})
