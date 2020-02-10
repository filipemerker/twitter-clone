const sequelize = require('../utils/database')

const PostReaction = sequelize.define('post_reaction', {}, { freezeTableName: true })

module.exports = PostReaction