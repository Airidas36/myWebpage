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
      $('.modal-content.card.card-image').css('filter', 'grayscale(0%)');
    }, function() {
      // on mouseout, reset the background colour
      $('.modal-content.card.card-image').css('filter', 'grayscale(100%)');
    });
  });