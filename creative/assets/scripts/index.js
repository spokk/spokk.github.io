window.onload = function () {
    //header menu
    var header = document.querySelector('.header');
    var about = document.getElementById("about");
    var services = document.getElementById("services");
    var portfolio = document.getElementById("portfolio");
    var contacts = document.getElementById("contacts");

    //navigation
    var openMenuBtn = document.querySelector('.header-btn');
    var menu = document.querySelector('.navbar__list');

    var aboutLink = document.querySelector('a[href="#about"]');
    var servicesLink = document.querySelector('a[href="#services"]');
    var portfolioLink = document.querySelector('a[href="#portfolio"]');
    var contactsLink = document.querySelector('a[href="#contacts"]');

    var links = document.getElementsByClassName('navbar__link');
    var anchors = document.querySelectorAll('a[href*="#"]');

    var isWhite = false;
    var offsetToSection = 0;

    var aboutOffset = about.offsetTop;
    var servicesOffset = services.offsetTop;
    var portfolioOffset = portfolio.offsetTop;
    // var contactsOffset = contacts.offsetTop;

    var aboutHeight = about.offsetHeight;
    var servicesHeight = services.offsetHeight;
    var portfolioHeight = portfolio.offsetHeight;
    // var contactsHeight = contacts.offsetHeight;

    function checkPosition() {
        var windowY = window.scrollY;
        if (windowY > 150 && !isWhite) {
            isWhite = true;
            header.classList.add('header--white')
        } else if (windowY <= 150 && isWhite) {
            isWhite = false;
            header.classList.remove('header--white');
        }
    } //проверка скрола и добавления бэкграунда хедеру

    function checkSections() {
        offsetToSection = window.innerWidth > 991 ? window.scrollY + 74 : window.scrollY + 240;
        // 74 is header height, 240 is mobile open header

        switch (true) {
            case offsetToSection > aboutOffset && offsetToSection < aboutOffset + aboutHeight:
                removeActiveClasses();
                aboutLink.classList.add('navbar__link--active');
                break;
            case offsetToSection > servicesOffset && offsetToSection < servicesOffset + servicesHeight:
                removeActiveClasses();
                servicesLink.classList.add('navbar__link--active');
                break;
            case offsetToSection > portfolioOffset && offsetToSection < portfolioOffset + portfolioHeight:
                removeActiveClasses();
                portfolioLink.classList.add('navbar__link--active');
                break;
            case offsetToSection > portfolioOffset + portfolioHeight:
                removeActiveClasses();
                contactsLink.classList.add('navbar__link--active');
                break;
            default:
                removeActiveClasses();
                break;
        }
    } //переключение активного состояния ссылки в меню по скролу

    function removeActiveClasses() {
        for (var i = 0; i < links.length; i++) {
            links[i].classList.remove('navbar__link--active');
        }
    } //удаление активного класа с линка навигации

    function smoothScrollToAnchors() {
        for (var j = 0; j < anchors.length; j++) {
            anchors[j].addEventListener('click', function (e) {
                var path = this.getAttribute('href');
                if (path.length > 1) {
                    e.preventDefault();
                    document.querySelector(path).scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        }
    } //плавный скрол по якорям

    function mobileToggle() {
        menu.classList.toggle('mobileOpen');
    } //откртыиие/закрытие меню на клик

    checkPosition(); //проверка положения страницы при загрузке
    smoothScrollToAnchors(); //плавный скрол по якорям

    window.addEventListener('scroll', checkPosition); //событие на скрол для бэкграунда хедера
    window.addEventListener('scroll', checkSections); //событие на скрол для смены активной ссылки в меню

    openMenuBtn.addEventListener('click', mobileToggle); // откртыиие/закрытие меню на клик
};