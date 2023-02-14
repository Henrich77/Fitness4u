const router = require('express').Router();
const { Plan } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
    // find all plans
    try {
      const planData = await Plan.findAll({
       });
      res.status(200).json(planData);
    } catch (err) {
      res.status(500).json(err)
    }
    // be sure to include its associated Category and Tag data
  });

router.post('/', withAuth, async (req, res) => {
  try {
    const newPlan = await Plan.create({
      ...req.body,
      // user_id: req.session.user_id,
    });

    res.status(200).json(newPlan);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/:id', withAuth, async (req, res) => {
  // find a specific plan
  try {
    const planData = await Plan.findByPk({
     });
    res.status(200).json(planData);
  } catch (err) {
    res.status(500).json(err)
  }
  // be sure to include its associated Category and Tag data
});

// // router.put('/:id', async (req, res) => {
// //   try {
// //     const newPlan = await Plan.update(
// //       ...req.body, {
// //         where: {
// //           id: req.params.id,
// //           // user_id: req.session.user_id,
// //         },
        
// //       },      
// //     );

//     res.status(200).json(newPlan);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const planData = await Plan.destroy({
      where: {
        id: req.params.id,  
        // user_id: req.session.user_id,      
      },
      
    });

    if (!planData) {
      res.status(404).json({ message: 'No plan found with this id!' });
      return;
    }

    res.status(200).json(planData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
