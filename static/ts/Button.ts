
class Button {
    private _letter : string;
    private onClickListener : ButtonClickListener;


    constructor(letter: string, onClickListener: ButtonClickListener) {
        this._letter = letter;
        this.onClickListener = onClickListener;
    }

    get letter(): string {
        return this._letter;
    }

    public onClick() : void {
        this.onClickListener.onClick(this);
    }
}

interface ButtonClickListener {
    onClick(btn : Button) : void;
}