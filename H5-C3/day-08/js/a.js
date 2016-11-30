define(function (require,exports,module) {
	var b=require("./c");
	exports.fn=function () {
		console.log("most------A");
		$(document).scroll(function () {
			alert("我是A")
		});
		b.bfn();
	};
});