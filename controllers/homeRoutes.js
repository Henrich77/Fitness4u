const router = require('express').Router();
const { User, Workout } = require('../models');
const withAuth = require('../utils/auth');

router.get('/workouts', async (req, res) => {
  try {
    const dbWorkoutData = await Workout.findAll();

    const workouts = dbWorkoutData.map((workout) =>
      workout.get({ plain: true })
    );
    res.render('homepage', {
      workouts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/', withAuth, async (req, res) => {
  try {
    res.render('homepage', {
      users,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
