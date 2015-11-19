var output = document.getElementById('output');
var i = 0;
var active = {
    x : 2,
    y : 2
};

var Moove = function Moove() {

    var _this = this;
    var params = {
        active : {
            x : 2,
            y : 2
        }
    };

    var divActive;

    this.init = function init() {
        _this.mooveToActive();
    };

    this.setActive = function setActive(gesture) {

        var absX = Math.abs(gesture[0]);
        var absY = Math.abs(gesture[1]);

        if (absX > absY) {
            if (gesture[0] > 0 && params.active.x < 4) {
                params.active.x++;
            } else if (params.active.x > 0) {
                params.active.x--;
            }
        } else {
            if (gesture[1] > 0 && params.active.y < 4) {
                params.active.y++;
            } else if (params.active.y > 0) {
                params.active.y--;
            }
        }

        console.log(params.active);
        _this.mooveToActive();
    };

    this.mooveToActive = function mooveToActive() {

        if (typeof divActive != 'undefined') {
            divActive.style.backgroundColor = '#ffffff';
        }

        divActive = document.getElementById('d' + params.active.y + '_' + params.active.x);
        divActive.style.backgroundColor = '#ff0000';

    };

}

var moove = new Moove();
moove.init();


Leap.loop(function(frame) {

    if(frame.hands && frame.hands.length > 0) {
        console.log('main !');
    }

    if(frame.gestures && frame.gestures.length > 0) {

        frame.gestures.forEach(function(gesture, k) {

            if(gesture.type === 'swipe') {
                moove.setActive(gesture.direction);
            }

        });

    }
});
