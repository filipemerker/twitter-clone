const Sequelize = require('sequelize')
const User = require('../models/User')
const Post = require('../models/Post')

const sequelize = new Sequelize('twitter-lite', 'root', 'root', {
  dialect: 'mysql',
  host: 'localhost',
  define: { underscored: true }
})

// Relationships go here
Post.belongsTo(User, { onDelete: 'CASCADE' })

module.exports = sequelize
