const express = require("express");
const router = express.Router();
const User = require("../../models/users")


////////////////////////////////// Ruta GET para obtener todos los usuarios//////////////////////////
router.get("/users", async (req, res) => {
    try {
      // Obtener todos los usuarios
      const users = await Users.findAll();
  
      // Enviar la respuesta con los usuarios en formato JSON
      res.json(users);
    } catch (error) {
      console.error("Error al obtener usuarios:", error);
      res.status(500).json({ message: "Error al obtener usuarios" }); // Enviar un mensaje de error en caso de fallo
    }
  });

  // Ruta GET para obtener un usuario por ID
router.get("/users/:id", async (req, res) => {
    const userId = req.params.id;
  
    try {
      // Obtener el usuario por su ID
      const user = await Users.findByPk(userId);
  
      // Verificar si se encontró el usuario
      if (!user) {
        return res.status(404).json({ message: "Usuario no encontrado" });
      }
  
      // Devolver el usuario encontrado como respuesta
      res.status(200).json(user);
    } catch (error) {
      console.error("Error al obtener usuario:", error);
      res.status(500).json({ message: "Error al obtener usuario" });
    }
  });

  ////////////////////////////Ruta POST para agregar un nuevo usuario////////////////////////////////
router.post("/users",  async (req, res) => {
    const {
        nombreApellidos,
        username,
        correoElectronico,
        password,
        isadmin,
    } = req.body;
  
    try {
      // Generar la sal
      const salt = await bcrypt.genSalt(10);
  
      // Hashear la contraseña usando la sal generada
      
      const hashedPassword = await bcrypt.hash(password, salt);
  
      console.log(password)
  
      // Insertar el usuario en la base de datos
      const newUser = await User.create({
        nombreApellidos,
        username,
        correoElectronico,
        password,
        isadmin,
        password: hashedPassword, // Guardar la contraseña hasheada
      });
  
      // Generar un token de acceso
      const token = jwt.sign({ userId: newUser.id }, JWT_SECRET);
  
      // Devolver el token como respuesta
      res.status(201).json({ id: newUser.id, token });
    } catch (error) {
      console.error("Error al insertar usuario:");
      res.status(500).json({ message: "Error al insertar el usuario", error: error.message }); // Incluir el mensaje de error en la respuesta
    }
  });

  ////////////////////////// Ruta DELETE para eliminar un usuario por ID//////////////////////////////
router.delete("/users/:id", async (req, res) => {
    const userId = req.params.id;
  
    try {
      // Verificar si el usuario existe antes de eliminarlo
      const user = await User.findByPk(userId);
      if (!user) {
        return res.status(404).json({ message: "Usuario no encontrado" });
      }
  
      // Eliminar el usuario de la base de datos
      await user.destroy();
  
      res.status(200).json({ message: "Usuario eliminado correctamente" });
    } catch (error) {
      console.error("Error al eliminar usuario:", error);
      res.status(500).json({ message: "Error al eliminar usuario" });
    }
  });
  //////////////////////////Ruta PUT para actualizar un usuario por ID////////////////////////////////////////
router.put("/users/:id", async (req, res) => {
    const userId = req.params.id;
    const {
        nombreApellidos,
        username,
        correoElectronico,
        password,
        isadmin,
        
    } = req.body;
  
    try {
      // Verificar si el usuario existe antes de actualizarlo
      const user = await User.findByPk(userId);
      
      // Generar la sal
      const salt = await bcrypt.genSalt(10);
  
      // Hashear la contraseña usando la sal generada
      const hashedPassword = await bcrypt.hash(password, salt);
      
      if (!user) {
        return res.status(404).json({ message: "Usuario no encontrado" });
      }
  
      // Actualizar el usuario en la base de datos
      await user.update({
        nombreApellidos,
        username,
        correoElectronico,
        password,
        isadmin,
        password:hashedPassword,
      });
  
      res.status(200).json({ message: "Usuario actualizado correctamente" });
    } catch (error) {
      console.error("Error al actualizar usuario:", error);
      res.status(500).json({ message: "Error al actualizar usuario" });
    }
  });

  module.exports = router;