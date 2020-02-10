const Sequelize = require('sequelize')

const sequelize = new Sequelize('twitter-lite', 'root', 'root', {
  dialect: 'mysql',
  host: 'localhost',
  define: { underscored: true }
})

module.exports = sequelize
