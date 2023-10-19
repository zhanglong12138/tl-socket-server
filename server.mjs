import esmodule from './esmodule.mjs';
// import {io,server} from './src/socket/index.js';
const { io,server} = require('./src/socket/index.js');
const {host,port} = require('./src/config/config.js');
const {connectEvent} = require('./src/auth/connect.js');
const user = require('./src/store/user.js');
const {getAllUser} = require('./src/store/user.js');

const {stage} = require('./src/store/stage.js');
stage.initStage();

// handle socket connect
io.on('connection',(socket)=>connectEvent(socket,{
  stage,
  user
}));

//interval boradcast
let intervalTime = 1000*60;
let serverStartTime = new Date().getTime();
let content = "hello everyone!";
setInterval(() => {
  let serverRunTime = new Date().getTime() - serverStartTime;
  io.emit('message', content + " server run time:" + Math.ceil(serverRunTime/1000/60) + 'min');
}, intervalTime);

setInterval(() => {
  io.emit('data', {
    type:'stage',
    stage:stage.map,
    user:getAllUser(),
  });
}, 1000);

server.listen(port,host, () => {
  console.log('Server start on:', host, port);
});

