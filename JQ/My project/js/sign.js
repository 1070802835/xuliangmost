/**
 * Created by Administrator on 2016/11/1.
 */

$("#top").load("../base/Top1.html");



// $(".sign-in").click(function () {
// 	$("#Sign").css("display","none");
// 	$("#Sign2").css("display","block");
// });
//
// $(".sign-up").click(function () {
// 	$("#Sign2").css("display","none");
// 	$("#Sign").css("display","block");
// });

checknum();


$("#First").bind("change",function (){
	$("#Error").css("display","none");

	if($(this).val()=="phone"){
		$("#t1").val("").attr("placeholder","请输入手机号码").attr("maxlength","11");

	}
	if($(this).val()=="Email"){
		$("#t1").val("").attr("placeholder","请输入邮箱号");
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




$(".Sure").mousedown(function (e) {
	e.preventDefault();
	$(this).css({
		lineHeight:"45px",
		background:"#ea7173"
	})
}).mouseup(function () {
	$(this).css({background:"#e1373a",lineHeight:"40px"});
});


//登录界面的确认按钮



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
		if($("#First").val()=="phone"){
			$("#Error").css("display","block").text("请输入手机号");
			$("#phone").css("border-color","red");
		}
		// if($("#First").val()=="Email")
		else{
			$("#Error").css("display","block").text("请输入邮箱");
			$("#phone").css("border-color","red");
		}
	}
}).focus(function () {
    // if($("#t1").val()=="phone"){
    //     $(this).attr("maxlength","11");
    //     alert(1)
    // }
    // if($("#t1").val()=="Email"){
    //     $(this).attr("maxlength","");
    // }


	$(this).keyup(function () {
			if($("#First").val()=="phone") {
				checksign.phone();
				if ($("#t1").val().length == 0) {
					$("#Error").text("请输入手机号");
				}
			}
			// if($("#First").val()=="Email")
			else{
				checksign.Email();
				if($("#t1").val().length==0){
					$("#Error").text("请输入邮箱");
				}
			};

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
	if($("#t1").val().length==0){
		if($("#t2").val().length==0){
			$("#sp1,#t2").css("border-color","red");
		}
	}else{
		if($("#t2").val().length==0){
			$("#Error1").css("display","block").text("请输入验证码");
			$("#sp1,#t2").css("border-color","red");
		}
	}
}).focus(function () {
	if($("#t1").val().length==0){
		// if($(this).val()=="phone"){
		// 	$("#Error").css("display","block").text("请输入手机号");
		// 	$("#phone").css("border-color","red");
		// }
		//
		// if($(this).val()=="Email"){
		// 	$("#Error").css("display","block").text("请输入邮箱");
		// 	$("#phone").css("border-color","red");
		// }
			//这里的this  应该改为 "#First"
			//不过我懒得改了




		$("#phone").css("border-color","red");
	}else{
		$(this).keyup(function () {
			if($("#t2").val().length==0){
				$("#Error1").css("display","block").text("请输入验证码");
			}
			checksign.Checknum();
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
			$("#sp1,#t2").css("borderColor","red");
			$("#Error1").css("display","block").text("验证码输入错误")
		}else{
			$("#sp1,#t2").css("borderColor","#e3e2e2");
			$("#Error1").css("display","none");
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

function runTime(That,time) {

	var time1=setInterval(function () {
			time--;
			$(That).val("重新获取:"+time);
			if(time==0){
				clearInterval(time1);
				$(That).removeAttr("disabled").css({background:"red"}).val("点击获取验证码")
			}
	},1000)
}