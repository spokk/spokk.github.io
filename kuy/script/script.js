$(document).ready(function () {
    $('.fullpage').fullpage({
        sectionsColor: ['red', 'green', 'blue', 'yellow'],
        //        anchors: ['first', 'second', 'third', 'fourth'],
        onLeave: function (link, index) {
            if (index == 1) {
                $('.bottle-block').css({
                    'transform': 'translateX(215%) translateY(10%) scale(2.4)'
                });
                $('.water-block').fadeOut(300);

            } else if (index == 2) {
                $('.bottle-block').css({
                    'transform': 'translateX(190%) translateY(-20%) scale(1.2)',
                });
                $('.water-block').fadeOut(300);

            } else if (index == 3) {
                $('.bottle-block').css({
                    'transform': 'translateX(80%) translateY(-5%) scale(1.2)'
                });
                $('.water-block').fadeOut(300);

            } else if (index == 4) {
                $('.bottle-block').css({
                    'transform': 'translateX(113%) translateY(80%) scale(1)',
                    
                });

                $('.water-block').delay(900).fadeIn(900);
            }
        },
    });
});
