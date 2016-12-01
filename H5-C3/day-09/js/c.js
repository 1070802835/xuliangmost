define(function (require,exports,module) {

	exports.bfn=function () {
		var obj={list:["a","b","v"]};
		console.log("most----C!");
		$(document).click(function () {
			alert("我是C");

		});
		$(".a1").click(function () {
			alert(1)
		})
	};
});
