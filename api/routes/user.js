const router = require('express').Router()
const { get, update } = require('../controllers/user')

router.route('/user/:userId')
  .get(get)
  .put(update)

module.exports = router