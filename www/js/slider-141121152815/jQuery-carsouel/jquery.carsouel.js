/**
 * Created by 30613 on 2017/5/27.
 */
(function($){
    $.fn.carousel = function(options) {
        var defaults = {
            direction: 'left',
            duration: 0.6,
            easing: 'swing',
            delay: 3,
            startIndex: 1,
            hideClickBar: true,
            clickBarRadius: 5,
            hideBottomBar: false,
            width: null,
            height: null
        }
        var settings = $.extend(defaults, options || {})
        var wrapper = $(this),
            ul = wrapper.children('ul.items'),
            lis = ul.find('li'),
            firstPic = lis.first().find('img'),
            li_num = lis.size(),
            li_height = 0,
            li_width = 0,
            order_by = 'ASC'
        var init = function() {
            if(!wrapper.size()) return false
            li_height = settings.height ? settings.height : lis.first().height()
            li_width = settings.width ? settings.width : lis.first().width()

            wrapper.css({width: li_width+'px', height: li_height+'px'})
            lis.css({width: li_width+'px', height: li_height+'px'})

            if (settings.direction == 'left') {
                ul.css('width', li_num * li_width + 'px')
            } else {
                ul.css('height', li_num * li_height + 'px')
            }
            ul.find('li').eq(settings.startIndex).addClass('active');
        }

        var start = function() {
            var active = ul.find('li.active'),
                active_a = active.find('a'),
                index = active.index(),
                offset, param;
            if (settings.direction == 'left') {
                offset = index * li_width * -1
                param = {'left': offset + 'px'}
            } else {
                offset = index * li_height * -1
                param = {'top': offset + 'px'}
            }

            wrapper.find('.nums').find('a:eq('+index+')').addClass('active')
        }

    }
})(jQuery)