$(document).ready(function () {

    $('.fullpage').fullpage({
    });

    var controller = new ScrollMagic.Controller({
        globalSceneOptions: {
            duration: window.innerHeight,
            triggerHook: 0.9
        }
    });



    new ScrollMagic.Scene({
            triggerElement: '#sec1'
        })
        .setClassToggle("#btn", "bottomLeft")
        .addTo(controller);

    new ScrollMagic.Scene({
            triggerElement: '#sec1'
        })
        .setClassToggle("#btn2", "bottomRight")
        .addTo(controller);


    new ScrollMagic.Scene({
            triggerElement: "#sec2"
        })
        .setClassToggle("#btn", "bottomLeftRevert")
        .addTo(controller);

    new ScrollMagic.Scene({
            triggerElement: "#sec2"
        })
        .setClassToggle("#btn2", "bottomRightRevert")
        .addTo(controller);


    new ScrollMagic.Scene({
            triggerElement: '#sec3'
        })
        .setClassToggle("#btn", "bottomLeft")
        .addTo(controller);

    new ScrollMagic.Scene({
            triggerElement: '#sec3'
        })
        .setClassToggle("#btn2", "bottomRight")
        .addTo(controller);



    new ScrollMagic.Scene({
            triggerElement: "#sec4"
        })
        .setClassToggle("#btn", "bottomLeftRevert")
        .addTo(controller);

    new ScrollMagic.Scene({
            triggerElement: "#sec4"
        })
        .setClassToggle("#btn2", "bottomRightRevert")
        .addTo(controller);




});
