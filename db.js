const Sequelize = require('sequelize');

const sync = () => {
  const sequelize = new Sequelize('gamedb', 'alexander', 'za-123-6', {
    host: 'localhost',
    dialect: 'postgres',
  });

  sequelize.authenticate().then(
    () => {
      console.log('Connected to DB');
    },
    (err) => {
      console.log(`Error: ${err}`);
    }
  );
};

module.exports = { sync };
