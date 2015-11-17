function onWeioReady() {
    console.log("DOM is loaded, websocket is opened");

    blinkTitle();
}

function blinkTitle() {
    var title  = document.getElementById('title');
    var colors = ['#383838', '#D2527F'];
    var i      = 0;

    setInterval(function() {

        title.style.color = colors[i];
		i = i === 0 ? 1 : 0;

    }, 500);
};
