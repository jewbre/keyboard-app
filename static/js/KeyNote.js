var KeyNote = (function () {
    function KeyNote(kbKey, flag, value, sound) {
        this._kbKey = kbKey;
        this._flag = flag;
        this._value = value;
        this._sound = sound;
    }
    Object.defineProperty(KeyNote.prototype, "kbKey", {
        get: function () {
            return this._kbKey;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KeyNote.prototype, "flag", {
        get: function () {
            return this._flag;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KeyNote.prototype, "value", {
        get: function () {
            return this._value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KeyNote.prototype, "sound", {
        get: function () {
            return this._sound;
        },
        enumerable: true,
        configurable: true
    });
    return KeyNote;
}());
