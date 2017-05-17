class DisplayRole {

    constructor() {
        let self = this;
        SocketIOSingleton.getInstance().declareAsDisplay(function (letter: string|{winner : string}) {
            self.displayText(letter);
        });
    }

    private displayText(text: string|{winner:string}) {
        console.log(text);
        if(typeof text == 'string') {
            console.log("string");
            $('#display-text').text(text);
        } else {
            alert('Winner is ' + text.winner);
        }
    }
}