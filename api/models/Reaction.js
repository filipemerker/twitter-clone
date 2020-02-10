const Sequelize = require('sequelize')
const sequelize = require('../utils/database')

const Reaction = sequelize.define('reaction', {
  id: {
    type: Sequelize.UUID,
    allowNull: false,
    primaryKey: true
  },
  name: Sequelize.STRING(45)
}, { freezeTableName: true })

module.exports = Reaction
