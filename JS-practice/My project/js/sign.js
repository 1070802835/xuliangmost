/**
 * Created by Administrator on 2016/11/1.
 */

checknum();


$("#First").bind("change",function (){
	$("#Error").css("display","none");

	if($(this).val()=="phone"){
		$("#t1").val("").attr("placeholder","请输入手机号码")

	}
	if($(this).val()=="Email"){
		$("#t1").val("").attr("placeholder","请输入邮箱号")
	}
});
//点击切换手机号-邮箱



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
		//这里写要触发的事件函数


	}
}).mouseup(function () {
	$("#Sure").css({background:"#e1373a",lineHeight:"40px"});
});

//确认按键   满足条件才能点击




$("#checknum").mousedown(function (e) {
	e.preventDefault();
	$(this).html("");
	checknum();
	checksign.Checknum();
}).hover(function () {
	$(this).css("cursor","pointer")
});
//点击切换验证码




$("#b1").on("click",function () {
	$(this).val("重新获取:10");
	$(this).css({background:"black"}).attr("disabled","true").addClass("b1");
	runTime("#b1",10);

});









$("#t1").blur(function () {
	if($("#t1").val().length==0){
		if($(this).val()=="phone"){
			$("#Error").css("display","block").text("请输入手机号");
			$("#phone").css("border-color","red");
		}

		if($(this).val()=="Email"){
			$("#Error").css("display","block").text("请输入邮箱");
			$("#phone").css("border-color","red");
		}
	}
}).focus(function () {
	$(this).keyup(function () {

		if($("#First").val()=="phone") {
			checksign.phone();
			if ($("#t1").val().length == 0) {
				$("#Error").text("请输入手机号");

			}
		}
		if($("#First").val()=="Email"){
			checksign.Email();
			if($("#t1").val().length==0){
				$("#Error").text("请输入邮箱");
			}
		}

		})
	});
//验证手机号
























// $("#t1").blur(function () {
// 	if($("#t1").val().length==0){
// 		$("#Error").css("display","block").text("请输入手机号");
// 		$("#phone").css("border-color","red");
// 	}
// }).focus(function () {
// 	$(this).keyup(function () {
// 		checksign.phone();
// 		if($("#t1").val().length==0){
// 			$("#Error").css("display","block").text("请输入手机号");
// 			$("#phone").css("border-color","red");
// 		}
// 	})
// });
//验证手机号
//
// $("#t1").blur(function () {
// 	if($("#t1").val().length==0){
// 		$("#Error").css("display","block").text("请输入邮箱");
// 		$("#phone").css("border-color","red");
// 	}
// }).focus(function () {
// 	$(this).keyup(function () {
// 		checksign.Email();
// 		if($("#t1").val().length==0){
// 			$("#Error").css("display","block").text("请输入邮箱");
// 			$("#phone").css("border-color","red");
// 		}
// 	})
// });
//验证邮箱

$("#t2").blur(function () {
	if($("#t2").val().length==0){
		$("#Error1").css("display","block")
			// .text("请输入验证码");
		$("#sp1,#t2").css("border-color","red");
	}
}).focus(function () {
	if($("#t1").val().length==0){
		$("#phone").css("border-color","red");
		$("#Error").css("display","block").text("请输入")
	}else{
		$(this).keyup(function () {
			checksign.Checknum();
			if($("#t2").val().length==0){

				$("#Error1").css("display","block").text("请输入验证码");
				$("#sp1,#t2").css("border-color","red");
			}
		})
	}

});
//验证码









var checksign={
	phone:function () {
		var reg = /^1[3458]{1}[0-9]{9}$/;
		if(!reg.test($("#t1").val())){
			$("#phone").css("border-color","red");
			$("#Error").css("display","block").text("手机号输入格式有误")
		}else{
			$("#phone").css("borderColor","#e3e2e2");
			$("#Error").css("display","none").removeClass("errorShow");
		}
	},


	Email:function () {
		var reg= /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if(!reg.test($("#t1").val())){
			$(this).parent().parent().css("borderColor","red");
			$("#Error").css("display","block").text("邮箱输入格式有误")
		}else{
			$(this).parent().css("borderColor","#e3e2e2");
			$("#Error").css("display","none").removeClass("errorShow");
		}
	},

	Checknum:function () {
		if(parseInt($("#t2").val())!==num){
			$(this).parent().css("borderColor","red");
			$("#Error1").css("display","block").text("验证码输入错误")
		}else{
			$(this).parent().css("borderColor","#e3e2e2");
			$("#Error1").css("display","none").removeClass("errorShow");
		}

	}
};

var num;
function checknum() {
	num=Math.floor(Math.random()*10000);
	if(num>1000){
		$("#checknum").html(num);
	}else{
		checknum();
	}
}

function runTime(That,time1) {
	var tim=time1;
	var time1=setInterval(function () {
			tim--;
			$(That).val("重新获取:"+tim);
			if(tim==0){
				clearInterval(time1);
				$(That).removeAttr("disabled").css({background:"red"}).val("点击获取验证码")
			}
	},1000)
}
