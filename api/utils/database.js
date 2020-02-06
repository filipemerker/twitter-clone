const Sequelize = require('sequelize')

const sequelize = new Sequelize('twitter-lite', 'root', 'root', {
  dialect: 'mysql',
  host: 'localhost',
  define: { underscored: true }
})

// Relationships go here

module.exports = sequelize
