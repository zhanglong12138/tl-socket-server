import {io as global}  from '../socket/index.js'
import {birthPosition} from '../config/index.ts'
const user = require('../store/user.js')
const stage = require('../store/stage.js')
export default (data:any, socket:any) => {
    let userInfo = user.get(socket.id);
    //add user to stage
    if(!userInfo.position){
        userInfo.position = birthPosition;
    }
    socket.emit('message', 'logined');
    global.emit('event', {
        type:'logined',
        userInfo
    });
    user.set(socket.id,userInfo);
}