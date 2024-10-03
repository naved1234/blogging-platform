const { sequelize } = require('../models');

module.exports = async () => {
  // Close the database connection after running tests
  await sequelize.close();
};
