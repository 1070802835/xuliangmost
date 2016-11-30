define(function (require,exports,module) {
		var b=require("./c");
		var tpl1=require("./template.tpl");
		var tpl=require("./template.js");
		var templateTest = function(){
			$(".tpp").html(tpl('tpl1',{list:["a","b","v"]}));
			console.log(tpl1)
		};
		exports.init = function(){
			templateTest();
		}
});