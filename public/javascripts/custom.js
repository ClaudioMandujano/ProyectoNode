// Tabla de contenido




 //VARIABLES

jQuery(document).ready(function($){
    "user strict";

    var mainSlider = $('.main_slider');
    var hamburger = $('.hamburger_container');
    var menu = $('.hamburger_menu');
    var menuActive = false;
    var hamburgerClose = $('.hamburger_close');
    var fsOverlay = $('.fs_menu_overlay');

    initFavorite();
    initIsotopeFiltering();

    //2 MENU
    

    //3 Le damos la funcion de agregar productos a favoritos
      function initFavorite(){
          if($('.favorite').length)
          {
            var favs = $('.favorite');

            favs.each(function()
            {
            var fav = $(this);
            var active = false;
            if(fav.hasClass('active'))
            {
                active = true;
            }
            fav.on('click', function()
            {
                    if(active){
                        fav.removeClass('active')
                        active = false;
                    }else{
                        fav.addClass('active');
                        active = true;
                    }
            });

            });
          }

      }


    //4



    //5 Filtramos la tabla de productos por su tipo

     function initIsotopeFiltering(){
        if($('.grid_sorting_button').length)
        {
            $('.grid_sorting_button').click(function()
            {
                $('.grid_sorting_button.active').removeClass('active');
                $(this).addClass('active');

                var selector = $(this).attr('data-filter');
                $('.product-grid').isotope({
                    filter: selector,
                    animationOptions:{
                        duration: 750,
                        easing: 'linear',
                        queue: false
                    }
                });
                return false;
            });
        }


     }

});