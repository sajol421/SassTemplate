jQuery(document).ready(function($){
  var init = function() {
    efectoIconoMenu();
    transiciones();
    timeline();
    verMasPropuestaHome();
    verMasCocinaIntro();
    resizePropuestaHome();
    verMasNuestraCarta();
    resizeVerMas();
  }
  init();

  //Funciones
  function verMasPropuestaHome() {
    $( "#ver_mas_propuesta_home" ).toggle(
      function(e) {
        e.preventDefault();
        $('#texto_ver_mas_propuesta_home').fadeToggle(500);
        $('#menu-home').css('height','auto');
        $('#menu-home #menu_home_box').removeClass('flex').addClass('menu_home_box');
        $(this).text('');
        $('#box_ver_mas_propuesta_home').remove();

      }, function(e) {
        e.preventDefault();
        $('#texto_ver_mas_propuesta_home').fadeOut();
        $('#menu-home').css('height','100vh');
        $('#menu-home #menu_home_box').addClass('flex').css('marginTop','0');
        $(this).text('-');
      }
    );
  }

  function verMasCocinaIntro() {
    var $boton = $('#ver_mas');

    $boton.toggle(
      function(e) {
        $('.texto_ver_mas').fadeIn(500);
        e.preventDefault();
        $(this).text('');
        $('#box_ver_mas').remove();
      }, function(e) {
        $('.texto_ver_mas').fadeOut();
        e.preventDefault();
      }
    );
    // $('.ver_mas').each(function() {
    //   var $thisVerMas = $(this);
    //
    //   $thisVerMas.click(function(){
    //     $thisVerMas.prev('.texto_ver_mas').fadeToggle(500);
    //
    //   }).toggle(
    //     function(){
    //       $(this).text('-');
    //     },function(){
    //       $(this).text('+');
    //     });
    // });
  }

  function verMasNuestraCarta() {
    var $boton = $('#ver_mas_2');

    $boton.toggle(
      function(e) {
        $('.texto_ver_mas_2').fadeToggle(500);
        e.preventDefault();
        $('#eden').css('height','auto');
        $('#eden').resize();
        $('#eden #eden_box').css('paddingTop','22vh').css('paddingBottom','22vh');
        $(this).text('');
        $('#box_ver_mas_2').remove();
      }, function(e) {
        $('.texto_ver_mas_2').fadeToggle();
        e.preventDefault();
      }
    );
  }

  function resizePropuestaHome() {
    var $boton = $('#ver_mas_propuesta_home');
    var $equipo = $('#equipo_home_v2');

    $boton.click(function() {
      $equipo.resize();
    });
  }

  function resizeVerMas() {
    var $boton1 = $('#ver_mas');
    var $div1 = $('#eden');
    var $div2 = $('#img_menu');

    $boton1.click(function() {
      $div1.resize();
      $div2.resize();
    });
  }

  //Transiciones de sitio web
  function transiciones() {
    $('.body-page').fadeIn(400);
    $('#home-restaurantes').fadeIn(600);
  }

  //Efecto icono menu responsive
  function efectoIconoMenu() {
    $(".icon").click(function() {
      $(".mobilenav").fadeToggle(500);
      $(".top-menu").toggleClass("top-animate");
      $(".mid-menu").toggleClass("mid-animate");
      $(".bottom-menu").toggleClass("bottom-animate");
      $(".icon").toggleClass("bg-transparent");
    });
  }

  //Animacion de carga
 //  var $animsition = $('.animsition');
 //  $animsition.animsition().one('animsition.inStart',function(){
 //
 //    //loadingInner: '<img src="../img/logo-login.png" />',
 //    console.log('event -> inStart');
 //  })
 // .one('animsition.inEnd',function(){
 //    $('.target', this).html('Callback: End');
 //      console.log('event -> inEnd');
 //    })

  //Distancia de ID welcome - top navegador
  if($('section#welcome').length){
    //Deslizamiento menu
    smoothScroll.init({
      speed: 500,
      easing: 'easeInOutCubic',
      updateURL: false,
      offset: 0,
    });

    var element = $('section#welcome').offset().top;

    $(window).scroll(function(){
      var scrollPosition = $(window).scrollTop();
      var distancia = (element - scrollPosition);

      $('div.status').html(distancia);

      if(distancia < 30){
          $('#scroll-menu').fadeIn(500).css('display','initial');

      }else if(distancia > 30){
        $('#scroll-menu').css('display','none');
      }
    });
  }

  //Menu Paginas Interiores
  (function($){
    if($('#nav-page').length) {
      $(window).scroll(function(){
        if($('#nav-page').offset().top > 100) {
          $('.navbar').addClass('nav-page-scroll');
          $("nav#nav-page .current-white").addClass("current");
          $("#nav-page #menu-menu-idiomas-1 li").addClass('bar2');

        }else {
          $('.navbar').removeClass('nav-page-scroll');
          $("nav#nav-page .current").removeClass("current");
          $("#nav-page #menu-menu-idiomas-1 li").removeClass('bar2');
        }
      });
    }
  })(jQuery);


  //Slider El Equipo
  if($('#equipo-crew').length){
    (function($){
      $('.tp-banner2').show().revolution({
        delay:6000,
        startwidth:1400,
        startheight:1200,
        hideThumbs:1000,
        hideTimerBar: "off",
        swipe_velocity: 0.7,
        swipe_min_touches: 1,
        swipe_max_touches: 1,
        drag_block_vertical: false,
        keyboardNavigation:"off",
        shadow:0,

        fullWidth:"off",
        fullScreen:"on",
        autoHeight:"on",
        forceFullWidth:"off",

        spinner:"none",
        stopLoop:"off",
        stopAfterLoops:-1,
        stopAtSlide:-1,
        shuffle:"off",
        forceFullWidth:"off",
        hideThumbsOnMobile:"off",
        hideNavDelayOnMobile:1500,
        hideBulletsOnMobile:"off",
        hideArrowsOnMobile:"off",
        hideThumbsUnderResoluition:0,
        navigationType:"none",
        navigationArrows:"none",
        onHoverStop:"off"
      });
    })(jQuery);
  }

  //Timeline Casa Moreyra
  function timeline() {
    if($('#historia').length || $('#history').length) {
      $(".main").onepage_scroll({
        sectionContainer: "section",
        responsiveFallback: 768,
        updateURL: false,
      });
    }
  }
});

//Google Maps
function initialize() {
  var mapOptions = {
    center: new google.maps.LatLng(-12.0964161, -77.0349586),
    zoom: 18,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles:  [{"stylers": [ { "saturation": -100 }]}],
    scrollwheel: false
  };

  var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

  var goldStar = {
    path: 'M0-165c-27.618 0-50 21.966-50 49.054C-50-88.849 0 0 0 0s50-88.849 50-115.946C50-143.034 27.605-165 0-165z',
    fillColor: 'rgb(168,154,153)',
    fillOpacity: 1,
    scale: 0.28,
    strokeColor: '#7F665A',
    strokeWeight: 2
  };

  var marker = new google.maps.Marker({
    position: map.getCenter(),
    icon: goldStar,
    map: map
  });
};

var video = document.querySelectorAll('video');
// use the whole window and a *named function*
window.addEventListener('touchstart', function videoStart() {
  video[0].play();
  video[1].play();
  console.log('first touch');
  // remove from the window and call the function we are removing
  this.removeEventListener('touchstart', videoStart);
});
