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

	function advButtonClick() {

		if ( advClicks == 1) {
			readMore();
			advClicks = 2;
		} else {
			readLess();
			advClicks = 1;
		}

	}


	function handler1() {
		switch(this.id) {
	    case "#family":
				$('#well-right').css('visibility', 'visible');
				$('#family_det').css('display', 'block');
	        break;
	    case "#address":
	      $('#well-right').css('visibility', 'visible');
	      $('#address_det').css('display', 'block');
	        break;
	    case "#education":
	     	$('#well-right').css('visibility', 'visible');
	      $('#edu_det').css('display', 'block');
	        break;
	    case "#work":
	     	$('#well-left').css('visibility', 'visible');
	     	$('#jobs_det').css('display', 'block');
	        break;
	    case "#sport":
	    	$('#well-left').css('visibility', 'visible');
	    	$('#sport_det').css('display', 'block');
	        break;
	    case "#films":
	      $('#well-left').css('visibility', 'visible');
	     	$('#film_det').css('display', 'block');
	        break;
	    default:
		};
		$(".small_img").one("click", handler2);
	}

	function handler2() {
		switch(this.id) {
		  case "#family":
				$('#well-right').css('visibility', 'hidden');
				$('#family_det').css('display', 'none');
		      break;
		  case "#address":
		    $('#well-right').css('visibility', 'hidden');
		    $('#address_det').css('display', 'none');
		      break;
		  case "#education":
		   	$('#well-right').css('visibility', 'hidden');
		    $('#edu_det').css('display', 'none');
		      break;
		  case "#work":
		   	$('#well-left').css('visibility', 'hidden');
		   	$('#jobs_det').css('display', 'none');
		      break;
		  case "#sport":
		  	$('#well-left').css('visibility', 'hidden');
		  	$('#sport_det').css('display', 'none');
		      break;
		  case "#films":
		    $('#well-left').css('visibility', 'hidden');
		   	$('#film_det').css('display', 'none');
		      break;
		  default:
		};
		$(".small_img").one("click", handler1);
	}



});



