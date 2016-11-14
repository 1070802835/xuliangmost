/**
 * Created by Administrator on 2016/11/2.
 */

if($.cookie("flag")){
	checkCookie();
}else{
	$("#ul-mid").css('display','block');
	$("#ul-l-m").css('display','none');
}


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
		border:"1px solid #f3f3f5",
		borderBottom:0
	})
});

$("#ul-right li").eq(3).hover(function () {
	$("#gd").slideDown("fast").css({background:"white"});
	$(this).css({
		background:"white",
		border:"1px solid #dfdedf",
		borderBottom:0
	})
},function () {
	$("#gd").css("display","none");
	$(this).css({
		background:"#f3f3f5",
		border:"1px solid #f3f3f5",
		borderBottom:0
	})
});

$("#yg").hover(function () {
	$(this).stop().css({
		background:"white",
		border:"1px solid #dfdedf",
		borderBottom:0

	}).animate({
		height:"64px"
	},300)
},function () {
	$(this).stop().css({
		background:"#f3f3f5",
		border:"1px solid #f3f3f5",
		borderBottom:0
	}).animate({
		height:"30px"
	},200)
});


//上面是右边的
$("#ul-left li").eq(1).hover(function () {
	// alert(1)
	$(this).children().css("font-size","12px").html("Seoul Station");
},function () {
	$(this).children().css("font-size","1vw").html("首尔站");
});




$("#ul-left li").eq(2).hover(function () {
	$("#Code").slideDown("fast");
	$(this).css({
		background:"white",
		border:"1px solid #dfdedf",
		borderBottom:0
	})
},function () {
	$("#Code").css("display","none");
	$(this).css({
		background:"#f3f3f5",
		border:"1px solid #f3f3f5",
		borderBottom:0
	})
});



$("#top2-right-shop").hover(function () {
	$(this).css("borderBottom",0);
	$("#top2-right-shop2").slideDown("fast");
},function () {
	$(this).css("borderBottom","1px solid #d1d3d4");
	$("#top2-right-shop2").css("display","none");
});

$("#signOut").click(function () {
	// $.removeCookie("flag");
	$.cookie("flag","1",{expires:-1,path:"/"});
	window.location.reload();

});

function checkCookie() {
	if($.cookie("user")){
		var oBject=JSON.parse($.cookie("user"));
		var arr=[];
		$.each(oBject,function (key) {
			if(key!="index"){
				arr.push(key);
			}
		});
		for(var i=0;i<arr.length-1;i++){
			for(var k=0;k<arr.length-1;k++){
				if(oBject[arr[i]]<oBject[arr[i+1]]){
					var temp=arr[i];
					arr[i]=arr[i+1];
					arr[i+1]=temp;
				}
			}
		}
		$("#uName").text(arr[0]);
		$("#ul-mid").css('display','none');
	}else{
		$("#ul-mid").css('display','block');
		$("#ul-l-m").css('display','none');
	}
}

