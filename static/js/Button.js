var Button = (function () {
    function Button(letter, onClickListener) {
        this._letter = letter;
        this.onClickListener = onClickListener;
    }
    Object.defineProperty(Button.prototype, "letter", {
        get: function () {
            return this._letter;
        },
        enumerable: true,
        configurable: true
    });
    Button.prototype.onClick = function () {
        this.onClickListener.onClick(this);
    };
    return Button;
}());
