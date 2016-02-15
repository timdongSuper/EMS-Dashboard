/* adjusts zoom level on browser resizing depending on aspect ratio */
function adJustZoom() {
    var windowWidth = $(window).width();
    var zoom;
    if($('.aspect-16-9').length > 0) {
        zoom = (windowWidth)/1280;
    } 
    if(zoom >= 1) {
        $(".wrap").css({
            'zoom': zoom,
            'mozTransform':'scale('+zoom+')'
        });
    }
}
window.onload = function(){
    adJustZoom();
    $(window).on("resize", function () {
            adJustZoom();
    });
}

 // 