jQuery(document).ready(function($) {

    App = {

        initPlugins: function() {
            $('#multiscroll').multiscroll({
                anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
                menu: '#menu',
                easing: 'easeInQuad',
                onLeave: function(index, nextIndex, direction){
                    if (index == 4 && nextIndex == 5) {
                        $('h1').fadeOut();
                    }
                    else if (index == 5 && nextIndex == 4) {
                        $('h1').delay(400).fadeIn();
                    }

                    if (index == 5) {
                        $('div.presentation .text').show();
                        $('section.presentation').hide();
                    }
                    if (index == 9) {
                        $('div.contact .text').show();
                        $('section.contact').hide();
                    }
                },
                afterLoad: function(anchorLink, index){
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
            $(document).on('mouseover', 'nav.main a', function() {
                var line = $(this).next('hr');
                TweenLite.to(line, 0.5, {width: '90%'});
            });
            $(document).on('mouseout', 'nav.main a', function() {
                var line = $(this).next('hr');
                TweenLite.to(line, 0.5, {width: 0});
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
