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