const router = require('express').Router()
const { models: { Stat }} = require('../db')
module.exports = router

router.get('/:name', async (req, res, next) => {
  try {
    const stats = await Stat.findOne({
        where: {
            name: req.params.name
        }
    })
    res.json(stats)
  } catch (err) {
    next(err)
  }
})