const home = require('./home')
const compose = require('koa-compose')

module.exports = compose([home.routes(), home.allowedMethods()])