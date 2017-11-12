var advClicks = 1;


function readMore() {
    var x = document.getElementsByClassName("hidden-s1")
    for (var i = 0;  i < x.length; i++) {
    	x[i].style.display = "block";}
    document.getElementById("adv-but").innerHTML = "Read less";
}

function readLess() {
	    var x = document.getElementsByClassName("hidden-s1")
    for (var i = 0;  i < x.length; i++) {
    	x[i].style.display = "none";}
    document.getElementById("adv-but").innerHTML = "Read more";
}

function advButtonClick() {

	if ( advClicks == 1) {
		readMore();
		advClicks = 2;
	} else {
		readLess();
		advClicks = 1;
	}

}

