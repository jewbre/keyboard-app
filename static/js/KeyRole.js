var KeyRole = (function () {
    function KeyRole() {
        this.buttonCollection = new ButtonCollection();
        SocketIOSingleton.getInstance().declareAsClient();
        this.initListeners();
    }
    KeyRole.prototype.initListeners = function () {
        var self = this;
        $('#add-new-btn').on('click', function () {
            self.addButton();
        });
        $('#add-enter').on('click', function () {
            var newBtn = new Button('enter', self.getButtonClickListener());
            self.buttonCollection.addButton(newBtn);
        });
        $('#add-backspace').on('click', function () {
            var newBtn = new Button('backspace', self.getButtonClickListener());
            self.buttonCollection.addButton(newBtn);
        });
        $('#letter-form').on('submit', function (eventObject) {
            eventObject.preventDefault();
            eventObject.stopPropagation();
            $('#add-new-btn').click();
        });
    };
    KeyRole.prototype.addButton = function () {
        var letterInput = $('#letter');
        var value = this.escapeHtml(letterInput.val().trim());
        if (value) {
            var newBtn = new Button(value, this.getButtonClickListener());
            this.buttonCollection.addButton(newBtn);
            letterInput.val('');
        }
    };
    KeyRole.prototype.getButtonClickListener = function () {
        return {
            onClick: function (btn) {
                SocketIOSingleton.getInstance().sendLetter(btn.letter);
                console.log('Click on button with: ' + btn.letter);
            }
        };
    };
    KeyRole.prototype.escapeHtml = function (unsafe) {
        return unsafe
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    };
    return KeyRole;
}());
