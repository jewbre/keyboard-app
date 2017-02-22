var server = require('http').createServer();
var io = require('socket.io')(server);

var clients = [];
var displays = [];

io.on('connection', function(client){

    var isSet = false;
    client.on('newClient', function(){
        console.log('Event: newClient');

        if(isSet) {
            client.disconnect();
            return;
        }
        isSet = true;

        clients.push(client);
    });
    client.on('newDisplay', function(){
        console.log('Event: newDisplay');
        if(isSet) {
            client.disconnect();
            return;
        }
        isSet = true;

        displays.push(client);
    });

    client.on('letter', function(data){
        console.log('Event: newLetter');
        console.log(data);

        if(typeof data.letter !== 'string') {
            return;
        }
        var letter = data.letter;
        for(var k in displays) {
            var display = displays[k];
            if(!display.disconnected) {
                display.emit('displayLetter', letter);
            }
        }
    });

    client.on('disconnect', function () {
        console.log('Event: disconnected');
    });

    // set up a heart beat
    var pinged = true;
    client.on('ping', function(){
        console.log('ping');
        pinged = true;
    });

    var interval = setInterval(function () {
        console.log('Interal check');
        if(!pinged) {
            // client.disconnect();
            clearInterval(interval);
        } else {
            pinged = false;
        }
    }, 1000);


});
server.listen(12345);