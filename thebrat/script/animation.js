(function () {
    var elems = document.querySelectorAll(".example-item");
    window.onload = animate;
    window.onscroll = animate;

    function animate() {
        for (var i = 0; i < elems.length; i++) {
            var offsetY = elems[i].getBoundingClientRect().y;
            if (offsetY < (window.innerHeight - 220)) {
                elems[i].style.maxWidth = 1170 + 'px';
            }
        }
    };
}());
