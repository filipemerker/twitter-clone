const Sequelize = require('sequelize')
const sequelize = require('../utils/database')

const User = sequelize.define('user', {
  id: {
    type: Sequelize.UUID,
    allowNull: false,
    primaryKey: true
  },
  profile_picture: Sequelize.STRING(300),
  username: Sequelize.STRING(25),
  full_name: Sequelize.STRING(40)
})

module.exports = User
