import CONFIG from '../config/index';
const user = require('../store/user.js')
export default (data:any, socket:any) => {
    //get users around and send to client
    let userInfo = user.get(socket.id);
    let {message} = data;
    console.log(userInfo.name, ':', message)

}