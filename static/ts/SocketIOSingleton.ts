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
        this.io.emit('move', {letter : letter});
    }

    public declareAsDisplay(listener : (letter:string|{winner:string}) => void) : void {
        this.io.emit('newDisplay');

        this.io.on('displayLetter',function(data : string) {
            listener(data);
        });

        this.io.on('winner', function(data : {winner : string}) {
            listener(data);
        });
    }
}