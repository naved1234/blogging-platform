const Sequelize = require('sequelize');
const config = require('../config/config.js')['development'];

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.dialect,
  }
);

const db = {};
db.sequelize = sequelize;
db.User = require('./user')(sequelize);
db.Post = require('./post')(sequelize);

module.exports = db;
