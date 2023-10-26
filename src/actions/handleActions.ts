import eventMap from './eventMap'
const user = require('../store/user.js')
const CONFIG = {
    deviationOffset:1.5
}
const handActionMap = Object.keys(eventMap)
console.log('handActionMap',handActionMap)
module.exports = (data, socket) => {
    let userInfo = user.get(socket.id)
    console.log(userInfo.name, ':', data)
    //check if it is reasonable
    if (true) {
        //delete usr's pwd
        delete userInfo.password
    }
    
    const {type} = data;

    if(!handActionMap.includes(type)){
        return
    }

    eventMap[type](data, socket)

}