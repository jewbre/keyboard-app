/// <reference path="../typings/jquery.d.ts" />
var SomeBasicListener = (function () {
    function SomeBasicListener(selector) {
        this.selector = selector;
    }
    SomeBasicListener.prototype.init = function () {
        $(this.selector).on('click', function (event) {
            console.log("Clicked");
        });
    };
    return SomeBasicListener;
}());
$(document).ready(function () {
    var listener = new SomeBasicListener('#btn');
    listener.init();
});
