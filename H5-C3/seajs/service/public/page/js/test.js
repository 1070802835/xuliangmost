/**
 * Created by Administrator on 2016/12/1.
 */
define(function(require,exports,module){
    /*  如果alias里写正下面的话，因为paths和alias的解析可能出现问题
        "button_error":"components/button"
    *   require("button_error");
    *
    * */

    require("button");
    require("jquery");
    var model = require("model");
    $(function(){
        var demo = model.init({
        elem:$(".hah")
    });

    $(".button").click(function(){
        demo.show();
    });
    $(".close").click(function(){
        demo.hide();
    })
    })
});