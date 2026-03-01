// Smooth Scrolling 
$('a').on('click', function(event) {
    event.preventDefault();
    var target = this.hash;
    $('html, body').animate({
        scrollTop: $(target).offset().top
    }, 800);
});

// Navigation Highlighting 
$(window).on('scroll', function() {
    var scrollPosition = $(this).scrollTop();
    $('nav a').each(function() {
        var sectionOffset = $(this.hash).offset().top;
        if (sectionOffset <= scrollPosition && sectionOffset + $(this.hash).outerHeight() > scrollPosition) {
            $('nav a').removeClass('active');
            $(this).addClass('active');
        }
    });
});

// Scroll Animations 
$(window).on('scroll', function() {
    $('.fade-in').each(function() {
        var elementTop = $(this).offset().top;
        var viewportBottom = $(window).scrollTop() + $(window).height();
        if (elementTop < viewportBottom) {
            $(this).addClass('fade-in-active');
        }
    });
});