
var arr=[];
$.each(JSON.parse($.cookie("name")), function() {
	arr.push(this.id)
});
console.log(arr)
var url="../js/showData.json";
var setting={
	dataType:"json",
	success:function(data){
		var arrList=[];
		var arrLast=[];
		$.each(data,function(){
			arrList.push(this)
		})
		for(var k=0;k<arr.length;k++){
			for(var i=0;i<arrList.length;i++){
				if(parseInt(arr[k])==parseInt(arrList[i].id)){
					arrLast.push(arrList[i])
				}
			}
		}
		var obj={list:arrLast};
		var html1=template("data_list",obj);
		$("#collection").html(html1);
		
		$(".rm_col").click(function(){
			
			var Index=$(this).parent().index()
			var arrCookie=JSON.parse($.cookie("name"));
			arrCookie.splice(Index,1)
			$(this).parent().remove();
			$.cookie("name",JSON.stringify(arrCookie),{expires:14,path:"/"});
		})
		
		
	}
}
$.ajax(url,setting)



