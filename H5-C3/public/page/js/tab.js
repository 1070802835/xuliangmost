define(function (require,exports,module) {
	require("./../css/tab.css");
	require("jquery");
	var tab=require("tabs");
	var obj={
		obj_tab:{
			title:["设计","金融","美术","不知道","设计","金融","美术","不知道"],
			content:["建筑学","经济学","艺术","unknown","建筑学","经济学","艺术","unknown"]
		},
		elem:"div_wrap"
	};
	tab.init(obj);
});
