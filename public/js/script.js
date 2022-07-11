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

$('.nav-toggle').on('click', function () {
    $(this).toggleClass('active');
    $('#header-links').toggleClass('open');
});

$('#header-links a').on('click', function () {
    $('.nav-toggle').removeClass('active');
    $('#header-links').removeClass('open');
});

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function (event) {
    didScroll = true;
});

setInterval(function () {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight) {
        // Scroll Down
        console.log("down")
        $('header').removeClass('show-nav').addClass('hide-nav');
        $('.nav-toggle').removeClass('open');
        $('.menu-left').removeClass('collapse');
    } else {
        // Scroll Up
        if (st + $(window).height() < $(document).height()) {
            console.log("up")
            $('header').removeClass('hide-nav').addClass('show-nav');
        }
    }

    lastScrollTop = st;
}