const express = require("express");
const router = express.Router();
const User = require("../../models/users"); // Importa el modelo User
const multer = require('multer');




const usersRouter = require('./users');
const pacienteRouter = require('./pacientes');
const cirujanosRouter = require('./cirujanos');
const loginRouter = require('./login');
const muertosRouter = require('./graphresulaltas');
const vivosRouter = require('./graphresulaltas');
const porcentajeRouter = require('./graphresulaltas');





router.use('/users', usersRouter);
router.use('/pacientes', pacienteRouter);
router.use('/cirujanos', cirujanosRouter);
router.use('/login', loginRouter);
router.use('/muertos', muertosRouter);
router.use('/vivos', vivosRouter);
router.use('/porcentaje', porcentajeRouter);

module.exports = router;