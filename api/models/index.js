const User = require('../models/User')
const Post = require('../models/Post')
const PostMention = require('../models/PostMention')
const PostReference = require('../models/PostReference')
const UserFollow = require('../models/UserFollow')
const Reaction = require('../models/Reaction')
const PostReaction = require('../models/PostReaction')
const Hashtag = require('../models/Hashtag')
const PostHashtag = require('../models/PostHashtag')

PostReaction.belongsTo(Reaction)

Post.belongsTo(User, { onDelete: 'CASCADE' })
User.belongsToMany(Post, { through: PostMention })
Hashtag.belongsToMany(Post, { through: PostHashtag })
Reaction.belongsToMany(Post, {
  through: PostReaction,
  as: 'reaction',
  foreignKey: 'post_id',
  constraints: false
})
User.hasMany(PostReaction)

Post.belongsToMany(Post, {
  as: 'active_post',
  through: PostReference,
  foreignKey: 'passive_post_id'
})
User.belongsToMany(User, {
  as: 'active_user',
  through: UserFollow,
  foreignKey: 'passive_user_id'
})

module.exports = {
  User,
  Post,
  PostMention,
  PostReference
}
