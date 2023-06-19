const config = require('./utils/config')
const mongoose = require('mongoose')
const express = require('express')
const app = express()

mongoose.set('strictQuery', false)

mongoose.connect(config.MONGODB_URI)
    .then(() => console.log('connected'))

module.exports = app

