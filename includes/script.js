    (function () {
        'use strict';
        window.addEventListener('load', function () {
            var forms = document.getElementsByClassName('needs-validation');
            // Loop over them and prevent submission
            var validation = Array.prototype.filter.call(forms, function (form) {
                form.addEventListener('submit', function (event) {
                    if (form.checkValidity() === false) {
                        event.preventDefault();
                        event.stopPropagation();
                        document.getElementById('loginmodalbutton').style.margin='103px 0px 0px 5.8px';
                    }
                    form.classList.add('was-validated');
                }, false);
            });
        }, false);
    })();

    $(function() {
        $('#loginmodalbutton').hover(function() {
        $('#loginbody').css('backdrop-filter','blur(0px) grayscale(0%)');
        $('#loginbody').css('-webkit-backdrop-filter','blur(0px) grayscale(0%)');

        }, function() {
        // on mouseout, reset the background colour
        $('#loginbody').css('backdrop-filter','blur(5px) grayscale(100%)');
        $('#loginbody').css('-webkit-backdrop-filter','blur(5px) grayscale(100%)');

        });
    });

    $(document).ready(function() {
        $(".nav-item").click(function () {
            $(".nav-item").removeClass("active");
            $(this).addClass("active");     
        });
    });