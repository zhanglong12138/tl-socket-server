// import {BlockType,Block} from '../model/Block'
// import {Monster, NPC} from '../model/Person'
// require = require('esm')(module /*, options*/);
// const {BlockType,Block} = require('../model/Block');
// const {Monster, NPC} = require('../model/Person');
const {stage :stageParam} = require('../../config');
const {width,height} = stageParam;

const initStage = () => {
    stage.map = Array.from({ length: height }, () => Array(width).fill(0));
};

const generateObstacle = () => {
    //random generate some obstacles 
    for(let i = 0;i<height;i++){
        for(let j = 0;j<width;j++){
            let random = Math.random();
            if(random>0.8){
                stage[i][j] = 1
            }
        }
    }
}

const generateMonster = (count=5) => {
    //random generate some monsters
    for(let i = 0;i<count;i++){
        let randomX = Math.floor(Math.random()*width);
        let randomY = Math.floor(Math.random()*height);
        if(stage[randomY][randomX]!==0){
            i--;
            continue;
        }
        stage[randomY][randomX] = 2;
    }
}

let stage = {
    map:[],
    initStage,
    generateObstacle,
    generateMonster,
};


module.exports = {
    stage,
};