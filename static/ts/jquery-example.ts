/// <reference path="../typings/jquery.d.ts" />

class SomeBasicListener {

    private selector : string;

    constructor(selector: string) {
        this.selector = selector;
    }

    public init():void {
        $(this.selector).on('click', function(event:JQueryEventObject) {
            console.log("Clicked");
        })
    }
}


$(document).ready(function(){
    let listener = new SomeBasicListener('#btn');
    listener.init();
});