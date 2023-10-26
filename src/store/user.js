//创建一个单例 共全局操作
const user = new Map();
module.exports = user;

module.exports.getAllUser = () => {
    return Array.from(user).filter(e=>{
        return e[1]
    }) 
}

module.exports.getUserInfoByName = (name)=>{
    
}
