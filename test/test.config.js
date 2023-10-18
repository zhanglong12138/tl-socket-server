
let socketAddress = 'ws://game.zxlucky.com'

let account = {
    name:'robot1',
    password:'654321'
}

let salt = require('../config').salt

module.exports = {
    socketAddress,
    account,
    salt,
}