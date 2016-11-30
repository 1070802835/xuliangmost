define(function (require,exports,module) {
	exports.bfn=function () {
		console.log("most----C!");
		$(document).click(function () {
			alert("我是C")
		});
	};
});
