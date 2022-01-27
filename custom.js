function responsive() {
    screenWidth = $("body").width();
    section1Height = screenWidth * 900 / 640;
    $("#section1").css("height", section1Height+"px");
    $("#smile_face").css({"margin-left": 0.12*screenWidth+"px", "margin-top": 0.12*section1Height+"px"});
}

$(document).ready(function() {
    responsive();
})

$(window).resize(function() {
    responsive();
})