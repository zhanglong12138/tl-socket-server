export const host = "127.0.0.1";
export const port = "3000";
export const salt = "robotisfuture?";
export const width = 10;
export const height = 10;
export const stage = {
    width,
    height
}
export const birthPosition = [width/2,height/2]
//move deviationOffset range
export const deviationOffset = 1.5 

//Receive message range
export const receiveRange = [9,9]
export default {
    host,
    port,
    salt,
    stage,
    deviationOffset,
    birthPosition,
    receiveRange
}
