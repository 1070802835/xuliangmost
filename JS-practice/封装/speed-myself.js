var speed={
	sport:function(time,value1,value2,oBject){
		//计时器名称，要运动到的值left/top，要移动的对象
		clearInterval(time);
					var a=parseInt(value1);
					var b=parseInt(value2);
					time=setInterval(function(){
						var flag=true;
						var oDivleft=oBject.offsetLeft;
						var oDivtop=oBject.offsetTop;
						var spedleft=(a-oDivleft)/10;
						var spedtop=(b-oDivtop)/10;
//						if(sped>0){
//							sped=Math.ceil(sped);
//						}else{
//							sped=Math.floor(sped);
//						}
						spedleft=spedleft<0?Math.ceil(spedleft):Math.floor(spedleft);
						spedtop=spedtop<0?Math.ceil(spedtop):Math.floor(spedtop);
						if(oDivleft==a&&oDivtop==b){
							
							
						}else{
							oBject.style.left=oDivleft+spedleft+"px";
							oBject.style.top=oDivleft+spedtop+"px";
							flag=false;
						}
						
						if(flag){
						clearInterval(time);	
						}
						
						
						
					},30)
	}
}
					