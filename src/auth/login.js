const fs = require('fs');
const user = require('../store/user.js')
module.exports = (socket) => {
    const querys = socket.handshake.query

    //login actions read data from "cache/user"
    //if exist return "login success"
    //else return "user not found" or "password error"
    
    //如果是登录操作 读取cache/user中的数据 如果存在则放入user登录用户池中 不存在则返回用户不存在 密码错误则返回密码错误

    fs.readFile('./cache/user/' + querys.name + '.json', (err, data) => {
        if (err) {
            console.log(err)
            socket.emit('message', { code: 0, msg: 'user not found' })
            //close socket
            socket.disconnect()
        } else {
            const user_data = JSON.parse(data)
            console.log('user_data', user_data,querys.password)
            if (user_data.password == querys.password) {
                console.log('login success')
                socket.emit('message', { code: 1, msg: 'login success' })
                let loginTime = new Date().getTime()
                let userData = {
                    ...user_data,
                    loginTime
                }
                user.set(socket.id, userData)
                console.log('user logined', socket.handshake.query.name);
                //update user cache data
                fs.writeFile('./cache/user/' + querys.name + '.json', JSON.stringify(userData), (err) => {
                    if (err) {
                        console.log(err)
                    } else {
                        console.log('user cache data updated')
                    }
                })
            } else {
                socket.emit('message', { code: 0, msg: 'password error' })
                //close socket
                socket.disconnect()
            }
        }
    })
}