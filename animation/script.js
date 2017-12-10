$(document).ready(function () {

    $('.fullpage').fullpage({
        /*sectionsColor:['pink','lightblue','lightyellow','lightgreen'],*/
        css3: true
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
        .setClassToggle("#btn", "bottomLeft") // add class toggle
        .addIndicators() // add indicators (requires plugin)
        .addTo(controller);

    new ScrollMagic.Scene({
            triggerElement: '#sec1'
        })
        .setClassToggle("#btn2", "bottomRight") // add class toggle
        .addIndicators() // add indicators (requires plugin)
        .addTo(controller);





    new ScrollMagic.Scene({
            triggerElement: "#sec2"
        })
        .setClassToggle("#btn", "bottomLeftRevert") // add class toggle
        .addIndicators() // add indicators (requires plugin)
        .addTo(controller);

    new ScrollMagic.Scene({
            triggerElement: "#sec2"
        })
        .setClassToggle("#btn2", "bottomRightRevert") // add class toggle
        .addIndicators() // add indicators (requires plugin)
        .addTo(controller);


    new ScrollMagic.Scene({
            triggerElement: '#sec3'
        })
        .setClassToggle("#btn", "bottomLeft") // add class toggle
        .addIndicators() // add indicators (requires plugin)
        .addTo(controller);

    new ScrollMagic.Scene({
            triggerElement: '#sec3'
        })
        .setClassToggle("#btn2", "bottomRight") // add class toggle
        .addIndicators() // add indicators (requires plugin)
        .addTo(controller);



    new ScrollMagic.Scene({
            triggerElement: "#sec4"
        })
        .setClassToggle("#btn", "bottomLeftRevert") // add class toggle
        .addIndicators() // add indicators (requires plugin)
        .addTo(controller);

    new ScrollMagic.Scene({
            triggerElement: "#sec4"
        })
        .setClassToggle("#btn2", "bottomRightRevert") // add class toggle
        .addIndicators() // add indicators (requires plugin)
        .addTo(controller);




});
