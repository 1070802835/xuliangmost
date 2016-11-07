var flag=true;
$("#rightNav-left .bibo").click(function () {
	if(flag){
		$("#rightNav").stop().animate({
			right:0
		},400)
	}else{
		$("#rightNav").stop().animate({
			right:"-382px"
		},400)
	}
	flag=!flag;
});
var tar1={
	scrollTop:0
};
$("#rightNav-left .biubiubiu1").click(function () {
	$("body,html").animate(tar1,4000,"easeOutBounce")
});




var Height1=parseInt($("body,html").css("height"))/2-50;
$("#rightNav-left").css({
	top:Height1
});

