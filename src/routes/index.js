const express = require("express");
const router = express.Router();
const User = require("../../models/users"); // Importa el modelo User
const multer = require('multer');




const usersRouter = require('./users');
const pacienteRouter = require('./pacientes');


router.use('/users', usersRouter);
router.use('/pacientes', pacienteRouter);

module.exports = router;