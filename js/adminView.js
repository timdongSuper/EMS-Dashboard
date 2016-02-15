$(document).ready(function() {

    var tipBtn = $("#tipBtn");
    var alertTip = $(".alertTip");
    tipBtn.on("click", function() {
        $(this).toggleClass("tipBtnClick");
        alertTip.toggle();
    });

    window.onresize = function() {
    	adjustSize();
    };
});

adjustSize();
function adjustSize() {
    if ($(document).width() <= 768) {
        $(".content-r").toggleClass("text-right");
        $(".chart-mes-pay").toggleClass("text-right");
        adjustAngle(-44);
    }else{
        $(".content-r").toggleClass("text-right");
        $(".chart-mes-pay").toggleClass("text-right");
    	adjustAngle(-60);
    }
}
function adjustAngle(deg){
	var $chartDialPlateArr = $('.chart-dial-plate');
    var $maxValArr = $chartDialPlateArr.find(".chart-dial-max p");
    var $valueArr = $chartDialPlateArr.find(".chart-dial-mes span");
    var $triangle = $chartDialPlateArr.find('.chart-dial-pointer');

    $chartDialPlateArr.each(function(i) {

        var angleValue = Math.floor($valueArr.eq(i).text() / $maxValArr.eq(i).text() * 264);
        $triangle.eq(i).css("transform", "rotate(" + (angleValue - 132) + "deg) translateY("+deg+"px)");
    });
}