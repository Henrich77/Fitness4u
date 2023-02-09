const sequelize = require('../config/connection');

const { User, Workout, Body, Component } = require('../models');



const userData = require('./userData.json');
const componentData = require('./componentData.json')
const bodyData = require('./bodyData.json')
const workoutData = require('./workoutData.json')

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

  await Workout.bulkCreate(workoutData);

  process.exit(0);
};

seedDatabase();