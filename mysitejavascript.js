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

$(function() {
  $('#family').hover(function() {
    $('#well-right').css('visibility', 'visible');
    $('#family_det').css('display', 'block');
  }, function() {
    // on mouseout, reset the background colour
    $('#well-right').css('visibility', 'hidden');
    $('#family_det').css('display', 'none');
  });
  $('#family').onclick(function() {
    $('#well-right').css('visibility', 'visible');
    $('#family_det').css('display', 'block');
  }, function() {
    // on mouseout, reset the background colour
    $('#well-right').css('visibility', 'hidden');
    $('#family_det').css('display', 'none');
  });
});

$(function() {
  $('#address').hover(function() {
    $('#well-right').css('visibility', 'visible');
    $('#address_det').css('display', 'block');
  }, function() {
    // on mouseout, reset the background colour
    $('#well-right').css('visibility', 'hidden');
    $('#address_det').css('display', 'none');
  });
  $('#address').onclick(function() {
    $('#well-right').css('visibility', 'visible');
    $('#address_det').css('display', 'block');
  }, function() {
    // on mouseout, reset the background colour
    $('#well-right').css('visibility', 'hidden');
    $('#address_det').css('display', 'none');
  });
});

$(function() {
  $('#education').hover(function() {
    $('#well-right').css('visibility', 'visible');
    $('#edu_det').css('display', 'block');
  }, function() {
    // on mouseout, reset the background colour
    $('#well-right').css('visibility', 'hidden');
    $('#edu_det').css('display', 'none');
  });
  $('#education').onclick(function() {
    $('#well-right').css('visibility', 'visible');
    $('#edu_det').css('display', 'block');
  }, function() {
    // on mouseout, reset the background colour
    $('#well-right').css('visibility', 'hidden');
    $('#edu_det').css('display', 'none');
  });
});

$(function() {
  $('#work').hover(function() {
    $('#well-left').css('visibility', 'visible');
    $('#jobs_det').css('display', 'block');
  }, function() {
    // on mouseout, reset the background colour
    $('#well-left').css('visibility', 'hidden');
    $('#jobs_det').css('display', 'none');
  });
  $('#work').onclick(function() {
    $('#well-left').css('visibility', 'visible');
    $('#jobs_det').css('display', 'block');
  }, function() {
    // on mouseout, reset the background colour
    $('#well-left').css('visibility', 'hidden');
    $('#jobs_det').css('display', 'none');
  });
});


$(function() {
  $('#sport').hover(function() {
    $('#well-left').css('visibility', 'visible');
    $('#sport_det').css('display', 'block');
  }, function() {
    // on mouseout, reset the background colour
    $('#well-left').css('visibility', 'hidden');
    $('#sport_det').css('display', 'none');
  });
  $('#sport').onclick(function() {
    $('#well-left').css('visibility', 'visible');
    $('#sport_det').css('display', 'block');
  }, function() {
    // on mouseout, reset the background colour
    $('#well-left').css('visibility', 'hidden');
    $('#sport_det').css('display', 'none');
  });
});

$(function() {
  $('#films').hover(function() {
    $('#well-left').css('visibility', 'visible');
    $('#film_det').css('display', 'block');
  }, function() {
    // on mouseout, reset the background colour
    $('#well-left').css('visibility', 'hidden');
    $('#film_det').css('display', 'none');
  });
  $('#films').onclick(function() {
    $('#well-left').css('visibility', 'visible');
    $('#film_det').css('display', 'block');
  }, function() {
    // on mouseout, reset the background colour
    $('#well-left').css('visibility', 'hidden');
    $('#film_det').css('display', 'none');
  });
});

