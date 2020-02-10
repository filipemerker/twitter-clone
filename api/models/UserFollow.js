const sequelize = require('../utils/database')

const UserFollow = sequelize.define('user_follow', {}, { freezeTableName: true })

module.exports = UserFollow
