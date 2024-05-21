const { database_mysql } = require('./keys'); // Asegúrate de que esto esté importando tus credenciales de base de datos correctamente
const { Sequelize } = require('sequelize');

// Inicializar una nueva instancia de Sequelize
const sequelize = new Sequelize(database_mysql.database, 
  database_mysql.user, database_mysql.password, {
  host: database_mysql.host,
  dialect: 'mysql', // Especifica el dialecto de la base de datos
});

// Probar la conexión
sequelize.authenticate()
  .then(() => {
    console.log('Conexión establecida correctamente con la base de datos MySQL.');
  })
  .catch(err => {
    console.error('Error al conectarse a la base de datos MySQL:', err);
  });

module.exports = sequelize;