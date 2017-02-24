/// <reference path="../typings/lib.d.ts" />
var Piano = (function () {
    function Piano() {
        this.keys = {};
        this.channels = [];
        this.initKeys();
        this.initChannels(32);
    }
    Piano.prototype.initKeys = function () {
        this.keys["z"] = new KeyNote("z", true, "#1A", "tone-1A");
        this.keys["s"] = new KeyNote("s", true, "#1As", "tone-1As");
        this.keys["x"] = new KeyNote("x", true, "#1B", "tone-1B");
        this.keys["c"] = new KeyNote("c", true, "#2C", "tone-2C");
        this.keys["f"] = new KeyNote("f", true, "#2Cs", "tone-2Cs");
        this.keys["v"] = new KeyNote("v", true, "#2D", "tone-2D");
        this.keys["g"] = new KeyNote("g", true, "#2Ds", "tone-2Ds");
        this.keys["b"] = new KeyNote("b", true, "#2E", "tone-2E");
        this.keys["n"] = new KeyNote("n", true, "#2F", "tone-2F");
        this.keys["j"] = new KeyNote("j", true, "#2Fs", "tone-2Fs");
        this.keys["m"] = new KeyNote("m", true, "#2G", "tone-2G");
        this.keys["k1"] = new KeyNote("k 1", true, "#2Gs", "tone-2Gs");
        this.keys[",q"] = new KeyNote(", q", true, "#2A", "tone-2A");
        this.keys["l2"] = new KeyNote("l 2", true, "#2As", "tone-2As");
        this.keys[".w"] = new KeyNote(". w", true, "#2B", "tone-2B");
        this.keys["e"] = new KeyNote("e", true, "#3C", "tone-3C");
        this.keys["4"] = new KeyNote("4", true, "#3Cs", "tone-3Cs");
        this.keys["r"] = new KeyNote("r", true, "#3D", "tone-3D");
        this.keys["5"] = new KeyNote("5", true, "#3Ds", "tone-3Ds");
        this.keys["t"] = new KeyNote("t", true, "#3E", "tone-3E");
        this.keys["y"] = new KeyNote("y", true, "#3F", "tone-3F");
        this.keys["7"] = new KeyNote("7", true, "#3Fs", "tone-3Fs");
        this.keys["u"] = new KeyNote("u", true, "#3G", "tone-3G");
        this.keys["8"] = new KeyNote("8", true, "#3Gs", "tone-3Gs");
        this.keys["i"] = new KeyNote("i", true, "#3A", "tone-3A");
        this.keys["9"] = new KeyNote("9", true, "#3As", "tone-3As");
        this.keys["o"] = new KeyNote("o", true, "#3B", "tone-3B");
        this.keys["p"] = new KeyNote("p", true, "#4C", "tone-4C");
    };
    Piano.prototype.initChannels = function (channelMax) {
        for (var a = 0; a < channelMax; a++) {
            this.channels.push([]);
            this.channels[a]['channel'] = new Audio(); // create a new audio object
            this.channels[a]['finished'] = -1; // expected end time for this channel
            this.channels[a]['keyvalue'] = '';
        }
    };
    Piano.prototype.playNote = function (note) {
        if (typeof this.keys[note] === "undefined") {
            return;
        }
        var keyNote = this.keys[note];
        for (var _i = 0, _a = this.channels; _i < _a.length; _i++) {
            var audiochannel = _a[_i];
            var thistime = new Date();
            if (audiochannel['finished'] < thistime.getTime()) {
                try {
                    audiochannel['finished'] = thistime.getTime() + document.getElementById(keyNote.sound).duration * 1000;
                    audiochannel['channel'] = document.getElementById(keyNote.sound);
                    audiochannel['channel'].currentTime = 0;
                    audiochannel['channel'].volume = 1;
                    audiochannel['channel'].play();
                    audiochannel['keyvalue'] = keyNote.value;
                }
                catch (v) {
                    console.log(v);
                }
                break;
            }
        }
    };
    return Piano;
}());
