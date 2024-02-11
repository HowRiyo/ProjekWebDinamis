if (process.env.NODE_ENV !== 'production') {
  require('dotenv')
}


const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const mongoose = require('mongoose')
const App = express()

const indexRouter = require("./routes/index")

const Port = 3000

const Database = mongoose.connection







App.use(expressLayouts)
App.use(express.static('public'))
App.use(express.urlencoded({ extended: false }))
App.set('view engine', 'ejs')
App.set('views', __dirname + '/views')
App.set('layout', 'layouts/layout')

mongoose.connect(process.env.DB_URL, {useNewUrlParser: true})

Database.on('error', error => console.error(error))
Database.once('open', () => console.log('Database udh konek'))


App.use('/', indexRouter)

App.listen(process.env.PORT || Port)
