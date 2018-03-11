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

$('#family').toggle(function() {
  $('#well-right').css('visibility', 'visible');
  $('#family_det').css('display', 'block');
}, function() {
  // on mouseout, reset the background colour
  $('#well-right').css('visibility', 'hidden');
  $('#family_det').css('display', 'none');
});

$('#address').toggle(function() {
  $('#well-right').css('visibility', 'visible');
  $('#address_det').css('display', 'block');
}, function() {
  // on mouseout, reset the background colour
  $('#well-right').css('visibility', 'hidden');
  $('#address_det').css('display', 'none');
});

$('#education').toggle(function() {
  $('#well-right').css('visibility', 'visible');
  $('#edu_det').css('display', 'block');
}, function() {
  // on mouseout, reset the background colour
  $('#well-right').css('visibility', 'hidden');
  $('#edu_det').css('display', 'none');
});

$('#work').toggle(function() {
  $('#well-left').css('visibility', 'visible');
  $('#jobs_det').css('display', 'block');
}, function() {
  // on mouseout, reset the background colour
  $('#well-left').css('visibility', 'hidden');
  $('#jobs_det').css('display', 'none');
});

$('#sport').toggle(function() {
  $('#well-left').css('visibility', 'visible');
  $('#sport_det').css('display', 'block');
}, function() {
  // on mouseout, reset the background colour
  $('#well-left').css('visibility', 'hidden');
  $('#sport_det').css('display', 'none');
});

$('#films').toggle(function() {
  $('#well-left').css('visibility', 'visible');
  $('#film_det').css('display', 'block');
}, function() {
  // on mouseout, reset the background colour
  $('#well-left').css('visibility', 'hidden');
  $('#film_det').css('display', 'none');
});

$(function() {
	$('#family').click(function() {
		$(this).toggle();
	});
	$('#address').click(function() {
		$(this).toggle();
	});
	$('#education').click(function() {
		$(this).toggle();
	});
	$('#work').click(function() {
		$(this).toggle();
	});
	$('#sport').click(function() {
		$(this).toggle();
	});
	$('#films').click(function() {
		$(this).toggle();
	});
});

