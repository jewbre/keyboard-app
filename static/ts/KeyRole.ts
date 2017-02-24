
class KeyRole {

    private buttonCollection : ButtonCollection;


    constructor() {
        this.buttonCollection = new ButtonCollection();

        SocketIOSingleton.getInstance().declareAsClient();

        this.initListeners();
    }

    private initListeners() : void {
        let self = this;
        $('#add-new-btn').on('click', function() {
            self.addButton();
        });

        $('#add-enter').on('click', function(){
            let newBtn = new Button('enter', self.getButtonClickListener());
            self.buttonCollection.addButton(newBtn);
        });

        $('#add-backspace').on('click', function(){
            let newBtn = new Button('backspace', self.getButtonClickListener());
            self.buttonCollection.addButton(newBtn);
        });

        $('#letter-form').on('submit', function(eventObject){
            eventObject.preventDefault();
            eventObject.stopPropagation();

            $('#add-new-btn').click();
        })
    }

    private addButton() : void {
        let letterInput = $('#letter');
        let value = this.escapeHtml(letterInput.val().trim());

        if(value) {
            let newBtn = new Button(value, this.getButtonClickListener());
            this.buttonCollection.addButton(newBtn);
            letterInput.val('');
        }
    }

    private getButtonClickListener() : ButtonClickListener {
        return {
            onClick(btn : Button) {
                SocketIOSingleton.getInstance().sendLetter(btn.letter);
                console.log('Click on button with: ' + btn.letter);
            }
        }
    }

    private escapeHtml(unsafe : string) : string {
        return unsafe
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

}