const io = require('socket.io-client');
const md5 = require('md5');
const {socketAddress, account, salt} = require('./test.config')
const isTestLogout = false //test logout

//get process.argv
let argv = process.argv.splice(2)
//transform to object
let actionData = {}
argv.forEach((item)=>{
    let arr = item.split('=')
    actionData[arr[0]] = arr[1]
})

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
    if(data.code==1 ){
        if(data.msg=='login success'){
            //send test action
            socket.emit('action', actionData)
            
            //test logout
            if(isTestLogout){
                setTimeout(()=>{
                    socket.emit('logout')
                },3000)
            }
        }else{
            console.log(data)
        }
    }
});

// listen disconnect event
socket.on('disconnect', () => {
  console.log('Disconnected from the server');
});