const { sequelize } = require('../models');

module.exports = async () => {
  // Sync the in-memory database before running tests
  await sequelize.sync({ force: true });
};
