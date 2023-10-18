const fs = require('fs');
const user = require('../store/user.js')

//register actions read data from "cache/user" 
//if exist return "user exist" 
//else create user data file and put it into user pool

//如果是注册操作 读取cache/user中的数据 如果存在则返回用户已存在 不存在则创建用户数据文件 并放入user登录用户池中

module.exports = (socket)=>{
    const querys = socket.handshake.query
    fs.readFile('./cache/user/'+querys.name+'.json',(err,data)=>{
        if(err){
            console.log(err)
            fs.writeFile('./cache/user/'+querys.name+'.json',JSON.stringify({name:querys.name,password:querys.password,friends:[]}),(err)=>{
                if(err){
                    console.log(err)
                }else{
                    console.log('register success!')
                    let loginTime = new Date().getTime()
                    let userData = {
                        name:querys.name,
                        password:querys.password,
                        friends:[],
                        loginTime,
                        registerTime:loginTime,
                    }
                    user.set(socket.id,userData)
                    socket.emit('message',{code:1,msg:'login success'})
                    console.log('user registered',socket.handshake.query.name);
                    console.log('user logined',socket.handshake.query.name);
                    //update user cache data
                    fs.writeFile('./cache/user/'+querys.name+'.json',JSON.stringify(userData),(err)=>{
                        if(err){
                            console.log(err)
                        }else{
                            console.log('user cache data updated')
                        }
                    })
                }
            })
        }else{
            socket.emit('message',{code:0,msg:'user exist'})
            //close socket
            socket.disconnect()
        }
    })
}