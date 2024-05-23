const express = require("express");
const router = express.Router();
const User = require("../../models/users"); // Importa el modelo User
const multer = require('multer');




const usersRouter = require('./users');
const pacienteRouter = require('./pacientes');
const cirujanosRouter = require('./cirujanos');
const loginRouter = require('./login');




router.use('/users', usersRouter);
router.use('/pacientes', pacienteRouter);
router.use('/cirujanos', cirujanosRouter);
router.use('/login', loginRouter);

module.exports = router;