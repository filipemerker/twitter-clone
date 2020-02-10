const app = require('express')()
const { urlencoded } = require('body-parser')
const sequelize = require('./utils/database')

app.use(urlencoded({ extended: false }))

app.use(require('./routes/user'))

sequelize
  .sync()
  .then(() => app.listen(3000))
  .catch(err => console.log(err))