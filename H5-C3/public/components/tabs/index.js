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

		$("."+elem).html(html);
		$(".tab_title").click(function (e) {
			e.preventDefault();
			$(".tab_content").hide().eq($(this).index()).show();
		});
		$(".tab_contents").css("height",$(".tab_content").height());
		$(".tab_content").hide().eq(0).show();
	}
	exports.init=init;
});
