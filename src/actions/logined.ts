import {io as global}  from '../socket/index.js'
const user = require('../store/user.js')
const stage = require('../store/stage.js')
export default (data:any, socket:any) => {
    let userInfo = user.get(socket.id);
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