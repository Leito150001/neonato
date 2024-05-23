const express = require("express");
const router = express.Router();
const Cirujano = require("../../models/Cirujanos");

// Ruta GET para obtener todos los cirujanos
router.get("/cirujanos", async (req, res) => {
    try {
        const cirujanos = await Cirujano.findAll();
        res.json(cirujanos);
    } catch (error) {
        console.error("Error al obtener cirujanos:", error);
        res.status(500).json({ message: "Error al obtener cirujanos" });
    }
});

// Ruta GET para obtener un cirujano por ID
router.get("/cirujanos/:id", async (req, res) => {
    const cirujanoId = req.params.id;
    try {
        const cirujano = await Cirujano.findByPk(cirujanoId);
        if (!cirujano) {
            return res.status(404).json({ message: "Cirujano no encontrado" });
        }
        res.status(200).json(cirujano);
    } catch (error) {
        console.error("Error al obtener cirujano:", error);
        res.status(500).json({ message: "Error al obtener cirujano" });
    }
});

// Ruta POST para crear un nuevo cirujano
router.post("/cirujanos", async (req, res) => {
    const { nombreApellidos, DoctorId, Especializcion } = req.body;

    try {
        const newCirujano = await Cirujano.create({
            nombreApellidos,
            DoctorId,
            Especializcion
        });

        res.status(201).json(newCirujano);
    } catch (error) {
        console.error("Error al crear cirujano:", error);
        res.status(500).json({ message: "Error al crear cirujano", error: error.message });
    }
});

// Ruta PUT para actualizar un cirujano
router.put("/cirujanos/:id", async (req, res) => {
    const cirujanoId = req.params.id;
    const { nombreApellidos, DoctorId, Especializcion } = req.body;

    try {
        const cirujano = await Cirujano.findByPk(cirujanoId);
        if (!cirujano) {
            return res.status(404).json({ message: "Cirujano no encontrado" });
        }

        await cirujano.update({
            nombreApellidos,
            DoctorId,
            Especializcion
        });

        res.status(200).json({ message: "Cirujano actualizado correctamente" });
    } catch (error) {
        console.error("Error al actualizar cirujano:", error);
        res.status(500).json({ message: "Error al actualizar cirujano", error: error.message });
    }
});

// Ruta DELETE para eliminar un cirujano
router.delete("/cirujanos/:id", async (req, res) => {
    const cirujanoId = req.params.id;
    try {
        const cirujano = await Cirujano.findByPk(cirujanoId);
        if (!cirujano) {
            return res.status(404).json({ message: "Cirujano no encontrado" });
        }

        await cirujano.destroy();
        res.status(200).json({ message: "Cirujano eliminado correctamente" });
    } catch (error) {
        console.error("Error al eliminar cirujano:", error);
        res.status(500).json({ message: "Error al eliminar cirujano", error: error.message });
    }
});

module.exports = router;
