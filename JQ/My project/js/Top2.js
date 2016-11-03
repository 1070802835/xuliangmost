/**
 * Created by Administrator on 2016/11/2.
 */



$("#ul-right li").eq(2).hover(function () {

	$("#gg").slideDown("fast");
	$(this).css({
		background:"white",
		border:"1px solid #dfdedf",
		borderBottom:0
	})
},function () {
	$("#gg").css("display","none");
	$(this).css({
		background:"#f3f3f5",
		border:"0"
	})
});

$("#ul-right li").eq(3).hover(function () {
	$("#gd").slideDown("fast");
	$(this).css({
		background:"white",
		border:"1px solid #dfdedf",
		borderBottom:0
	})
},function () {
	$("#gd").css("display","none");
	$(this).css({
		background:"#f3f3f5",
		border:"0"
	})
});

$("#yg").hover(function () {
	$(this).stop().css({
		background:"white",
		border:"1px solid #dfdedf",
		borderTop:0
	}).animate({
		height:"64px"
	},300)
},function () {
	$(this).stop().css({
		background:"#f3f3f5",
		border:"0"
	}).animate({
		height:"30px"
	},200)
});


//上面是右边的
$("#ul-left li").eq(1).hover(function () {
	// alert(1)
	$(this).children().css("font-size","10px").html("Seoul Station");
},function () {
	$(this).children().html("首尔站");
});




$("#ul-left li").eq(2).hover(function () {
	$("#Code").slideDown("fast");
	$(this).css({
		background:"white",
		borderBottom:0
	})
},function () {
	$("#Code").css("display","none");
	$(this).css({
		background:"#f3f3f5"
	})
});



$("#top2-right-shop").hover(function () {
	$(this).css("borderBottom",0);
	$("#top2-right-shop2").slideDown("fast");
},function () {
	$(this).css("borderBottom","1px solid #d1d3d4");
	$("#top2-right-shop2").css("display","none");
});




$(".all").hover(function (e) {
	e.preventDefault();
	$("#details").stop().slideDown("fast");
},function () {
	$("#details").stop().slideUp("fast");
});



$("#details dl").hover(function () {
	var Index=$(this).index();
	$(".Detail").stop().eq(Index).css('display','block').animate({
		left:"197px"
	},400);

},function () {
	$(".Detail").stop().css({
		display:'none',
		left:"174px"
	});
});
$(".Deatils p").hover(function () {
	$(this).stop().animate({
		marginLeft:"10px"
	},300)
},function () {
	$(this).stop().css("marginLeft",0)
});
