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
                var url = "https://api.flickr.com/services/rest/?method=flickr.photos.search&tags=" + currentText + "&api.key=1e6032dcaefa640828c69af54b4877a8&format=json";
                $.ajax({
                    dataType: "jsonp",
                    url: url,
                    data: {}
                });
                currentText = '';
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
function jsonFlickrApi(rsp) {
    var output = '';
    for (var _i = 0, _a = rsp.photos.photo; _i < _a.length; _i++) {
        var photo = _a[_i];
        output += "\n    <img src=\"https://farm" + photo.farm + ".staticflickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + ".jpg\"/>\n";
    }
    $('#photoContainer').html(output);
}
