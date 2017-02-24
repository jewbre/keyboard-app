class KeyNote {
    private _kbKey : string;
    private _flag : boolean;
    private _value : string;
    private _sound : string;


    constructor(kbKey: string, flag: boolean, value: string, sound: string) {
        this._kbKey = kbKey;
        this._flag = flag;
        this._value = value;
        this._sound = sound;
    }


    get kbKey(): string {
        return this._kbKey;
    }

    get flag(): boolean {
        return this._flag;
    }

    get value(): string {
        return this._value;
    }

    get sound(): string {
        return this._sound;
    }
}