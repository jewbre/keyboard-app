var DisplayRole = (function () {
    function DisplayRole() {
        var self = this;
        SocketIOSingleton.getInstance().declareAsDisplay(function (letter) {
            self.displayText(letter);
        });
    }
    DisplayRole.prototype.displayText = function (text) {
        console.log(text);
        if (typeof text == 'string') {
            console.log("string");
            $('#display-text').text(text);
        }
        else {
            alert('Winner is ' + text.winner);
        }
    };
    return DisplayRole;
}());
