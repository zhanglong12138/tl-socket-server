const io = require('socket.io-client');
const md5 = require('md5');
const {socketAddress, account, salt} = require('./test.config')
const socket = io(socketAddress, {
    // transports: ['websocket'],
    query: {
        method: 'register',
        name: account.name,
        password: md5(account.password+salt),
    },
    autoConnect: true,
    reconnection: true,
});

// 监听连接事件
socket.on('connect', () => {
  console.log('Connected to the server');
});

socket.on('message', (message) => {
  console.log('Server says:', message);
});