const Sequelize = require('sequelize')
const sequelize = require('../utils/database')

const Hashtag = sequelize.define('hashtag', {
  id: {
    type: Sequelize.UUID,
    allowNull: false,
    primaryKey: true
  },
  name: Sequelize.STRING(139),
  usage_count: Sequelize.INTEGER
}, { freezeTableName: true })

module.exports = Hashtag
