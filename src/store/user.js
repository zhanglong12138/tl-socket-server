//create user store
const user = new Map();
module.exports = user;

module.exports.getAllUser = () => {
    return Array.from(user).map(e=>e[1])
}

module.exports.getUserInfoByName = (name)=>{
    
}
