const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const fs = require('fs');
const io = require('socket.io')(server);

app.use(express.static('src'));

app.get('/', function(req, res){
    fs.readFile('./src/index.html', (err, data) => {
        if(err) throw err;

        res.writeHead(200, {
            'Content-Type' : 'text/html'
        })
        .write(data)
        .end();
    });
});

io.sockets.on('connection', function(socket){ 

});

module.exports = app;
