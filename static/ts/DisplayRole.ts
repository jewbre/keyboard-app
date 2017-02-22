class DisplayRole {


    constructor() {
        let self = this;
        SocketIOSingleton.getInstance().declareAsDisplay(function (letter: string) {
            self.displayText(letter);
        });
    }

    private displayText(text: string) {
        let displayText = $('#display-text');

        let currentText = displayText.text();

        switch (text) {
            case 'enter' :
                let url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&tags=${currentText}&api.key=1e6032dcaefa640828c69af54b4877a8&format=json`;
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

        displayText.text(
            currentText
        );
    }
}

function jsonFlickrApi(rsp: FlickApiResponse) {
    let output : string = '';
    for(let photo of rsp.photos.photo) {
        output += `
    <img src="https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg"/>
`;
    }

    $('#photoContainer').html(output);
}

interface FlickApiResponse {
    stat: string;
    photos: {
        photo: {
            farm: number
            id: string
            isfamily: number
            isfriend: number
            ispublic: number
            owner: string
            secret: string
            server: string
            title: string

        }[]
    }
}