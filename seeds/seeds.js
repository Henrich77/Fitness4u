const sequelize = require('../config/connection');
const { User, Component, Body } = require('../models');



const userData = require('./userData.json');
const componentData = require('./componentData.json')
const bodyData = require('./bodyData.json')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Component.bulkCreate(
    componentData
  );

  await Body.bulkCreate(
    bodyData
  );

  
  
  process.exit(0);
};

seedDatabase();