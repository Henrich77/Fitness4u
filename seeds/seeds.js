const sequelize = require('../config/connection');

const { User, Workout, Plan } = require('../models');


const planData = require('./planData.json')
const userData = require('./userData.json');
const workoutData = require('./workoutData.json')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });


  await Plan.bulkCreate(
    planData
  );

  await Workout.bulkCreate(workoutData);

  process.exit(0);
};

seedDatabase();