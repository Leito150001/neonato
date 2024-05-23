const Users = require('../../models/users');



const isAdmin = async (req, res, next) => {
    try {
      // Obtener el ID de usuario del token
      const userId = req.user.userId;
      
      // Buscar al usuario en la base de datos
      const user = await Users.findByPk(userId);
  
      // Verificar si el usuario es administrador
      if (!user || !user.isAdmin) {
        return res.status(403).json({ message: 'Acceso denegado. No eres un administrador.' });
      }
  
      // Si el usuario es administrador, pasamos al siguiente middleware
      next();
    } catch (error) {
      console.error('Error al verificar el estado de administrador del usuario:', error);
      res.status(500).json({ message: 'Error al verificar el estado de administrador del usuario' });
    }
  };
  
  module.exports = isAdmin;
  