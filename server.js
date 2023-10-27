require('./src/socket/index.js');
require('./src/actions/worker')
const { stage } = require('./src/store/stage.js');
// const {host,port} = require('./src/config/index.ts');
// const {connectEvent} = require('./src/auth/connect.js');
// const user = require('./src/store/user.js');
// const {getAllUser} = require('./src/store/user.js');
// const {stage} = require('./src/store/stage.js');
// import {log} from './src/utils/log';

stage.initStage();

