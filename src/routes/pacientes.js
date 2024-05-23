const express = require("express");
const router = express.Router();
const Paciente = require("../../models/Paciente");
const Operacion = require("../../models/Operacion");
const VerifyToken = require("../middlewares/Verifytoken")
const isAdmin = require("../middlewares/isAdmin")


// Ruta GET para obtener todos los pacientes
router.get("/pacientes",VerifyToken,isAdmin , async (req, res) => {
    try {
        const pacientes = await Paciente.findAll();
        res.json(pacientes);
    } catch (error) {
        console.error("Error al obtener pacientes:", error);
        res.status(500).json({ message: "Error al obtener pacientes" });
    }
});

// Ruta GET para obtener un paciente por ID
router.get("/pacientes/:id",VerifyToken, async (req, res) => {
    const pacienteId = req.params.id;
    try {
        const paciente = await Paciente.findByPk(pacienteId, {
            include: { model: Operacion, as: 'operaciones' } // Incluye las operaciones relacionadas
        });
        if (!paciente) {
            return res.status(404).json({ message: "Paciente no encontrado" });
        }
        res.status(200).json(paciente);
    } catch (error) {
        console.error("Error al obtener paciente:", error);
        res.status(500).json({ message: "Error al obtener paciente" });
    }
});

// Ruta POST para crear un nuevo paciente y añadir operaciones
router.post("/pacientes", async (req, res) => {
    const {
        nombre,
        apellidos,
        CarnetdelaMadre,
        telefono,
        Direccion,
        Provincia,
        Municipio,
        FechadeIngreso,
        FechadeEgreso,
        HistoriaClinicaPaciente,
        DiagnosticoAlIngreso,
        CoincidenciaDiagnositica,
        CoordinacionTraslado,
        EvaluaciondelTraslado,
        OrigendelTraslado,
        ResultadoalAlta,
        FechadeAlta,
        DiagnosticoAlEgreso,
        operaciones
    } = req.body;

    try {
        // Crear el paciente
        const newPaciente = await Paciente.create({
            nombre,
            apellidos,
            CarnetdelaMadre,
            telefono,
            Direccion,
            Provincia,
            Municipio,
            FechadeIngreso,
            FechadeEgreso,
            HistoriaClinicaPaciente,
            DiagnosticoAlIngreso,
            CoincidenciaDiagnositica,
            CoordinacionTraslado,
            EvaluaciondelTraslado,
            OrigendelTraslado,
            ResultadoalAlta,
            FechadeAlta,
            DiagnosticoAlEgreso
        });

        // Si hay operaciones, crearlas y asociarlas al paciente
        if (operaciones && operaciones.length > 0) {
            const ops = operaciones.map(op => ({
                ...op,
                pacienteId: newPaciente.id
            }));
            await Operacion.bulkCreate(ops);
        }

        res.status(201).json(newPaciente);
    } catch (error) {
        console.error("Error al crear paciente:", error);
        res.status(500).json({ message: "Error al crear paciente", error: error.message });
    }
});

// Ruta PUT para actualizar un paciente y sus operaciones
router.put("/pacientes/:id", async (req, res) => {
    const pacienteId = req.params.id;
    const {
        nombre,
        apellidos,
        CarnetdelaMadre,
        telefono,
        Direccion,
        Provincia,
        Municipio,
        FechadeIngreso,
        FechadeEgreso,
        HistoriaClinicaPaciente,
        DiagnosticoAlIngreso,
        CoincidenciaDiagnositica,
        CoordinacionTraslado,
        EvaluaciondelTraslado,
        OrigendelTraslado,
        ResultadoalAlta,
        FechadeAlta,
        DiagnosticoAlEgreso,
        operaciones
    } = req.body;

    try {
        const paciente = await Paciente.findByPk(pacienteId);
        if (!paciente) {
            return res.status(404).json({ message: "Paciente no encontrado" });
        }

        // Actualizar el paciente
        await paciente.update({
            nombre,
            apellidos,
            CarnetdelaMadre,
            telefono,
            Direccion,
            Provincia,
            Municipio,
            FechadeIngreso,
            FechadeEgreso,
            HistoriaClinicaPaciente,
            DiagnosticoAlIngreso,
            CoincidenciaDiagnositica,
            CoordinacionTraslado,
            EvaluaciondelTraslado,
            OrigendelTraslado,
            ResultadoalAlta,
            FechadeAlta,
            DiagnosticoAlEgreso
        });

        // Si hay operaciones, actualizarlas
        if (operaciones && operaciones.length > 0) {
            // Primero, eliminar las operaciones existentes
            await Operacion.destroy({ where: { pacienteId: paciente.id } });
            // Luego, crear las nuevas operaciones
            const ops = operaciones.map(op => ({
                ...op,
                pacienteId: paciente.id
            }));
            await Operacion.bulkCreate(ops);
        }

        res.status(200).json({ message: "Paciente actualizado correctamente" });
    } catch (error) {
        console.error("Error al actualizar paciente:", error);
        res.status(500).json({ message: "Error al actualizar paciente", error: error.message });
    }
});

// Ruta DELETE para eliminar un paciente y sus operaciones
router.delete("/pacientes/:id", async (req, res) => {
    const pacienteId = req.params.id;
    try {
        const paciente = await Paciente.findByPk(pacienteId);
        if (!paciente) {
            return res.status(404).json({ message: "Paciente no encontrado" });
        }

        // Eliminar el paciente (las operaciones se eliminan automáticamente por la cascada)
        await paciente.destroy();
        res.status(200).json({ message: "Paciente eliminado correctamente" });
    } catch (error) {
        console.error("Error al eliminar paciente:", error);
        res.status(500).json({ message: "Error al eliminar paciente", error: error.message });
    }
});

module.exports = router;