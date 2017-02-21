var DisplayRole = (function () {
    function DisplayRole() {
        var self = this;
        SocketIOSingleton.getInstance().declareAsDisplay(function (letter) {
            self.displayText(letter);
        });
    }
    DisplayRole.prototype.displayText = function (text) {
        var displayText = $('#display-text');
        displayText.text(displayText.text() + text);
    };
    return DisplayRole;
}());
