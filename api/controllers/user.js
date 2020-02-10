const { User, Post, PostMention } = require('../models')

exports.create = async (req, res) => {
  const { user } = req.body

  res.status(200).json({ data: user })
}