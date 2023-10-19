const registerEvent = require('./register.js');
const loginEvent = require('./login.js');
const logoutEvent = require('./logout.js');
const handleActions = require('../actions/handleActions.ts')

exports.connectEvent = (socket,{
    stage,
    user
})=>{
    console.log('user try connected', socket.id, socket.handshake.query.name, 'type:', socket.handshake.query.method);
    
    // handle connect actions
    const querys = socket.handshake.query
    if(querys.method=='register'){
        registerEvent(socket);
    }
    if(querys.method=='login'){
        loginEvent(socket);
    }

    // handle general actions
    socket.on('action', (data)=>handleActions(data,socket,stage));

    // handle logout
    socket.on('logout', ()=>logoutEvent(socket));

    // handle disconnect
    socket.on('disconnect', function () {
        logoutEvent(socket)
        user.delete(socket.id)
        console.log('user disconnected', socket.id, socket.handshake.query.name);
    });
}