var index = 0;
var time;
var Left=parseFloat($("#Lb").css("height"))/2-parseFloat($("#LB-ann").css("height"))/2;
$("#LB-sp1,#LB-sp2").css("top",Left);
Run();
colorChange();


$(".c1").css("display", "none");
function dd() {
	$("#LB-ul1").children().eq(index).fadeIn(700).siblings().fadeOut(700);
}
function Run() {
	clearInterval(time);
	time = setInterval(function() {
		index++;
		if(index == 5) {
			index = 0;
		}
		dd();
		colorChange();
	}, 1500)
}



$("#LB-ul1").on("mouseover",function(){
	clearInterval(time);
}).on("mouseout",function(){
	Run()
});




$("#LB-sp1").click(function(e){
	clearInterval(time);
	if(e.target==this){
		index--;
		if(index==-1){
			index=4;
		}
		$("#LB-ul1").children().stop().eq(index).fadeIn(700).siblings().fadeOut(700);
	}
	colorChange();
});



$("#LB-sp2").click(function(e){
	if(e.target==this){
		index++;
		if(index==5){
			index=0;
		}
		$("#LB-ul1").children().stop().eq(index).fadeIn(700).siblings().fadeOut(700);
	}
	colorChange();
});


$("#ann-an").children().mouseenter(function () {
	clearInterval(time);
	$("#LB-ul1").children().stop(true,false);
	index=$(this).index();
	dd();
}).mouseleave(function () {
	Run();
});



function colorChange() {
	$("#ann-an").children().eq(index).css("background","#c7d1d6").siblings().css("background","#787878")
}


