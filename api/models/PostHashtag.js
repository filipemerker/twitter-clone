const sequelize = require('../utils/database')

const PostHashtag = sequelize.define('post_hashtag', {}, { freezeTableName: true })

module.exports = PostHashtag
