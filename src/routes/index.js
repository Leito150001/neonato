const express = require("express");
const router = express.Router();
const User = require("../../models/users"); // Importa el modelo User
const multer = require('multer');




const usersRouter = require('./users');


router.use('/users', usersRouter);

module.exports = router;