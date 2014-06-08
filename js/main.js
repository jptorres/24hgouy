/*####################*/
   /*Cloud animation*/
/*####################*/
var widthWindow = $(window).width();

$(document).ready(function(){
	setTimeout("cloudAnimation()", 1000);
});

function cloudAnimation(){
	cloud1();
}

function cloud1(){
	$("#cloud1").animate({left: widthWindow}, 30000).animate({left:"-350px"}, 0);
	setTimeout("cloudAnimation()", 1000);
}

/*####################*/
   /*countDown*/
/*####################*/
$("#daysCountdown").TimeCircles({
	animation: "thick",
	circle_bg_color: "#3B1E7C",
	fg_width: 0.06,
	time: {
	    Days: {
	    	text: "J", 
			color: "#A6D30B"
		},
	    Hours: {
	    	text: "H",
	    	color: "#A6D30B",
			show:false
	    },
	    Minutes: {
	    	text: "min",
	    	color: "#A6D30B",
	    	show:false
	    },
	    Seconds: {
	    	text: "sec",
	    	color: "#A6D30B",
	    	show:false
	    }
	}
});
$("#hoursCountdown").TimeCircles({
	animation: "thick",
	circle_bg_color: "#3B1E7C",
	fg_width: 0.06,
	time: {
	    Days: {
	    	text: "J", 
			color: "#A6D30B",
			show:false
		},
	    Hours: {
	    	text: "H",
	    	color: "#A6D30B"
	    },
	    Minutes: {
	    	text: "min",
	    	color: "#A6D30B"
	    	
	    },
	    Seconds: {
	    	text: "sec",
	    	color: "#A6D30B"
	    }
	}
});

/*####################*/
     /*Slider*/
/*####################*/
$('.bxslider').bxSlider({
  auto: true,
  mode: 'vertical',
  speed: 1500,
  randomStart: true,
  pager:false,
  controls:false	  	  
});