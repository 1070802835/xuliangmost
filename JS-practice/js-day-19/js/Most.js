


			// ajax通过JSON获取
var ajax={
	getajaxJSON:function(url,Esuccess,Error){
		
		
//		var str="("+data+")";
//		var obj=eval(str);		//JSON.parse(xhr.responseText);第二种写法


		var xhr=new XMLHttpRequest();
		xhr.open("GET",url,true);
		xhr.onreadystatechange=function(){
			if(xhr.readyState==4){
				if(xhr.status==200){
					var arrobject=JSON.parse(xhr.responseText);
					Esuccess(arrobject);
				}else{
					Error();						
				}
			}
		}
		xhr.send();
		
	},
	
	
	// ajax通过text获取
	getajax:function(url,Esuccess,Error){
		var xhr=new XMLHttpRequest();
		xhr.open("GET",url,true);
		xhr.onreadystatechange=function(){
			if(xhr.readyState==4){
				if(xhr.status==200){
					var arrobject=xhr.responseText;
					Esuccess(arrobject);
				}else{
					Error();
				}
			}								
		}
		xhr.send();
	},
	
	
	
	
	// ajax通过post获取
	postajax:function(url,Esuccess,Error,data){
		var xhr=new XMLHttpRequest();
		xhr.open("POST",url,true);
		xhr.onreadystatechange=function(){
			if(xhr.readyState==4){
				if(xhr.status==200){
					var arrobject=xhr.responseText;
					Esuccess(arrobject);
				}else{
					Error();					
				}
			}
		}
		xhr.send(data);
	}
}

	//返回cookie值
var shopping={
	getCookie:function(name){
		var result="";
		var strDivposition=document.cookie;
		var arrstr=strDivposition.split("; ");
		for(var i=0;i<arrstr.length;i++){
			var arrposition=arrstr[i].split("=");
			if(arrposition[0]==name){
				name=arrposition[1];
				result=name;
			}
		}	return decodeURIComponent(result);		
	},		
	
	
	
	//添加cookie值
	addCookie:function(name,value,days){
		var date=new Date();
		date.setDate(date.getDate()+days)
		document.cookie=name+"="+encodeURIComponent(value)+";expires="+date;
		
	},
	
	
	
	//删除cookie值
	deleteCookie:function(name){
		var date=new Date();
		date.setDate(date.getDate()-1)
		document.cookie=name+"="+""+";expires="+date;
		
	}
}


// 组织冒泡
var MP={
	stopPropagation: function(e){
		if(e.stopPropagation){
			e.stopPropagation();
		}else{
			e.cancelBubble=true;
		}
	}	
}



// 获取非内联样式
var ys={
	getStyle:function(obj, attr) {
	//obj==元素名称eg：div
	//attr：属性名称
        if (obj.currentStyle) {   //ie
            return obj.currentStyle[attr];
        } else {
            return window.getComputedStyle(obj, false)[attr];  //非ie
        }
    }
	
}


//跟数字有关的变化框架
var yd={
	move:function(element,target,fn){
		//element为元素名/div		target为对象  里面有属性跟属性值				fn为执行完move之后   需要执行的代码  可不写
		 clearInterval(element.time);
		 element.time=setInterval(function(){
		 	var flag=true;
		 	for(var attr in target){
		 		var current;
		 		if(attr=="opacity"){
		 			current = Math.round(parseFloat(ys.getStyle(element, attr)) * 100);
		 		}else{
		 			current=Math.round(parseFloat(ys.getStyle(element,attr)));
		 		}
		 		if(!current){
		 			current=0;
		 		}
		 		var speed=(target[attr]-current)/10;
		 		speed=speed>0?Math.ceil(speed):Math.floor(speed);
		 		if(target[attr]!==current){
		 			if(attr=="opacity"){
		 				element.style.filter = 'alpha(opacity:' + current + speed+ ')';
                   		element.style.opacity = (current + speed) / 100;
		 			}else{
		 				element.style[attr]=current+speed+"px";
		 			}
		 			flag=false;
		 		}
		 		
		 		if(flag){
		 			clearInterval(element.time);
		 			if(fn){
		 				fn();
		 			}
		 		}
		 	}
		 },30)
	}
}


 