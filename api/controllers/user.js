const User = require('../models/User')

console.log(User)

exports.update = async (req, res) => {
  console.log('Updated!', req.params.userId)

  res.status(200).json({ updated: true })
}

exports.get = (req, res) => {
  console.log('Got!', req.params.userId)

  res.status(200).json({ got: true })
}