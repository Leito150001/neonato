sequelize = require ('../src/database');
const Cirujanos = require('./Cirujanos');
const Operacion = require('./Operacion');
const paciente = require('./Paciente');
const users = require('./users');
const Logs = require('./logs');


// Sincronizar los modelos con la base de datos
(async () => {
  await Cirujanos.sync();
  await Operacion.sync();
  await paciente.sync();
  await users.sync();
  await Logs.sync();

})();


module.exports = {
  sequelize,
  Cirujanos,
  Operacion,
  paciente,
  users,
  Logs
};