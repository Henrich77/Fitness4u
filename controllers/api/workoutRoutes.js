const router = require('express').Router();
const { Workout, Plan } = require('../../models');
const withAuth = require('../../utils/auth');


router.get('/', withAuth, async (req, res) => {
  // find all workouts
  try {
    const workoutData = await Workout.findAll({
     });
    res.status(200).json(workoutData);
  } catch (err) {
    res.status(500).json(err)
  }
  // be sure to include its associated Category and Tag data
});

router.post('/', withAuth, async (req, res) => {
  try {
    const newWorkout = await Workout.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newWorkout);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', withAuth, async (req, res) => {
  try {
    const newWorkout = await Workout.update(
      req.body, {
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
        
      },      
    );

    res.status(200).json(newWorkout);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const workoutData = await Workout.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
      
    });

    if (!workoutData) {
      res.status(404).json({ message: 'No workout found with this id!' });
      return;
    }

    res.status(200).json(workoutData);
  } catch (err) {
    res.status(500).json(err);
  }
});





module.exports = router;
