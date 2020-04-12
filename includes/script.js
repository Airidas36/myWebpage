$(document).ready(function(){
    var url = window.location.pathname;
    var filename = url.substring(url.lastIndexOf('/') + 1);
    $('.nav-item').each(function(){
        $(this).removeClass('active');
    });
    $('.navbar-nav > li > a[href="' + filename + '"]').parent().addClass('active');
});
$(document).ready(function(){
    'use strict';
    window.addEventListener('load', function () {
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
    $(window).scrollTop(0);
});

$(document).ready(function(){
    $('#loginmodalbutton').hover(function () {
        $('#loginbody').css('backdrop-filter', 'blur(0px) grayscale(0%) hue-rotate(360deg)');
        $('#loginbody').css('-webkit-backdrop-filter', 'blur(0px) grayscale(0%) hue-rotate(360deg)');

    }, function () {
        $('#loginbody').css('backdrop-filter', 'blur(5px) grayscale(100%)');
        $('#loginbody').css('-webkit-backdrop-filter', 'blur(5px) grayscale(100%)');
    });

    $('#signupmodalbutton').hover(function () {
        $('#signupbody, #signuphead').css('backdrop-filter', 'blur(0px)');
        $('#signupbody, #signuphead').css('-webkit-backdrop-filter', 'blur(0px)');

    }, function () {
        $('#signupbody, #signuphead').css('backdrop-filter', 'blur(5px)');
        $('#signupbody, #signuphead').css('-webkit-backdrop-filter', 'blur(5px)');
    });
    var yearinDelay = 0;
    var yearoutDealay = 800;
    var titleinDelay = 400;
    var titleoutDelay = 400;
    var descinDelay = 800;
    var descoutDelay = 0;
    $('#firstslide').hover(function () {
        $('#firstslide h1').delay(yearinDelay).animate({"opacity": "1"}, 700);
        $('#firstslide h3').delay(titleinDelay).animate({"opacity": "1"}, 700);
        $('#firstslide h4').delay(descinDelay).animate({"opacity": "1"}, 700);

    }, function () {
        $('#firstslide h1').delay(yearoutDealay).animate({"opacity": "0"}, 700);
        $('#firstslide h3').delay(titleoutDelay).animate({"opacity": "0"}, 700);
        $('#firstslide h4').delay(descoutDelay).animate({"opacity": "0"}, 700);
    });
    $('#secondslide').hover(function () {
        $('#secondslide h1').delay(yearinDelay).animate({"opacity": "1"}, 700);
        $('#secondslide h3').delay(titleinDelay).animate({"opacity": "1"}, 700);
        $('#secondslide h4').delay(descinDelay).animate({"opacity": "1"}, 700);

    }, function () {
        $('#secondslide h1 ').delay(yearoutDealay).animate({"opacity": "0"}, 700);
        $('#secondslide h3 ').delay(titleoutDelay).animate({"opacity": "0"}, 700);
        $('#secondslide h4 ').delay(descoutDelay).animate({"opacity": "0"}, 700);
    });
    $('#thirdslide').hover(function () {
        $('#thirdslide h1').delay(yearinDelay).animate({"opacity": "1"}, 700);
        $('#thirdslide h3').delay(titleinDelay).animate({"opacity": "1"}, 700);
        $('#thirdslide h4').delay(descinDelay).animate({"opacity": "1"}, 700);

    }, function () {
        $('#thirdslide h1').delay(yearoutDealay).animate({"opacity": "0"}, 700);
        $('#thirdslide h3').delay(titleoutDelay).animate({"opacity": "0"}, 700);
        $('#thirdslide h4').delay(descoutDelay).animate({"opacity": "0"}, 700);
    });
    $('#fourthslide').hover(function () {
        $('#fourthslide h1').delay(yearinDelay).animate({"opacity": "1"}, 700);
        $('#fourthslide h3').delay(titleinDelay).animate({"opacity": "1"}, 700);
        $('#fourthslide h4').delay(descinDelay).animate({"opacity": "1"}, 700);

    }, function () {
        $('#fourthslide h1').delay(yearoutDealay).animate({"opacity": "0"}, 700);
        $('#fourthslide h3').delay(titleoutDelay).animate({"opacity": "0"}, 700);
        $('#fourthslide h4').delay(descoutDelay).animate({"opacity": "0"}, 700);
    });
    $('#fifthslide').hover(function () {
        $('#fifthslide h1').delay(yearinDelay).animate({"opacity": "1"}, 700);
        $('#fifthslide h3').delay(titleinDelay).animate({"opacity": "1"}, 700);
        $('#fifthslide h4').delay(descinDelay).animate({"opacity": "1"}, 700);

    }, function () {
        $('#fifthslide h1').delay(yearoutDealay).animate({"opacity": "0"}, 700);
        $('#fifthslide h3').delay(titleoutDelay).animate({"opacity": "0"}, 700);
        $('#fifthslide h4').delay(descoutDelay).animate({"opacity": "0"}, 700);
    });
    $('#sixthslide').hover(function () {
        $('#sixthslide h1').delay(yearinDelay).animate({"opacity": "1"}, 700);
        $('#sixthslide h3').delay(titleinDelay).animate({"opacity": "1"}, 700);
        $('#sixthslide h4').delay(descinDelay).animate({"opacity": "1"}, 700);

    }, function () {
        $('#sixthslide h1').delay(yearoutDealay).animate({"opacity": "0"}, 700);
        $('#sixthslide h3').delay(titleoutDelay).animate({"opacity": "0"}, 700);
        $('#sixthslide h4').delay(descoutDelay).animate({"opacity": "0"}, 700);
    });
    $('#seventhslide').hover(function () {
        $('#seventhslide h1').delay(yearinDelay).animate({"opacity": "1"}, 700);
        $('#seventhslide h3').delay(titleinDelay).animate({"opacity": "1"}, 700);
        $('#seventhslide h4').delay(descinDelay).animate({"opacity": "1"}, 700);

    }, function () {
        $('#seventhslide h1').delay(yearoutDealay).animate({"opacity": "0"}, 700);
        $('#seventhslide h3').delay(titleoutDelay).animate({"opacity": "0"}, 700);
        $('#seventhslide h4').delay(descoutDelay).animate({"opacity": "0"}, 700);
    });
    $('#eightslide').hover(function () {
        $('#eightslide h1').delay(yearinDelay).animate({"opacity": "1"}, 700);
        $('#eightslide h3').delay(titleinDelay).animate({"opacity": "1"}, 700);
        $('#eightslide h4').delay(descinDelay).animate({"opacity": "1"}, 700);

    }, function () {
        $('#eightslide h1').delay(yearoutDealay).animate({"opacity": "0"}, 700);
        $('#eightslide h3').delay(titleoutDelay).animate({"opacity": "0"}, 700);
        $('#eightslide h4').delay(descoutDelay).animate({"opacity": "0"}, 700);
    });
});