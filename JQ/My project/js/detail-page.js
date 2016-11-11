$(".Mid-second-ul2-div").hover(function () {

	$(this).css('z-index','5').css('height','28px');
	$(this).children().last().css({
		display:'block'
	});
}
,function () {
	$(this).children().last().css({
		display:'none'
	});
	$(".Mid-second-ul2-div").css('z-index','0').css('height','27px');
}
);

// for(var i=0;i<10;i++){
// 	$("#Mid-second-ul1 li").eq(i).children().css({
// 		backgroundPosition:i*-96+'px '+'0px'
// 	})
// }