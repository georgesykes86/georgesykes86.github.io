var advClicks = 1;


function readMore() {
    document.getElementById("hidden").style.display = "block";
    document.getElementById("adv-but").innerHTML = "Read less";
}

function readLess() {
    document.getElementById("hidden").style.display = "none";
    document.getElementById("adv-but").innerHTML = "Read more";
}

function advButtonClick() {

	if ( advClicks == 1) {
		readMore();
		advClicks == 2;
	} else {
		readLess();
		advClicks == 1;
	}

}

