// middlewares/logMiddleware.js

const Log = require('../../models/logs'); // Ajusta la ruta a tu modelo Log
const jwt = require('jsonwebtoken');
const JWT_SECRET = "1234";  // Asegúrate de reemplazar esto con tu secreto real

const logMiddleware = async (req, res, next) => {
    let userId = null;
    let username = null;

    // Extraer el token JWT del encabezado Authorization
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith('Bearer ')) {
        const token = authHeader.split(' ')[1];
        try {
            const decoded = jwt.verify(token, JWT_SECRET);
            userId = decoded.userId;
            username = decoded.username; // Extraer el username del token
        } catch (error) {
            console.error('Error al verificar el token JWT:', error);
        }
    }

    res.on('finish', async () => {
        try {
            await Log.create({
                metodo: req.method,
                endpoint: req.originalUrl,
                codigoEstado: res.statusCode,
                mensaje: res.statusMessage,
                userId: userId,
                username: username, // Registrar el username en los logs
            });
        } catch (error) {
            console.error('Error al registrar la solicitud:', error);
        }
    });

    next();
};

module.exports = logMiddleware;
