/// <reference path="../typings/jquery.d.ts" />

class ButtonCollection {
    private buttons: Button[] = [];

    public addButton(button: Button): void {
        this.buttons.push(button);

        let buttonsContainer = ButtonCollection.getButtonsContainer();

        // Append to container
        buttonsContainer.append(
            ButtonCollection.getButtonTemplate(button)
        );

        // Set up click listener
        (function(btn : Button) : void{
            setTimeout(function(){
                $(`#${ButtonCollection.getButtonId(btn)}`).on('click', function(){
                    btn.onClick();
                });
            }, 500);
        })(button);

    }

    private static getButtonTemplate(button: Button): string {
        return `
<div class="col s12">
        <a class="waves-effect waves-light btn-large full double-size" id="${ButtonCollection.getButtonId(button)}" data-id="${button.letter}">${button.letter}</a>
      </div>
`;
    }

    private static getButtonId(button: Button): string {
        return `button-id-${button.letter}`;
    }

    private static getButtonsContainer() : JQuery {
        return $('#btn-container');
    }
}