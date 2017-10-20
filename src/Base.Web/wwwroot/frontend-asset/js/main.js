(function ($) {
 "use strict";

/***************************************
 jQuery MeanMenu activation code
 ***************************************/
$('nav#dropdown').meanmenu({
  siteLogo: "<a href='index.html'><img src='images/logo.png' /></a>"
});
	
/*----------------------------
 wow js active
------------------------------ */
 new WOW().init();
 
/*----------------------------
 Property Slider
------------------------------ */  
  $(".property-slider").owlCarousel({
      autoPlay: false, 
    slideSpeed:2000,
    pagination:false,
    navigation:true,    
      items : 1,
    /* transitionStyle : "fade", */    /* [This code for animation ] */
    navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,1],
    itemsDesktopSmall : [980,1],
    itemsTablet: [768,1],
    itemsMobile : [479,1],
  });
 
/*----------------------------
 Agent Slider
------------------------------ */  
  $(".agent-slider").owlCarousel({
      autoPlay: true, 
    slideSpeed:2000,
    pagination:true,
    navigation:false,   
      items : 4,
    /* transitionStyle : "fade", */    /* [This code for animation ] */
    navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,3],
    itemsDesktopSmall : [980,3],
    itemsTablet: [768,2],
    itemsMobile : [479,1],
  });
 
/*----------------------------
 About Slider
------------------------------ */  
  $(".about-feature").owlCarousel({
    autoPlay: true, 
    slideSpeed:1000,
    pagination:false,
    navigation:false,	  
    items : 1,
    /* transitionStyle : "fade", */    /* [This code for animation ] */
    navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    itemsDesktop : [1199,1],
    itemsDesktopSmall : [980,1],
    itemsTablet: [768,1],
    itemsMobile : [479,1],
  });

/*-------------------------------------
Price filtering activation  
---------------------------------------*/
    $( "#slider-range" ).slider({
     range: true,
     min: 40,
     max: 600,
     values: [ 60, 570 ],
     slide: function( event, ui ) {
    $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
     }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
     " - $" + $( "#slider-range" ).slider( "values", 1 ) ); 
    
/*--------------------------
 scrollUp
---------------------------- */	
	$.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });
/*-------------------------------
Fancybox
---------------------------------*/   
  $('.fancybox').fancybox();  
/*-------------------------------
Isotope
---------------------------------*/ 
  var $grid = $('.grid').isotope({
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
      // use outer width of grid-sizer for columnWidth
      columnWidth: '.grid-item'
    }
  })
  // filter items on button click
  $('.property-menu ul').on( 'click', 'li', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  }); 
  /*--------------------------
  bxslider
  ---------------------------- */ 
    //Testimonial slider     
    $('.client-content').bxSlider({
      pagerCustom: '.client-img'
    });

    //Property details slider    
    $('.bg-photo').bxSlider({
      pagerCustom: '.sm-photo'
    });  

  /*-----------------------------------
  Subscribe From
  -------------------------------------*/
  $('button').on('click',function(){
    $('button').html('<i class="ionicons ion-load-c spin"></i>');
    $('button').addClass("iconize");
    $('input').attr("disabled", "true");
    setTimeout(function(){
    $('button').html('<i class="ionicons ion-checkmark"></i>');
    }, 1000);



  });
  /*-----------------------------------
  Home Two Menu Slde
  -------------------------------------*/
  $('.bar-menu >a').on('click',function(){
    $('.main-menu.mean-menu1').toggleClass( "show-menu" );
  }); 
  /*-------------------------------------
  Client logo jQuery activation code
  -------------------------------------*/
    $(".client-logo-area").owlCarousel({       
        // Most important owl features
        autoPlay: true,
        items : 6,
        itemsDesktop : [1199,6],
        itemsDesktopSmall : [980,4],
        itemsTablet: [768,2],
        itemsTabletSmall: false,
        itemsMobile : [479,1],
        singleItem : false,
        itemsScaleUp : false,
        // Navigation
        navigation : true,
        navigationText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
        // Responsive 
        responsive: true,
        pagination:false,
     
    });
    /*-------------------------------------
    Home Page Blog area jQuery activation
    -------------------------------------*/
        $(".latest-blog").owlCarousel({         
            // Most important owl features
            autoPlay: true,
            items : 4,
            itemsDesktop : [1199,3],
            itemsDesktopSmall : [980,3],
            itemsTablet: [768,2],
            itemsTabletSmall: false,
            itemsMobile : [479,1],
            singleItem : false,
            itemsScaleUp : false,
            // Navigation
            navigation : true,
            navigationText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
            // Responsive 
            responsive: true,
            pagination:false,
         
        });
    /*-------------------------------------
    Home Page Blog area jQuery activation
    -------------------------------------*/
        $(".property-image-slider").owlCarousel({         
            autoPlay: true, 
            slideSpeed:1000,
            pagination:false,
            navigation:false,   
            items : 1,
            /* transitionStyle : "fade", */    /* [This code for animation ] */
            navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
            itemsDesktop : [1199,1],
            itemsDesktopSmall : [980,1],
            itemsTablet: [768,1],
            itemsMobile : [479,1],         
        });
    /*
    -----------------------------------
    Header Sticky Menu Creation
    -----------------------------------*/
    $(window).on('scroll', function(){
      if( $(window).scrollTop()>100 ){
        $('#sticky').addClass('stick');
        }else {
        $('#sticky').removeClass('stick');
      }
    });
  /*-------------------------------
  Counter Up
  ---------------------------------*/
    $('.about-counter').counterUp({
      delay: 50,
      time: 3000
    });
    //Property details one slider
    $('.big-photo').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.pagin-slider'
    });
    $('.pagin-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.big-photo',
      dots: false,
      centerMode: true,
      focusOnSelect: true
    });
  /*-------------------------
  Nice Select JQuery 
  ---------------------------*/
  $('select').niceSelect();


  /*-------------------------
  jQuery Page Loader
  --------------------------*/
  $("#loading").delay(2000).fadeOut(500);


})(jQuery); 

