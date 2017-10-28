(function ( $ ) {

    $.fn.carusel = function( options ) {

        // This is the easiest way to have default options.
        var settings = $.extend({
            // These are the defaults.
            count: 1
        }, options );


        return this.each(function() {

             if ($(window).width() <= 767) {

                    $(this).parents('.caruselOuter').append("<div class='caruselInner__left'></div><div class='caruselInner__right'></div>");
                    var myLeft;
                    var goal = $(this);
                    var mywidth = goal.width();
                    var myChildren = goal.children().length;
                    mywidth *=  myChildren;
                    goal.css('width', mywidth);
                    var myChildrenWidth = mywidth/myChildren;
                    goal.children().width(myChildrenWidth);


                    $('.caruselInner__left').click(function () {
                        myLeft = parseInt(goal.css('left'));

                        if (myLeft > -(mywidth - myChildrenWidth)) {

                            goal.animate({
                                left:  myLeft - myChildrenWidth + 'px'
                            }, "slow");

                        }
                    });

                    $('.caruselInner__right').click(function () {
                        myLeft = parseInt(goal.css('left'));

                        if (myLeft < 0) {

                            goal.animate({
                                left:  myLeft + myChildrenWidth + 'px'
                            }, "slow");

                        }
                    });

             } else {
                 goal.css('width', 'auto');
                 goal.children().width('auto');
                 $(this).parents('.caruselOuter').find("caruselInner__left,.caruselInner__right").remove();
             }


         });


    };

}( jQuery ));