const sequelize = require('../utils/database')

const PostMention = sequelize.define('post_mention', {}, { freezeTableName: true })

module.exports = PostMention
