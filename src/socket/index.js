

const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: "*", // 允许的域名
        methods: ["GET", "POST"] // 允许的HTTP方法
    }
});

module.exports = {
    io,
    server,
    app
}