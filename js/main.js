// button to move up
let x = document.getElementById('btn');
window.onscroll = function () {
    if (scrollY >= 400) {
        x.style.display = 'block';

    }
    else {
        x.style.display = 'none';

    }
}
x.onclick = function () {
    scroll({
        left: 0,
        top: 0,
        behavior: 'smooth'
    });
}
/* 1. Proloder */
$(window).on('load', function () {
    $('#preloader-active').delay(450).fadeOut('slow');
    $('body').delay(450).css({
        'overflow': 'visible'
    });
});