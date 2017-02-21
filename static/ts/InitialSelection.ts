
class InitialSelection {

    constructor() {
        let self = this;
        $('#selection-display').on('click', function(){
            self.showSection('#section-display', function(){
                new DisplayRole();
            });
        });
        $('#selection-key').on('click', function(){
            self.showSection('#section-keys', function(){
                new KeyRole();
            });
        });
    }

    private showSection(selector : string, callback : () => void) {
        $('#initial-selection').css('display', 'none');
        $(selector).css('display', 'block');
        callback();
    }
}