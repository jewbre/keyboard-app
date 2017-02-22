var DisplayRole = (function () {
    function DisplayRole() {
        var self = this;
        SocketIOSingleton.getInstance().declareAsDisplay(function (letter) {
            self.displayText(letter);
        });
    }
    DisplayRole.prototype.displayText = function (text) {
        var displayText = $('#display-text');
        var currentText = displayText.text();
        switch (text) {
            case 'enter':
                console.log('do some search, maybe?');
                break;
            case 'backspace':
                currentText = currentText.substr(0, Math.max(0, currentText.length - 1));
                break;
            default:
                currentText += text;
        }
        displayText.text(currentText);
    };
    return DisplayRole;
}());
