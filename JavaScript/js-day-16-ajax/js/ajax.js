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