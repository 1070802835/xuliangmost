/**
 * Created by Administrator on 2016/11/1.
 */
$("#First").bind("change",function (){
	if($(this).val()=="phone"){
		$("#t1").css("display","block").next().css("display","none").val("");
	}
	if($(this).val()=="Email"){
		$("#t0").css("display","block");
		$("#t1").css("display","none").val("");
	}
});
$("#Sure").mouseenter(function () {
	if($("input[name='Check1']").is(":checked")){
		$("#Sure").addClass("Sure");
	}
}).mouseleave(function () {
	$("#Sure").removeAttr("class")
}).mousedown(function (e) {
	e.preventDefault();
	if($("input[name='Check1']").is(":checked")){
		$("#Sure").css({background:"#e95053",lineHeight:"44px"}).addClass("Sure");
	}
}).mouseup(function () {
	$("#Sure").css({background:"#e1373a",lineHeight:"40px"})
})


checknum();
function checknum() {
	for(var i=0;i<4;i++){
		var num=Math.floor(Math.random()*10);
		$("#checknum").html($("#checknum").html()+num);
	}

}
$("#checknum").mousedown(function (e) {
	e.preventDefault();
	$(this).html("");
	checknum();
}).hover(function () {
	$(this).css("cursor","pointer")
});

$("#t1").blur(function () {
	if($("#t1").val().length==0){
		$("#Error").addClass("errorShow").text("请输入手机号")
	}
}).focus(function () {
	$(this).keyup(function () {
		checksign.phone();
	})
})

$("#t0").blur(function () {
	// checksign.Email();
});




var checksign={
	phone:function () {
		var reg = /^1[3458]{1}[0-9]{9}$/;
		if(!reg.test($("#t1").val())){
			$(this).parent().css("borderColor","red");
			$("#Error").text("手机号输入格式有误")
		}else{
			$(this).parent().css("borderColor","#e3e2e2");
			$("#Error").css("display","none").removeClass("errorShow");
		}
	},
	Email:function () {
		var reg= /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if(!reg.test($("#t0").val())){
			alert("邮箱输入错误")
		}
	}


}
