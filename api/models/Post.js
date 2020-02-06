const Sequelize = require('sequelize')
const sequelize = require('../utils/database')

const Post = sequelize.define('post', {
  id: {
    type: Sequelize.UUID,
    allowNull: false,
    primaryKey: true
  },
  content: Sequelize.STRING(140),
  is_quote: Sequelize.BOOLEAN,
  is_response: Sequelize.BOOLEAN
})

module.exports = Post
