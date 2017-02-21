
class DisplayRole {


    constructor() {
        let self = this;
        SocketIOSingleton.getInstance().declareAsDisplay(function(letter : string){
            self.displayText(letter);
        });
    }

    private displayText(text : string) {
        let displayText = $('#display-text');
        displayText.text(
            displayText.text() + text
        );
    }
}