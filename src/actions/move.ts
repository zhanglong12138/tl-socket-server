import CONFIG from '../config/index.ts';
const user = require('../store/user.js')
export default (data:any, socket:any) => {
    let userInfo = user.get(socket.id);
    console.log('userInof',userInfo,user)
    let {direction,offset} = data;
    {
        //check if it is reasonable
        if(offset>CONFIG.deviationOffset){
            return
        }
    }
    if(direction=='row'){
        let positionx = userInfo.position[0] + offset;
        if(positionx-0.5<0 || positionx + 0.5>CONFIG.stage.width){
            console.log('not in the stage')
            return
        }
        userInfo.position[0] = positionx;
    }
    if(direction=='column'){
        let positiony = userInfo.position[1] + offset;
        if(positiony-0.5<0 || positiony + 0.5>CONFIG.stage.height){
            console.log('not in the stage')
            return
        }
        userInfo.position[1] = positiony;
    }

    user.set(socket.id, userInfo);
}