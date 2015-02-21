jQuery(document).ready(function($) {

    App = {

        initPlugins: function() {
            // Multiscroll plugin
            $('#multiscroll').multiscroll({
                anchors: ['home', '', '', '', 'association', 'about', '', '', 'contact'],
                menu: '#menu',
                easing: 'easeInQuad',
                onLeave: function(index, nextIndex, direction) {
                    // Hide / SHow "Association Sarana" text
                    if (index <= 4 && nextIndex >= 5) {
                        $('h1').fadeOut();
                    }
                    else if (index >= 5 && nextIndex <= 4) {
                        $('h1').delay(400).fadeIn();
                    }

                    // Hide / Show presentation and contact texts
                    if (index == 5) {
                        $('div.presentation .text').show();
                        $('section.presentation').hide();
                    }
                    if (index == 9) {
                        $('div.contact .text').show();
                        $('section.contact').hide();
                    }
                },
                afterLoad: function(anchorLink, index) {
                    // Hide / Show presentation and contact texts
                    if (index == 5) {
                        $('div.presentation .text').hide();
                        $('section.presentation').show();
                    }
                    if (index == 9) {
                        $('div.contact .text').hide();
                        $('section.contact').show();
                    }
                },
            });
        },

        toggleMenu: function() {
            $(document).on('click', 'nav.menu a', function(e) {
                e.preventDefault();

                $(this).toggleClass('open');

                $nav = $(this).parent().next('nav');
                // Hide / Show menu
                if ($(this).hasClass('open')) {
                    $nav.slideDown();
                    $nav.find('a').each(function(index) {
                        TweenLite.to($(this), 0.5, {opacity:1, delay: 0.3 + 0.2 * index});
                        TweenLite.to($(this), 0.5, {top:0, delay: 0.3 + 0.2 * index, ease:Power1.easeOut});
                    });
                }
                else {
                    $nav.slideUp(function() {
                        $nav.find('a').css('opacity', 0);
                        $nav.find('a').css('top', '-15px');
                    });
                }
            });
        },

        menuItems: function() {
            // Menu items underline animation
            $(document).on('mouseover', 'nav.main a', function() {
                var line = $(this).next('hr');
                TweenLite.to(line, 0.45, {width: '90%', ease:Power1.easeOut});
            });
            $(document).on('mouseout', 'nav.main a', function() {
                var line = $(this).next('hr');
                TweenLite.to(line, 0.45, {width: 0, ease:Power1.easeIn});
            });
        },

        init: function() {
            this.initPlugins();
            this.toggleMenu();
            this.menuItems();
        }
    };

    App.init();
});
