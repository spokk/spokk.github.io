$(document).ready(function () {
    $('.fullpage').fullpage({
        sectionsColor: ['red', 'green', 'blue', 'yellow'],
        //        anchors: ['first', 'second', 'third', 'fourth'],
        onLeave: function (link, index) {
            if (index == 1) {
                $('.bottle-block').css({
                    'transform': 'translateX(215%) translateY(0%) scale(3)'
                });
            } else if (index == 2) {
                $('.bottle-block').css({
                    'transform': 'translateX(190%) translateY(-20%) scale(1.2)',
                });
            } else if (index == 3) {
                $('.bottle-block').css({
                    'transform': 'translateX(80%) translateY(-5%) scale(1.2)'
                });
            } else if (index == 4) {
                $('.bottle-block').css({
                    'transform': 'translateX(125%) translateY(80%) scale(1)'
                });
            }
        },
        //        afterLoad: function (link,index) {
        //            if (index == 1) {
        //                $('.bottle-block').css({'right':'0px'});
        //            } else if (index == 2) {
        //                $('.bottle-block').css({'right':'50px'});
        //            }
        //        }
    });
});
