define(function (require,exports,module) {
	require("./../css/tab.css");
	require("jquery");
	var tab=require("tabs");
	var obj={
		obj_tab:{
			title:["1","2","3","4","5","6","7","8","9","10","11"],
			content:["I'm demo1","I'm demo2","I'm demo3","I'm demo4","I'm demo5","I'm demo6","I'm demo7","I'm demo8","I'm demo9","I'm demo10","I'm demo11"]
		},
		elem:".div_tab_wrap"
	};
	tab.init(obj);
});
