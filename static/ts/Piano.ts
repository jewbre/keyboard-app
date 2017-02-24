/// <reference path="../typings/lib.d.ts" />
class Piano {
    private keys: {
        [propName: string]: KeyNote;
    } = {};

    private channels: Audio[] = [];


    constructor() {
        this.initKeys();
        this.initChannels(32);
    }

    private initKeys(): void {
        this.keys["1a"] = new KeyNote("z", true, "#1A", "tone-1A");
        this.keys["1as"] = new KeyNote("s", true, "#1As", "tone-1As");
        this.keys["1b"] = new KeyNote("x", true, "#1B", "tone-1B");
        this.keys["2c"] = new KeyNote("c", true, "#2C", "tone-2C");
        this.keys["2cs"] = new KeyNote("f", true, "#2Cs", "tone-2Cs");
        this.keys["2d"] = new KeyNote("v", true, "#2D", "tone-2D");
        this.keys["2ds"] = new KeyNote("g", true, "#2Ds", "tone-2Ds");
        this.keys["2e"] = new KeyNote("b", true, "#2E", "tone-2E");
        this.keys["2f"] = new KeyNote("n", true, "#2F", "tone-2F");
        this.keys["2fs"] = new KeyNote("j", true, "#2Fs", "tone-2Fs");
        this.keys["2g"] = new KeyNote("m", true, "#2G", "tone-2G");
        this.keys["2gs"] = new KeyNote("k 1", true, "#2Gs", "tone-2Gs");
        this.keys["2a"] = new KeyNote(", q", true, "#2A", "tone-2A");
        this.keys["2as"] = new KeyNote("l 2", true, "#2As", "tone-2As");
        this.keys["2b"] = new KeyNote(". w", true, "#2B", "tone-2B");
        this.keys["3c"] = new KeyNote("e", true, "#3C", "tone-3C");
        this.keys["3cs"] = new KeyNote("4", true, "#3Cs", "tone-3Cs");
        this.keys["3d"] = new KeyNote("r", true, "#3D", "tone-3D");
        this.keys["3ds"] = new KeyNote("5", true, "#3Ds", "tone-3Ds");
        this.keys["3e"] = new KeyNote("t", true, "#3E", "tone-3E");
        this.keys["3f"] = new KeyNote("y", true, "#3F", "tone-3F");
        this.keys["3fs"] = new KeyNote("7", true, "#3Fs", "tone-3Fs");
        this.keys["3g"] = new KeyNote("u", true, "#3G", "tone-3G");
        this.keys["3gs"] = new KeyNote("8", true, "#3Gs", "tone-3Gs");
        this.keys["3a"] = new KeyNote("i", true, "#3A", "tone-3A");
        this.keys["3as"] = new KeyNote("9", true, "#3As", "tone-3As");
        this.keys["3b"] = new KeyNote("o", true, "#3B", "tone-3B");
        this.keys["4c"] = new KeyNote("p", true, "#4C", "tone-4C");
    }

    private initChannels(channelMax: number) {
        for (let a = 0; a < channelMax; a++) {									// prepare the channels
            this.channels.push([]);
            this.channels[a]['channel'] = new Audio();						// create a new audio object
            this.channels[a]['finished'] = -1;							// expected end time for this channel
            this.channels[a]['keyvalue'] = '';
        }
    }

    public playNote(note: string) {
        note = note.toLowerCase();
        if(typeof this.keys[note] === "undefined") {
            return;
        }

        let keyNote = this.keys[note];
        for(let audiochannel of this.channels) {
            let thistime = new Date();
            if (audiochannel['finished'] < thistime.getTime()) {
                try
                {
                    audiochannel['finished'] = thistime.getTime() + document.getElementById(keyNote.sound).duration*1000;
                    audiochannel['channel'] = document.getElementById(keyNote.sound);
                    audiochannel['channel'].currentTime = 0;
                    audiochannel['channel'].volume=1;
                    audiochannel['channel'].play();
                    audiochannel['keyvalue'] = keyNote.value;

                }
                catch(v)
                {
                    console.log(v);
                }

                break;
            }
        }
    }
}