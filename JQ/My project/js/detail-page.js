$(".glass").mousemove(function (e) {
	var x1=e.offsetX-75;
	var y1=e.offsetY-70;
	x1 = Math.max(0,Math.min(x1,$(".glass").width()-$(".little-glass").width()));
	y1 = Math.max(0,Math.min(y1,$(".glass").height()-$(".little-glass").height()));
	$(".little-glass").css({
		'display':'block',
		'left':x1+'px',
		'top':y1+'px'
	});

	$(".detailMian-left-glass").css({
		'display':'block'
	});
	var percentx=x1/($(".glass").width()-$(".little-glass").width());
	var percenty=y1/($(".glass").height()-$(".little-glass").height());

	var x2=($(".detailMian-left-img1").width()-$(".detailMian-left-glass").width())*percentx;
	var y2=($(".detailMian-left-img1").height()-$(".detailMian-left-glass").height())*percenty;
	$(".detailMian-left-img1").css({
		'left':-x2+'px',
		'top':-y2+'px'
	});
}).mouseout(function () {
	$(".little-glass").css('display','none');
	$(".detailMian-left-glass").css({
		'display':'none'
	});
});
$(".detailMian-left-ul li").mouseenter(function () {
	$(this).css('borderColor','red').siblings().css('borderColor','#ddd');
	var Index=$(this).index();
	$(".detailMian-left-img").attr('src','images/detail/'+Index+'.jpg')
	$(".detailMian-left-img1").attr('src','images/detail/big'+Index+'.jpg')

});
$(".buySize ul li").click(function () {
	$(this).css("background","red").siblings().css("background","#fff")
});

var Num=1;
$(".mostBuy").children().first().mousedown(function () {
	Num=parseInt($(this).next().val());
	Num--;
	if(Num<=0){
		$(this).next().val(0);
		Num=0;
	}else{
		$(this).next().val(Num);
	}

});
$(".fk").mousedown(function () {
	Num=parseInt($(this).prev().val());
	Num++;
	$(this).prev().val(Num);
});
$(".buyNow").hover(function () {
	$(this).css('background','red').css('color','white')
},function () {
	$(this).css('background','white').css('color','#e60012')
});
$(".KKK ul li").eq(0).css({
	'background':'#cc0011',
	'border':'1px solid #cc0011',
	'color':'white'
});
$(".KKK ul li").click(function () {
	$(this).css({
		'background':'#cc0011',
		'border':'1px solid #cc0011',
		'color':'white'
	}).siblings().css({
		'background':'#fff',
		'border':'1px solid #ccc',
		'color':'#000'
	})
});

