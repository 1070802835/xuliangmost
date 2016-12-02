define(function (require,exports,module) {
	require("./index.css");
	require("jquery");
	var tpl=require("./model.tpl");
	require("handleBars");
	var template=Handlebars.compile(tpl);
	function init(param) {
		var obj=param.obj_tab;
		var elem=param.elem;
		var html=template(obj);

		$(elem).html(html);
		// $(".btn2").click(function () {
		// 	var titleValue=$(".input_title").val().split(",");
		// 	var contentValue=$(".input_content").val().split("/");
		// 	console.log(titleValue);
		// 	console.log(contentValue);
		// 	if(titleValue.length==contentValue.length){
		// 		var obj1={
		// 			title:titleValue,
		// 			content:contentValue
		// 		};
		// 		var html=template(obj1);
		// 		$(elem).html(html);
		// 	}
		// });
		$(".tab_title").click(function (e) {
			e.preventDefault();
			$(".tab_content").hide().eq($(this).index()).show();
		});
		$(".tab_contents").css("height",$(".tab_content").height());
		$(".tab_content").hide().eq(0).show();
	}
	exports.init=init;
});
