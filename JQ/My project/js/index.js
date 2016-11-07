var index = 0;
var time;
var Left=parseFloat($("#Lb").css("height"))/2-parseFloat($("#LB-ann").css("height"))/2;
$("#LB-sp1,#LB-sp2").css("top",Left);
Run();
colorChange();


$(".c1").css("display", "none");
function dd() {
	$("#LB-ul1").children().eq(index).fadeIn(1000).siblings().fadeOut(1000);
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
$("#ann-an li").hover(function () {
	var index1=$(this).index();
	colorChange();
});


function colorChange() {
	$("#ann-an").children().eq(index).css("background","#c7d1d6").siblings().css("background","#787878")
}

for(var k=0;k<4;k++){
	$("#eg a").eq(k).css({
		backgroundPosition:k*-267+'px '+'0px'
	})
}

for(var i=0;i<20;i++){
	if(i<10){
		$("#hot-sign-list a").eq(i).css({
			backgroundPosition:i*-110+'px '+'0px'
		})
	}else{
		$("#hot-sign-list a").eq(i).css({
			backgroundPosition:(i-10)*-110+'px '+'-50px'
		})
	}
}
$("#hot-sign-list a").hover(function () {
	$(this).css("backgroundImage","url('images/index-sign2.png')")
},function () {
	$(this).css("backgroundImage","url('images/index-sign3.png')")
});

for(var j=0;j<10;j++){
	$(".main-list1 a").eq(j).css({
		backgroundPosition:j*-90+'px '+'4px'
	})
}
for(var j=0;j<10;j++){
	$(".main-list2 a").eq(j).css({
		backgroundPosition:j*-90+'px '+'-100px'
	})
}
for(var j=0;j<10;j++){
	$(".main-list3 a").eq(j).css({
		backgroundPosition:j*-90+'px '+'-160px'
	})
}
for(var j=0;j<10;j++){
	$(".main-list4 a").eq(j).css({
		backgroundPosition:j*-90+'px '+'-55px'
	})
}
for(var j=0;j<10;j++){
	$(".main-list5 a").eq(j).css({
		backgroundPosition:j*-90+'px '+'-100px'
	})
}
for(var j=0;j<10;j++){
	$(".main-list6 a").eq(j).css({
		backgroundPosition:j*-90+'px '+'-160px'
	})
}
for(var j=0;j<10;j++){
	$(".main-list7 a").eq(j).css({
		backgroundPosition:j*-90+'px '+'-55px'
	})
}






// for(var j=0;j<70;j++){
// 	if(j<10){
// 		$(".main-jist1 a").eq(j).css({
// 		backgroundPosition:j*-90+'px '+'4px'
// 	})
// 	}else if(j<20){
// 		$(".main-jist2 a").eq(j).css({
// 		backgroundPosition:(j-10)*-90+'px '+'-200px'
// 	})
// 	}else if(j<30){
// 		$(".main-jist3 a").eq(j).css({
// 		backgroundPosition:(j-20)*-90+'px '+'-160px'
// 	})
// 	}else if(j<40){
// 		$(".main-jist4 a").eq(j).css({
// 			backgroundPosition:(j-30)*-90+'px '+'-55px'
// 		})
// 	}else if(j<50){
// 		$(".main-jist5 a").eq(j).css({
// 		backgroundPosition:(j-30)*-90+'px '+'-200px'
// 	})
// 	}else if(j<60){
// 		$(".main-jist6 a").eq(j).css({
// 			backgroundPosition:(j-30)*-90+'px '+'-160px'
// 		})
// 	}else{
// 		$(".main-jist7 a").eq(j).css({
// 			backgroundPosition:(j-30)*-90+'px '+'4px'
// 		})
// 	}
// }





$.ajax({
	url:'json/index-product.json',
	dataType:'json',
	success:function (data) {
		console.log(data);
		// alert(data.length)
		for(var i=0;i<data.length;i++){
			var Id=data[i].id;
			var Name=data[i].name;
			var Sr=data[i].sr;

			creatProduct(Id,Name,Sr);
		};
	},
	error:function () {
		alert(1)
	}
});

function creatProduct(id,name,sr) {
	$(".main-right").append("<dl class='right-dl1'><dt class='right-dt1'><a href='javascript:void(0)'>"+id+"</a></dt><dd>"+name+"</dd><a href='javascript:void(0)' class='right-dl1-a'></a></dl>");
	$(".right-dl1").css({
		width:'156px',
		height:'208px',
		float:'left',
		marginTop:'8px',
		marginLeft:'24px'
	});
	$(".right-dt1").css({
		width:'156px',
			height:'44px',
			lineHeight:'60px',
			textAlign:'center'
	}).children().css({
		color:'#000',
		fontSize:'16px',
		fontWeight:'bolder'
	});
	$(".right-dl1 dd").css({
		width:'156px',
		height:'20px',
		lineHeight:'20px',
		color:'#666',
		textAlign:'center'
	});
	$(".right-dl1-a").css({
		display:'block',
		width:'156px',
		height:'130px',
		background:"url('images/index-product"+sr+".jpg') no-repeat center"

	});
	console.log(sr);

}

