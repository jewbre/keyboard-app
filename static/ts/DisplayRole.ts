
class DisplayRole {


    constructor() {
        let self = this;
        SocketIOSingleton.getInstance().declareAsDisplay(function(letter : string){
            self.displayText(letter);
        });
    }

    private displayText(text : string) {
        let displayText = $('#display-text');

        let currentText = displayText.text();

        switch (text) {
            case 'enter' :
                console.log('do some search, maybe?');
                break;
            case 'backspace':
                currentText = currentText.substr(0, Math.max(0, currentText.length - 1));
                break;
            default:
                currentText += text;
        }

        displayText.text(
            currentText
        );
    }
}