const express = require('express');
const http = require('http');
const path = require('path');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('new connected');

    socket.on('disconnect', () => {
        console.log('disconnected from client');
    })
});

server.listen(port, () => {
    console.log(`server is up and running on port ${port} !`);
})