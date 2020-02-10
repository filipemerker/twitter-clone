const Sequelize = require('sequelize')
const sequelize = require('../utils/database')

const PostReference = sequelize.define('post_reference', {
  reference_type: Sequelize.STRING(50)
}, { freezeTableName: true })

module.exports = PostReference
