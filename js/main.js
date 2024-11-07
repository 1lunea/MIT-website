(function ($) {
    "use strict";
    
    // Global animation settings
    const animationSettings = {
        scrollTiming: 800,
        fadeInDelay: 200,
        counterDuration: 2000,
        hoverTransition: 300
    };

    // Initialize all animations
    function initAnimations() {
        $('.animate-on-scroll').each(function() {
            const element = $(this);
            const elementPosition = element.offset().top;
            const windowHeight = $(window).height();
            const scrollPosition = $(window).scrollTop();

            if (elementPosition < (scrollPosition + windowHeight - 100)) {
                element.addClass('animated');
            }
        });

        // Initialize counters with synchronized timing
        $('.counter').each(function(index) {
            const $counter = $(this);
            const delay = index * animationSettings.fadeInDelay;
            
            setTimeout(() => {
                $counter.prop('Counter', 0).animate({
                    Counter: $counter.text()
                }, {
                    duration: animationSettings.counterDuration,
                    easing: 'swing',
                    step: function(now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            }, delay);
        });
    }

    // Smooth scroll with synchronized timing
    $('a[href*="#"]').on('click', function(e) {
        if (this.hash !== '') {
            e.preventDefault();
            const hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top - 70
            }, animationSettings.scrollTiming, 'easeInOutExpo', function() {
                window.location.hash = hash;
            });
        }
    });

    // Initialize on page load
    $(document).ready(function() {
        // Initial animation check
        initAnimations();

        // Check for animations on scroll
        $(window).on('scroll', function() {
            initAnimations();
        });
    });

    // Testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });

})(jQuery);

