const express = require('express');
const path = require('path');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const port = process.env.PORT || 4200;// set PORT of app here


// OLD before production: "start": "ng serve --host 0.0.0.0 --disableHostCheck true",
// ng serve command always generate a new build
// NOW node server.js  // this runs an express server AND socket.io server 
// express is responsible to serve the index.html file generetaded via ng build --prod command
// STACKOVERFLOW https://www.youtube.com/watch?v=lv0QX0jwrTI
app.use(express.static(path.join(__dirname, 'dist/frontend')));

// STACKOVERFLOW https://stackoverflow.com/questions/45222464/syntax-error-in-angular-app-unexpected-token

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/frontend/index.html'));
});


const server = http.createServer(app);

const io = socketIO(server);

let numberOfOnlineUsers = 0;

io.on('connection', (socket) => {
    numberOfOnlineUsers++;
    io.emit('numberOfOnlineUsers', numberOfOnlineUsers);

    console.log(`New user connected. Total = ${numberOfOnlineUsers}`);

    socket.on('disconnect', () => {
        numberOfOnlineUsers--;
        io.emit('numberOfOnlineUsers', numberOfOnlineUsers);
        console.log(`User disconnected. Total = ${numberOfOnlineUsers}`);
    });
});


server.listen(port, () => {
    console.log(`Express server with SocketIO server running on port ${port}`);
});