const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token no proporcionado' });
  }

  jwt.verify(token.split(' ')[1], '1234', (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Token inválido' });
    }
    console.log(decoded)
    req.user = decoded;
    next();
  });
};

module.exports = verifyToken;
