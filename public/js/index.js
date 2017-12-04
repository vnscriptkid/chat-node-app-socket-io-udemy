var socket = io();

socket.on('connect', function () {
    console.log('Connected to server');
})

socket.on('newMessage', function (mes) {
    console.log(mes);
})

socket.on('disconnect', function () {
    console.log('disconnect from server');
})

// create a connection and keep it open
// var socket = io();
// socket.on('connect', function () {
//     console.log('connected to server');
// })

// socket.on('disconnect', function () {
//     console.log('disconnected from server');
// })

// socket.on('newEmail', function (email) {
//     console.log('New email');
//     console.log(email);
// })

// socket.emit('createEmail', {
//     to: 'someone@abc.com',
//     text: 'this is vnscriptkid'
// })