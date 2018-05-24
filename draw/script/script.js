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


(function anchor_scroll() { //anchor scroll
    var menu = $('.header-nav');
    menu.on("click", "a[href='#contacts']", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 750);
    });
}());


