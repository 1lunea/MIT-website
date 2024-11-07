(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });


    // Post carousel
    $(".post-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
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
                items:2
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        center: true,
        autoplay: true,
        smartSpeed: 2000,
        dots: true,
        loop: true,
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
    
    // Add smooth scrolling to all links
    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 70
        }, 500, 'linear');
    });

    // Add hover effects to cards
    $('.card').hover(
        function() {
            $(this).animate({ transform: 'scale(1.03)' }, 200);
            $(this).addClass('shadow-lg');
        },
        function() {
            $(this).animate({ transform: 'scale(1)' }, 200);
            $(this).removeClass('shadow-lg');
        }
    );

    // Add counter animation for statistics
    $('.counter').each(function() {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 2000,
            easing: 'swing',
            step: function(now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

    // Add typing effect to main heading
    let typed = new Typed('.typed-text', {
        strings: ['Welcome to MIT', 'World-Class Education', 'Innovation & Research', 'Global Leadership'],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true
    });

    // Add parallax scrolling effect
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        $('.parallax').css({
            'transform': 'translate3d(0, ' + (scroll * 0.3) + 'px, 0)'
        });
    });

    // Add form validation with feedback
    $('form').on('submit', function(e) {
        e.preventDefault();
        let isValid = true;
        $(this).find('input, textarea').each(function() {
            if (!$(this).val()) {
                isValid = false;
                $(this).addClass('is-invalid');
            } else {
                $(this).removeClass('is-invalid');
            }
        });
        
        if (isValid) {
            // Show success message
            Swal.fire({
                title: 'Success!',
                text: 'Your message has been sent.',
                icon: 'success'
            });
        }
    });

    // Timeline animation for about section
    function initTimeline() {
        $('.timeline-item').each(function(i) {
            $(this).addClass('fade-in');
            setTimeout(() => {
                $(this).addClass('visible');
            }, 300 * i);
        });
    }

    // Progress bar animation
    function initProgressBars() {
        $('.skill-progress').each(function() {
            const percentage = $(this).data('progress');
            $(this).animate({
                width: percentage + '%'
            }, 1500);
        });
    }

    // Achievement counter
    function initCounters() {
        $('.achievement-counter').each(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 2000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
    }

    // Initialize all animations when document is ready
    $(document).ready(function() {
        initTimeline();
        initProgressBars();
        initCounters();
        
        // Add hover effect to achievement boxes
        $('.achievement-box').hover(
            function() {
                $(this).addClass('achievement-hover');
            },
            function() {
                $(this).removeClass('achievement-hover');
            }
        );
    });

})(jQuery);

