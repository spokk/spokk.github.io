/*mobile menu*/
$(".mobile-menu-logo").click(function () {
    $("header nav ul").slideToggle();
}); /*mobile menu*/

$(function () {
    $(window).resize(function () {
        if ($(window).width() > 786) {
            $("header nav ul").removeAttr("style");
        }
    });
}); /*delete mobile toggle when resize*/
/*mobile menu end*/
