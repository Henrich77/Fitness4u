const router = require('express').Router();
const { Quote } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/:id', withAuth, async (req, res) => {
    // find a specific plan
    try {
      const planData = await Plan.findByPk({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
       });
      res.status(200).json(planData);
    } catch (err) {
      res.status(500).json(err)
    }
    // be sure to include its associated Category and Tag data
  });

  module.exports = router;