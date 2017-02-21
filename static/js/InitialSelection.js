var InitialSelection = (function () {
    function InitialSelection() {
        var self = this;
        $('#selection-display').on('click', function () {
            self.showSection('#section-display', function () {
                new DisplayRole();
            });
        });
        $('#selection-key').on('click', function () {
            self.showSection('#section-keys', function () {
                new KeyRole();
            });
        });
    }
    InitialSelection.prototype.showSection = function (selector, callback) {
        $('#initial-selection').css('display', 'none');
        $(selector).css('display', 'block');
        callback();
    };
    return InitialSelection;
}());
