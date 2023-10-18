const fs = require('fs');
const user = require('../store/user.js')

//save logout time and save user cache data
//保存登出时间 保存用户缓存

module.exports = (socket) => {
    let lastLogoutTime = new Date().getTime()
    let userData = user.get(socket.id)
    if(userData){
        let fileName = './cache/user/'+userData.name+'.json';
        //read cache data
        fs.readFileSync(fileName,(err,userCache)=>{
            if(err){
                console.log(err)
            }else{
                userCache = JSON.parse(userCache)
                console.log('userData',userData)
                    userData = {
                        ...userCache,
                        ...userData,
                        lastLogoutTime
                    }
                    fs.writeFile(fileName,JSON.stringify(userData),(err)=>{
                        if(err){
                            console.log(err)
                        }else{
                            console.log('user cache data updated')
                        }
                    })
            }
        })
    }
    console.log('A user disconnected',socket.id);
}