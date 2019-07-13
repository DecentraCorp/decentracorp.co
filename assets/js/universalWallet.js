$(document).ready(function () {

    $('#featureOneImg, #featureTwoImg, #featureThreeImg').css('opacity', 0);

    $('.navbar-nav>a').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });


    $('#featureOne').waypoint(function () {
        $('#featureOneImg').addClass('fadeIn');
    }, {
        offset: '50%'
    })

    $('#featureTwo').waypoint(function () {
        $('#featureTwoImg').addClass('fadeIn');
    }, {
        offset: '50%'
    })

    $('#featureThree').waypoint(function () {
        $('#featureThreeImg').addClass('fadeIn');
    }, {
        offset: '50%'
    })


});