const router = require('express').Router();
const userRoutes = require('./userRoutes');
const planRoutes = require('./planRoutes');
const workoutRoutes = require('./workoutRoutes');

router.use('/users', userRoutes);
router.use('/plans', planRoutes);
router.use('/workouts', workoutRoutes);

module.exports = router;
