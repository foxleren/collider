let $ = window.$;

$('.logo').on('click', function (e) {
    e.preventDefault();
    $('.nav-toggle').removeClass('active');
    $('#header-links').removeClass('open');
    $('html, body').animate({
        scrollTop: 0
    }, 750, 'easeInOutQuad')
});

$('a[href^="#"]').on('click', function (event) {
    let $target = $(this.getAttribute('href'));
    if ($target.length) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: $target.offset().top
        }, 750, 'easeInOutQuad');
    }
});

// $('header').on('click', function () {
//     console.log('burger')
//     $(this).toggleClass('active');
//     $('#header-links').toggleClass('open');
// });
//
// $('.nav-toggle').on('click', function(){
//     $('.nav-toggle').toggleClass('active');
// });
//
// $('#header-links a').on('click', function () {
//     $('.nav-toggle').removeClass('active');
//     $('#header-links').removeClass('open');
// });

let scrollPrev = 0;

$(window).scroll(function() {
    let scrolled = $(window).scrollTop();

    if ( scrolled > 100 && scrolled > scrollPrev ) {
        $('header').addClass('hidden');
        $('.nav-toggle').removeClass('active');
        $('#header-links').removeClass('open');
    } else {
        $('header').removeClass('hidden');
    }
    scrollPrev = scrolled;
});