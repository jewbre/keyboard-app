var server = require('http').createServer();
var io = require('socket.io')(server);

var TIMEOUT_AMOUNT = 5 * 1000; // 5 minutes

var timeout = 0;
var winner = '';
var clients = [];

io.on('connection', function(client){

    clients.push(client);

    client.on('move', function(data){

        if(typeof(data.letter) !== 'undefined') {
            winner = data.letter;
            clearTimeout(timeout);
            timeout = setTimeout(function() {
                console.log('winner');
                broadcastToClients('winner', {winner: winner});
            }, TIMEOUT_AMOUNT);

            console.log('Event: move');
            console.log(data);

            broadcastToClients('displayLetter', data.letter);
        }

    });

    client.on('disconnect', function () {
        console.log('Event: disconnected');
    });

});

function broadcastToClients(eventName, data) {
    for(var k in clients) {
        var c = clients[k];
        if(!c.disconnected) {
            c.emit(eventName, data);
        }
    }
}
server.listen(3010);