(function($){
    jQuery.fn.carusel = function(options){
        options = $.extend({
            count: 1
        }, options);

        var make = function(){

                    var currentwidth,
                        itemSumWidth,
                        sliderWidth,
                        caruselInnerWidth,
                        sliderWidthNumber;


                    function gettingWidths() {
                        itemSumWidth = 0;
                        currentwidth = $('.caruselInner__item').width();
                        $('.caruselInner__item').width(currentwidth/options.count);
                        $('.caruselInner__item').each(function() {
                            itemSumWidth = itemSumWidth + $(this).width();
                        });
                        $('.caruselInner__slider').width(itemSumWidth);
                    };

                    function gettingWidthsDinumic() {
                        itemSumWidth = 0;
                        caruselInnerWidth = $('.caruselInner').width();
                        $('.caruselInner__item').width(caruselInnerWidth);
                        $('.caruselInner__item').each(function() {
                            itemSumWidth = itemSumWidth + $(this).width();
                        });
                        $('.caruselInner__slider').width(itemSumWidth);

                    };

                if ($(window).width() <= 768) {

                    // add arrows
                    $('.caruselOuter').append("<div class='caruselInner__left'></div><div class='caruselInner__right'></div>");

                    gettingWidths();
                    $(window).resize(gettingWidthsDinumic);


                    sliderWidth = $('.caruselInner__slider').width();
                    sliderWidthNumber = parseInt(sliderWidth);


                    $('.caruselInner__left').click(function(e){

                        var leftPos = $('.caruselInner__slider').css('left');
                        var leftPosNumber = parseInt(leftPos);
                        var leftPosNumberPlus = Math.abs(leftPosNumber);

                        if (sliderWidthNumber - currentwidth <= leftPosNumberPlus) {
                            e.stopImmediatePropagation();
                        } else {
                            $('.caruselInner__slider').animate({
                                left: (leftPosNumber - currentwidth) + 'px'
                            },"slow");
                        }
                    });

                    $('.caruselInner__right').click(function(e){

                        var leftPos = $('.caruselInner__slider').css('left');
                        var leftPosNumber = parseInt(leftPos);

                        if (leftPosNumber >= 0) {
                            e.stopImmediatePropagation();
                        } else {
                            $('.caruselInner__slider').animate({
                                left: (leftPosNumber + currentwidth) + 'px'
                            },"slow");
                        }
                    });

                } else {
                    $('.caruselOuter').find(".caruselInner__left,.caruselInner__right").remove();
                    $('.caruselInner__slider').width('auto');
                    $('.caruselInner__item').width('auto');
                    $(window).resize(function(){
                        $('.caruselInner__slider').width('auto');
                        $('.caruselInner__item').width('auto');
                    });
                }


        };

        return this.each(make);
    };
})(jQuery);