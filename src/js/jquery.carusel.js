(function($){
    jQuery.fn.carusel = function(options){
        options = $.extend({
            count: 1
        }, options);

        var make = function(){
            $(this).wrap("<div class='caruselInner'></div>");
            $(this).children('li').each(function( index ) {
                $(this).replaceWith( "<div class='caruselInner__item'>" + $( this ).html() + "</div>");
            });
            $(this).replaceWith( "<div class='caruselInner__slider'>" + $( this ).html() + "</div>" );
            $('.caruselWrap').append("<div class='caruselInner__left'></div><div class='caruselInner__right'></div>");
            var currentwidth = $('.caruselInner__item').width();
            $('.caruselInner__item').width(currentwidth/options.count);

            var itemSumWidth = 0;
            $('.caruselInner__item').each(function() {
                itemSumWidth = itemSumWidth + $(this).width();
            });

            $('.caruselInner__slider').width(itemSumWidth);

            var sliderWidth = $('.caruselInner__slider').width();
            var sliderWidthNumber = parseInt(sliderWidth);


            $('.caruselInner__left').click(function(e){

                var leftPos = $('.caruselInner__slider').css('left');
                var leftPosNumber = parseInt(leftPos);
                var leftPosNumberPlus = Math.abs(leftPosNumber);

                if (sliderWidthNumber - currentwidth <= leftPosNumberPlus) {
                    e.stopImmediatePropagation();
                    $(this).css('opacity', 0.5);
                } else {
                    $('.caruselInner__slider').animate({
                        left: (leftPosNumber - currentwidth) + 'px'
                    },"slow");
                    $('.caruselInner__right').css('opacity', 1.0);
                }
            });

            $('.caruselInner__right').click(function(e){

                var leftPos = $('.caruselInner__slider').css('left');
                var leftPosNumber = parseInt(leftPos);

                if (leftPosNumber >= 0) {
                    e.stopImmediatePropagation();
                    $(this).css('opacity', 0.5);
                } else {
                    $('.caruselInner__slider').animate({
                        left: (leftPosNumber + currentwidth) + 'px'
                    },"slow");
                    $('.caruselInner__left').css('opacity', 1.0);
                }
            });



        };

        return this.each(make);
    };
})(jQuery);