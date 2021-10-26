const express = require('express');
const app = express();
const socket = require('socket.io');
const PORT = process.env.PORT || 3000;

app.use(express.static('public'))
app.set('view engine', 'ejs')

app.use(require('./routes/index'))
app.use(require('./routes/albums'))
app.use(require('./routes/about'))
app.use(require('./routes/contact'))
app.use(require('./routes/chat'))




let server = app.listen(PORT,() => {
    console.log(`Listening on ${PORT}`);
    
})  
let io = socket(server)


io.on('connection', (socket) => {
    console.log('client connected');
    socket.on('postMessage', (clientMsg) => {    //listens for incoming chat messages

        io.emit('updateMessage',clientMsg) //broadcasts back out to all the clients
        
    })
})