import CONFIG from '../config/index';
import { io } from '../socket/index.js'
const user = require('../store/user.js')
export default (data:any, socket:any) => {
    console.log(data)
    //get users around and send to client
    let userInfo = user.get(socket.id);
    let {msg,to=false} = data;
    console.log(userInfo.name, ':', msg,userInfo?.isForbiddenMessage)
    //is user forbidden
    if(userInfo?.isForbiddenMessage){
        return
    }

    if(to=='all'){
        io.emit('event', {
            type:'say',
            msg,
            from:userInfo,
            to:'all'
        });
    }else{
        
    }
    

}