const router = require('express').Router();
const userRoutes = require('./userRoutes');
const planRoutes = require('./planRoutes');
const workoutRoutes = require('./workoutRoutes');
const quoteRoutes = require('./quoteRoutes');

router.use('/users', userRoutes);
router.use('/plans', planRoutes);
router.use('/workouts', workoutRoutes);
router.use('/quotes', quoteRoutes);

module.exports = router;
