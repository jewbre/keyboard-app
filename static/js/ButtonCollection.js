/// <reference path="../typings/jquery.d.ts" />
var ButtonCollection = (function () {
    function ButtonCollection() {
        this.buttons = [];
    }
    ButtonCollection.prototype.addButton = function (button) {
        this.buttons.push(button);
        var buttonsContainer = ButtonCollection.getButtonsContainer();
        // Append to container
        buttonsContainer.html(buttonsContainer.html() +
            ButtonCollection.getButtonTemplate(button));
        // Set up click listener
        (function (btn) {
            setTimeout(function () {
                $("#" + ButtonCollection.getButtonId(btn)).on('click', function () {
                    btn.onClick();
                });
            }, 1000);
        })(button);
    };
    ButtonCollection.getButtonTemplate = function (button) {
        return "\n<div class=\"col s12\">\n        <a class=\"waves-effect waves-light btn-large full\" id=\"" + ButtonCollection.getButtonId(button) + "\" data-id=\"" + button.letter + "\">" + button.letter + "</a>\n      </div>\n";
    };
    ButtonCollection.getButtonId = function (button) {
        return "button-id-" + button.letter;
    };
    ButtonCollection.getButtonsContainer = function () {
        return $('#btn-container');
    };
    return ButtonCollection;
}());
