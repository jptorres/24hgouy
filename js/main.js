/*####################*/
   /*Cloud animation*/
/*####################*/
var widthWindow = $(window).width();

$(document).ready(function(){
	setTimeout("cloudAnimation()", 1000);
});

function cloudAnimation(){
	cloud1();
	/*cloud2();
	cloud3();*/
}

function cloud1(){
	$("#cloud1").animate({left: widthWindow}, 10000).animate({left:"-432px"}, 0);
	setTimeout("cloudAnimation()", 10000);
}
/*function cloud2(){
	$("#cloud2").animate({left: widthWindow}, 20000).animate({left:"-410px"}, 0);
	setTimeout("cloudAnimation()", 15000);
}function cloud3(){
	$("#cloud3").animate({left: widthWindow}, 300000).animate({left:"-485px"}, 0);
	setTimeout("cloudAnimation()", 1000);
}*/