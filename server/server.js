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

    console.log('a user connected to server');

    socket.emit('newMessage', {
        from: 'Admin',
        text: 'Welcome to the Chat App',
        createdAt: new Date().getTime()
    })

    socket.broadcast.emit('newMessage', {
        from: 'Admin',
        text: 'Someone joined the chat room',
        createdAt: new Date().getTime()
    })

    socket.on('createMessage', (mes) => {
        console.log(mes);
        // io.emit('newMessage', {
        //     from: mes.from,
        //     text: mes.text,
        //     createdAt: new Date().getTime()
        // })
        socket.broadcast.emit('newMessage', {
            from: mes.from,
            text: mes.text,
            createdAt: new Date().getTime()
        })
    })

    socket.on('disconnect', () => {
        console.log('user was disconnected');
    })

})

server.listen(port, () => {
    console.log(`server is up and running on port ${port} !`);
})
// io.on('connection', (socket) => {
//     console.log('new connected');

//     socket.emit('newEmail', {
//         from: 'abc@test.com',
//         text: 'how are you?',
//         createdAt: 123
//     });

//     socket.on('createEmail', (newEmail) => {
//         console.log(newEmail);
//     })

//     socket.on('disconnect', () => {
//         console.log('disconnected from client');
//     })
// });
