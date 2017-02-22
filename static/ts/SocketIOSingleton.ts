/// <reference path="../typings/socketio.d.ts" />

import Socket = SocketIOClient.Socket;
class SocketIOSingleton {
    private static instance : SocketIOSingleton = null;

    private io : Socket;
    private heartBeatInterval : number;

    private constructor(port : number) {
        let self = this;
        this.io = io(`${window.location.origin}:${port}`);
        this.io.on('connect', function(){
            // self.setUpHeartBeat();
        });
    }

    private setUpHeartBeat() : void {
        let self = this;
        this.heartBeatInterval = setInterval(function(){
            if(self.io.disconnected) {
                clearInterval(self.heartBeatInterval);
            } else {
                console.log('ping');
                console.log(self.io.emit('ping'));
            }
        }, 200);
    }

    public static getInstance() : SocketIOSingleton {
        if(SocketIOSingleton.instance === null) {
            SocketIOSingleton.instance = new SocketIOSingleton(3010);
        }
        return SocketIOSingleton.instance;
    }

    public declareAsClient() : void {
        this.io.emit('newClient');
    }

    public sendLetter(letter : string) : void {
        this.io.emit('letter', {letter : letter});
    }

    public declareAsDisplay(listener : (letter:string) => void) : void {
        this.io.emit('newDisplay');

        this.io.on('displayLetter',function(data : string) {
            listener(data);
        })
    }
}