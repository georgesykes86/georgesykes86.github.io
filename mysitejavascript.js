$(document).ready( function() {
	$(".small_img").one("click", handler1);

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

	$("button[id='adv-but']").click(function advButtonClick() {

		if ( advClicks == 1) {
			readMore();
			advClicks = 2;
		} else {
			readLess();
			advClicks = 1;
		}

	});


	function handler1() {
		switch(this.id) {
	    case "family":
				$('#family_det').css('display', 'block');
	        break;
	    case "address":
	      $('#address_det').css('display', 'block');
	        break;
	    case "education":
	      $('#edu_det').css('display', 'block');
	        break;
	    case "work":
	     	$('#jobs_det').css('display', 'block');
	        break;
	    case "sport":
	    	$('#sport_det').css('display', 'block');
	        break;
	    case "films":
	     	$('#film_det').css('display', 'block');
	        break;
	    default:
		};
		$(".small_img").one("click", handler2);
	}

	function handler2() {
		$(".am_container").css('display', 'none');
		$(".small_img").one("click", handler1);
	}



});
