$(document).ready(function () {

    let topTop = $('#home').offset().top;
    let aboutTop = $('#about').offset().top - 55;
    let startTop = $('#start').offset().top - 55;
    let dappsTop = $('#dapps').offset().top - 55;
    let contactTop = $('#contact').offset().top - 55;

    $(window).resize(function () {
        topTop = $('#home').offset().top;
        aboutTop = $('#about').offset().top - 55;
        startTop = $('#start').offset().top - 55;
        dappsTop = $('#dapps').offset().top - 55;
        contactTop = $('#contact').offset().top - 55;
    });

    $(document).scroll(function () {
        let scrollPos = $(document).scrollTop();

        if (scrollPos >= topTop && scrollPos < aboutTop) {
            $('nav').css({
                'background-color': 'var(--second-color)'
            });
        } else if (scrollPos >= aboutTop && scrollPos < startTop) {
            $('nav').css({
                'background-color': 'var(--first-color)'
            });
        } else if (scrollPos >= startTop && scrollPos < dappsTop) {
            $('nav').css({
                'background-color': 'var(--third-color)'
            });
        } else if (scrollPos >= dappsTop && scrollPos < contactTop) {
            $('nav').css({
                'background-color': 'var(--first-color)'
            });
        } else if (scrollPos >= contactTop) {
            $('nav').css({
                'background-color': 'var(--fourth-color)'
            });
        }
    });

    $('.navbar-nav>li>a').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });

});