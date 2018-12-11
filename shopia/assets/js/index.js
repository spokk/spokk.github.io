$(document).ready(function () {

    //slick carousel
    $('.banner-slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 400,
        fade: true,
        cssEase: 'linear'
    });

    //slick carousel
    $('.brand-slider').slick({
        dots: false,
        infinite: true,
        speed: 250,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1250,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 660,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });


    /*button scroll*/
    $(document).ready(function () {
        var header_offset = $("header").offset();
        $(window).scroll(function () {
            if (($(this).scrollTop() > 300 && $(window).width() > 767) || header_offset.top > 300) {
                $(".button-scroll").addClass("button-scroll-display");

            }
            else {
                $(".button-scroll").removeClass("button-scroll-display");
            }
        });
    });

    /*scroll to top*/
    $(document).ready(function () {
        $("body").on("click", ".button-scroll", function (event) {
            //отменяем стандартную обработку нажатия по ссылке
            event.preventDefault();

            //забираем идентификатор бока с атрибута href
            var id = $(this).attr('href'),

                //узнаем высоту от начала страницы до блока на который ссылается якорь
                top = $(id).offset().top;

            //анимируем переход на расстояние - top за 800 мс
            $('body,html').animate({scrollTop: top}, 800);
        });
    });

});

