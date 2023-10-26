import CONFIG from '../config/index';
import { io } from '../../src/socket/index.js'
const user = require('../store/user.js')
export default (data:any, socket:any) => {
    //get users around and send to client
    let userInfo = user.get(socket.id);
    let {message,to=false} = data;
    console.log(userInfo.name, ':', message)
    //is user forbidden
    if(userInfo?.isForbiddenMessage){
        return
    }

    if(to){

    }else{
        io.emit('event', {
            type:'message',
            message,
            from:userInfo,
            to:'all'
        });
    }
    

}