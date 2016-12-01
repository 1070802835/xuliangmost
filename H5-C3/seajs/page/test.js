define(function (require,exports,module) {
	require("button");
	require("jquery");
	// require("model");
	// var tpl=require("../model/model.tpl");
	// $(document).append($(tpl));
	function init ( param ) {
		// param = param || {};
		// var elem = param.elem;
		// if( elem === undefined){
		// 	throw "no elem init when use model component";
		// 	return;
		// }
		// if( elem instanceof jQuery){
		//
		// }else{
		// 	elem = $( elem );
		//
		// }
		// var $modelWrap = $(".model_wrap");
		// var $modelCon = $(".model_content");
		// $modelCon.html(elem);             //remove()返回移除的元素
		// console.log($modelCon);
		// $modelCon.css ( {
		// 	width:elem.width(),
		// 	height:elem.height(),
		// 	marginLeft:( 0 - elem.width() / 2 ),
		// 	marginTop:( 0 - elem.height() / 2 ),
		// } );
		// $modelCon.children().css("opacity",1);
		return {
			show : function (a) {
				$(a).click(function () {
					$(this).addClass("show");
					alert(1)
				})
			},
			hide : function () {
				$modelWrap.removeClass("show");
			}
		}
	}
	exports.init = init;
});
