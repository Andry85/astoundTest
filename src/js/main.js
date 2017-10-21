(function($){


	/*********************************************************/
						/* start move elemets   */
	/********************************************************/
        moveElements();
        // run test on resize of the window
        $(window).resize(moveElements);
        function moveElements(){
            if ($(window).width() >= 768 && $(window).width() <= 991) {
                $(".socialList").prependTo(".itemPicInner");
            } else if ($(window).width() >= 992) {
                $(".socialList").appendTo(".socialPopapWrap__inner");
                $(".title").prependTo(".itemInfo");
            }
            else {
                $(".socialList").insertAfter(".userReaction");
                $(".title").prependTo(".itemPic");
            }

        }

	/*********************************************************/
						/* end move elemets  */
	/********************************************************/


    /*********************************************************/
    /* start show popap   */
    /********************************************************/
    $(".socialPopapWrap__title").click(function(){
        $(this).next(".socialPopapWrap__inner").fadeIn('slow');
    });
    $(".socialPopapWrap__cloze").click(function(){
        $(this).parent(".socialPopapWrap__inner").fadeOut('slow');
    });
    /*********************************************************/
    /* end show popap  */
    /********************************************************/

    /*********************************************************/
    /* start slider   */
    /********************************************************/
        caruselRun();
        // run test on resize of the window
        $(window).resize(caruselRun);
        function caruselRun(){
            if ($(window).width() >= 768) {
                location.reload(true);

            } else {
                $('#slider').carusel();
            }


        }
    /*********************************************************/
    /* end slider  */
    /********************************************************/




})(jQuery);