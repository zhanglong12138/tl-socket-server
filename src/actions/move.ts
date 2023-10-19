import CONFIG from '../config/index.ts';
const user = require('../store/user.js')
export default (data:any, socket:any) => {
    let userInfo = user.get(socket.id);
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