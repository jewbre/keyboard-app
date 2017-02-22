/// <reference path="../typings/socketio.d.ts" />
var SocketIOSingleton = (function () {
    function SocketIOSingleton(port) {
        var self = this;
        this.io = io(window.location.origin + ":" + port);
        this.io.on('connect', function () {
            // self.setUpHeartBeat();
        });
    }
    SocketIOSingleton.prototype.setUpHeartBeat = function () {
        var self = this;
        this.heartBeatInterval = setInterval(function () {
            if (self.io.disconnected) {
                clearInterval(self.heartBeatInterval);
            }
            else {
                console.log('ping');
                console.log(self.io.emit('ping'));
            }
        }, 200);
    };
    SocketIOSingleton.getInstance = function () {
        if (SocketIOSingleton.instance === null) {
            SocketIOSingleton.instance = new SocketIOSingleton(3010);
        }
        return SocketIOSingleton.instance;
    };
    SocketIOSingleton.prototype.declareAsClient = function () {
        this.io.emit('newClient');
    };
    SocketIOSingleton.prototype.sendLetter = function (letter) {
        this.io.emit('letter', { letter: letter });
    };
    SocketIOSingleton.prototype.declareAsDisplay = function (listener) {
        this.io.emit('newDisplay');
        this.io.on('displayLetter', function (data) {
            listener(data);
        });
    };
    return SocketIOSingleton;
}());
SocketIOSingleton.instance = null;
