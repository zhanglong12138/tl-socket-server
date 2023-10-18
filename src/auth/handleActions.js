const user = require('../store/user.js')
const {io:global} = require('../socket/index.js')
const CONFIG = {
    deviationOffset:1.5
}
module.exports = (data, socket, stage) => {
    let userInfo = user.get(socket.id)
    console.log(userInfo.name, ':', data)
    //check if it is reasonable
    if (true) {
        //delete usr's pwd
        delete userInfo.password
    }
    
    const {type} = data;
    let backData = {
        code: 1,
        u:userInfo,
    }

    //login
    if(type=='logined'){
        //add user to stage
        if(!userInfo.position){
            userInfo.position = [0.5,0.5];
        }
        socket.emit('message', 'logined');
        global.emit('event', {
            type:'init',
            userInfo
        });
        user.set(socket.id,userInfo);
    }

    //move
    if(type=='move'){
        let {direction,offset} = data;
        {
            //check if it is reasonable
            if(offset>CONFIG.deviationOffset){
                return
            }
        }
        if(direction=='row'){
            console.log(offset)
            userInfo.position[0] += offset;
        }
        if(direction=='column'){
            userInfo.position[1] += offset;
        }
        user.set(socket.id, userInfo);
    }

    //attack
    if(type=='attack'){
        //check if it is reasonable

    }

    //event
    if(type=='event'){
        //check if it is reasonable

    }

}