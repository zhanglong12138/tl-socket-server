
const {io,server} = require('../socket/index.js')
const { host, port } = require('../config/index.ts');
const { connectEvent } = require('../auth/connect.js');
const user = require('../store/user.js');
const { getAllUser } = require('../store/user.js');
const { stage } = require('../store/stage.js');

// handle socket connect
io.on('connection', (socket) => connectEvent(socket, {
    stage,
    user
}));

server.listen(port, host, () => {
    console.log('Server start on:', host, port);
});

//interval boradcast
let intervalTime = 1000 * 60;
let serverStartTime = new Date().getTime();
let content = "hello everyone!";
setInterval(() => {
    let serverRunTime = new Date().getTime() - serverStartTime;
    io.emit('message', content + " server run time:" + Math.ceil(serverRunTime / 1000 / 60) + 'min');
}, intervalTime);

setInterval(() => {
    // console.log(getAllUser())
    io.emit('data', {
        type: 'stage',
        stage: stage.map,
        user: getAllUser(),
    });
}, 1000);