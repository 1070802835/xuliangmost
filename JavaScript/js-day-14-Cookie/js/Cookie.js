
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
	
	addCookie:function(name,value,days){
		var date=new Date();
		date.setDate(date.getDate()+days);
		document.cookie=name+"="+encodeURIComponent(value)+";expires="+date;
		
	},
	
	deleteCookie:function(name){
		var date=new Date();
		date.setDate(date.getDate()-1);
		document.cookie=name+"="+""+";expires="+date;
		
	}
};
	


