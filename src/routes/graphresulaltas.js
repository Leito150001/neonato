const express = require('express');
const router = express.Router();
const Paciente = require('../../models/Paciente'); // Asegúrate de tener la ruta correcta a tu modelo Paciente

router.get('/muertos/', async (req, res) => {
    try {
        // Realizar la consulta para contar pacientes con resultado de alta "Muerto"
        const count = await Paciente.count({
            where: {
                ResultadoalAlta: 'Muerto'
            }
        });

        res.json({ count });
    } catch (error) {
        console.error('Error al contar pacientes fallecidos:', error);
        res.status(500).json({ message: 'Error al contar pacientes fallecidos' });
    }
});


router.get('/vivos/', async (req, res) => {
    try {
        // Realizar la consulta para contar pacientes con resultado de alta "Vivo"
        const count = await Paciente.count({
            where: {
                ResultadoalAlta: 'Vivo'
            }
        });

        res.json({ count });
    } catch (error) {
        console.error('Error al contar pacientes fallecidos:', error);
        res.status(500).json({ message: 'Error al contar pacientes fallecidos' });
    }
});
router.get('/porcentaje/', async (req, res) => {
    try {
        // Contar pacientes fallecidos
        const muertos = await Paciente.count({
            where: {
                ResultadoalAlta: 'muerto'
            }
        });

        // Contar pacientes vivos
        const vivos = await Paciente.count({
            where: {
                ResultadoalAlta: 'vivo'
            }
        });

        // Calcular total de pacientes
        const total = muertos + vivos;

        // Calcular porcentaje de pacientes fallecidos
        const porcentajeFallecidos = (muertos *100) / total;

        res.json({ porcentajeFallecidos });
    } catch (error) {
        console.error('Error al calcular porcentaje de fallecidos:', error);
        res.status(500).json({ message: 'Error al calcular porcentaje de fallecidos' });
    }
});

module.exports = router;
