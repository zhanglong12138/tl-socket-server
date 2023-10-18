const io = require('socket.io-client');
const md5 = require('md5');
const isTestLogout = true //test logout
const {socketAddress, account, salt} = require('./test.config')

const socket = io(socketAddress, {
    // transports: ['websocket'],
    query: {
        method: 'login',
        name: account.name,
        password: md5(account.password+salt),
    },
    autoConnect: true,
    reconnection: true,
});

//listen connect event
socket.on('connect', () => {
  console.log('Connected to the server');
});

socket.on('message', (data) => {
    console.log('Server return:', data);
    //handle server return data
    // let data = JSON.parse(message)
    if(data.code==1 && data.msg=='login success'){
        console.log('message:', data.msg);
        //send test message

        // socket.emit('action',JSON.stringify({type:'send', to:'all', msg:'hello everyone!'}))
        socket.emit('action',{type:'msg', to:'all', msg:'hello everyone!'})
        
        //test logout
        if(isTestLogout){
            setTimeout(()=>{
                socket.emit('logout')
            },3000)
        }
    }
});

// listen disconnect event
socket.on('disconnect', () => {
  console.log('Disconnected from the server');
});