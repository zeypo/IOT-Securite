var password = [
    {hand : "left", finger : 0}
]

var step = 0;


Leap.loop(function(frame) {

    if(frame.hands && frame.hands.length > 0) {

        // if (frame.hands[0].type == "left" && frame.fingers[0].extended == true) {
        //     console.log("true");
        // } else {
        //     console.log("false");
        // }

        var value = password[step];

        var isRightFinger = isOnlyExtended(frame.fingers, value.finger);

        if (frame.hands[0].type == value.hand && frame.fingers[value.finger].extended == true) {
            step++;
        }
        if (step == password.length-1) {
            document.getElementById("title").innerHTML = "Well played";
        }

        console.log('main !');
        console.log(frame);
    }





});


function isOnlyExtended(fingers, fingerExtended) {
    var pass = false;

    fingers.forEach( function(finger, fingerKey) {

    })
}
