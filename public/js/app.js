/* Theme Name: Dorsin - Responsive Landing page template
   Author: Themesbrand
   Version: 1.0.0
   Created: July 2018
   File Description: Main JS file of the template
*/
(function ($) {

    'use strict';

    // Navbar
    function initNavbar() {
        $('.navbar-nav a').bind('click', function (event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: ($($anchor.attr('href')).offset().top - 92)
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    }

    function initButtons() {
        $('.site-scroll a').bind('click', function (event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: ($($anchor.attr('href')).offset().top - 92)
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    }

    // Sticky Header
    function initSticky() {
        $(".sticky").sticky({
            topSpacing: 0
        });
    }

    //Scrollspy
    function initScrollspy() {
        $("#navbarCollapse").scrollspy({
            offset: 20
        });
    }

    // Magnific Popup
    function initMagnificPopup() {
        $('.video-play-icon').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,

            fixedContentPos: false
        });
    }

    function initEmailSubscription() {
        $('#subscribe').submit(() => {
            fetch('https://hotbar-server.galacticapps.com/api/galacticemail', {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: "Email Subscription Bot",
                    email: $('#subscriber').val(),
                    subject: "You've received a new email subscriber!",
                    comments: "Congratulations!"
                })
            })
                .then(() => {
                    document.getElementById('subscribe').style.color = "#28a745";
                    document.getElementById('subscribe').innerHTML = "You've been subscribed!";
                });
            return false;
        });
    }

    function initContactForm() {
        $('#contact-form').submit(function () {
            $("#message").slideUp(750, function () {
                $('#message').hide();

                $('#submit')
                    .attr('disabled', 'disabled');

                fetch('https://hotbar-server.galacticapps.com/api/galacticemail', {
                    method: "POST",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        name: $('#name').val(),
                        email: $('#email').val(),
                        subject: $('#subject').val(),
                        comments: $('#comments').val()
                    })
                })
                    .then((response) => {
                        document.getElementById('message').innerHTML = "Message successfully sent!";
                        $('#message').slideDown('slow');
                        $('#contact-form img.contact-loader').fadeOut('slow', function () {
                            $(this).remove()
                        });
                        $('#submit').removeAttr('disabled');
                        if (response) $('#contact-form').slideUp('slow');
                    });
            });

            return false;
        });
    }

    function init() {
        initNavbar();
        initButtons();
        initSticky();
        initScrollspy();
        initMagnificPopup();
        initContactForm();
        initEmailSubscription();
        // Waves.init();
    }

    $(document).ready(function () {
        init();
    });

    // init();

})(jQuery);