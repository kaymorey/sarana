jQuery(document).ready(function($) {

    App = {

        initPlugins: function() {
            $('#multiscroll').multiscroll({
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

        init: function() {
            this.initPlugins();
        }
    };

    App.init();
});