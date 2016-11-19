$("#ul1 li").click(function(){
	$(this).css("background","#191919").children().first().css("color","#ff6607")
	$(this).siblings().css("background","#252525").children().first().css("color","#fff");
})

for(var i=0;i<5;i++){
	$("#ul2 li").eq(i).css("top",i*250)	
}

var Index=0;

var time;
gogo();
function gogo(){
	time=setInterval(function(){
		if(Index==4){
			Index=0;
			$("#ul2").css("top","0")
		}
		Index++;
		$("#ul2").stop().animate({
		top:-250*Index+"px"
	},1000)
},2000)
}

$("#ul2").hover(function(){
	clearInterval(time);
	
},function(){
	gogo();
	
})
$("#lb").mouseenter(function(){
	$("#lb span").fadeIn("middle");
})
$("#lb").mouseleave(function(){
	$("#lb span").fadeOut("middle");
})

$("#sp1").click(function(){
	if(!$("#ul2").is(":animated")){
		Index--;
			if(Index<0){
				Index=3;
				$("#ul2").css("top",-4*250)
			}
			$("#ul2").stop().animate({
				top:-250*Index+"px"
			},1000)
		
	}
})

$("#sp1,#sp2").hover(function(){
	clearInterval(time)
})

$("#sp2").click(function(){
	if(!$("#ul2").is(":animated")){
		Index++;
		if(Index==5){
			Index=1;
			$("#ul2").css("top","0")
		}
		$("#ul2").animate({
			top:-250*Index+"px"
		},1000)
	}
	
	
})


setInterval(function(){
	var date=new Date();
	var hour=date.getHours();
	var min=date.getMinutes()
	var m=date.getSeconds();
	$("#time p").html(hour+":"+min+":"+m)
},10)




getShow()
function getShow(){
	var url="js/show1.json";
	var setting={
		dataType:"json",
		success:function(data){
			var obj={list:data};
			var html1=template("tieba",obj);
			$("#cao").html(html1);
			
			
			$(".sp3").click(function(){
				var Id=$(this).attr("lang");
				if(!$.cookie("name")){
					var arr=[];
					var tar={
						id:Id
					}
					arr.push(tar);
					$.cookie("name",JSON.stringify(arr),{expires:14,path:"/"});
				}else{
					var old=JSON.parse($.cookie("name"));
					var flag1=false;
					$.each(old, function() {
						console.log()
						if($(this)[0].id==Id){
							flag1=true
						}
					});
					if(!flag1){
						var tar={
									id:Id
								}
							old.push(tar);
						$.cookie("name",JSON.stringify(old),{expires:14,path:"/"});
					}else{
						alert("已经收藏过啦！")
					}
				}
				
				
				
			})
			
			
			$(".cao1").mouseenter(function(){
	$(this).children(".sp3").css("display","block")
})
$(".cao1").mouseleave(function(){
	$(this).children(".sp3").css("display","none")
})
		}
	}
	$.ajax(url,setting)
}

function getShow2(){
	var url="js/show2.json";
	var setting={
		dataType:"json",
		success:function(data){
			var obj={list:data};
			console.log(obj);
			var html1=template("tieba",obj);
			$("#cao").html(html1);
			
			$(".sp3").click(function(){
				var Id=$(this).attr("lang");
				if(!$.cookie("name")){
					var arr=[];
					var tar={
						id:Id
					}
					arr.push(tar);
					$.cookie("name",JSON.stringify(arr),{expires:14,path:"/"});
				}else{
					var old=JSON.parse($.cookie("name"));
					var flag1=false;
					$.each(old, function() {
						console.log()
						if($(this)[0].id==Id){
							flag1=true
						}
					});
					if(!flag1){
						var tar={
									id:Id
								}
							old.push(tar);
						$.cookie("name",JSON.stringify(old),{expires:14,path:"/"});
					}else{
						alert("已经收藏过啦！")
					}
				}
				
				
				
			})
			
			
			$(".cao1").mouseenter(function(){
	$(this).children(".sp3").css("display","block")
})
$(".cao1").mouseleave(function(){
	$(this).children(".sp3").css("display","none")
})
		}
	}
	$.ajax(url,setting)
}

var flag=true;
$("#p1 a").click(function(){
	if(flag){
		getShow2()
	}else{
		getShow()
	}
	
	flag=!flag
})














