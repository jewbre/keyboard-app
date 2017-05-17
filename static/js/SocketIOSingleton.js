/// <reference path="../typings/socketio.d.ts" />
var SocketIOSingleton = (function () {
    function SocketIOSingleton(port) {
        var self = this;
        this.io = io(window.location.origin + ":" + port);
        this.io.on('connect', function () {
            // self.setUpHeartBeat();
        });
    }
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
        this.io.emit('move', { letter: letter });
    };
    SocketIOSingleton.prototype.declareAsDisplay = function (listener) {
        this.io.emit('newDisplay');
        this.io.on('displayLetter', function (data) {
            listener(data);
        });
        this.io.on('winner', function (data) {
            listener(data);
        });
    };
    return SocketIOSingleton;
}());
SocketIOSingleton.instance = null;
