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

for(var i=0;i<10;i++){
	$("#Mid-second-ul1 li").eq(i).children().css({
		backgroundPosition:i*-92+'px '+'0px'
	})
}



$("#Mid-last-ul li").hover(function () {
		$(this).children().first().css('z-index','4');
		$(this).children().last().css({
			display:'block'
		});
	}
	,function () {
		$(".Mid-last-a").css('z-index','2');
		$(this).children().last().css({
			display:'none'
		});
	}
);

var url="json/detail-List.json";
var setting={
	dataType:'json',
	success:function (data) {
		console.log(data.most1);
		var html=template("List",data.most2);
		$("#detailList").html(html);
	},
	error:function () {
		alert(1)
	}
};
$.ajax(url,setting);



















