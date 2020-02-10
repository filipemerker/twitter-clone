const router = require('express').Router()
const { create } = require('../controllers/user')

router.route('/user/:userId')
  .post(create)

module.exports = router