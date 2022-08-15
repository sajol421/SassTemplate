jQuery(document).ready(function($) {
  var inicio = '#FFFFFF';
  var morado = 'rgb(140,109,134)';
  var marron = 'rgb(127,102,90)';
  var mostaza = 'rgb(212,175,78)';
  var rosado = 'rgb(246,197,183)';
  var verde = 'rgb(164,181,117)';
  var gris = 'rgb(168,154,153)';
  var celeste = 'rgb(188,207,208)';

  //HOME
  if( (typeof window.orientation == 'undefined') & ($('#home').length) ){

    var controller = new ScrollMagic.Controller();

    //Logo y menu intro
    (function($){
      // TweenMax.to(elemento, duracion-en-segundos, propiedades de la animacion);
      var tween1 =  TweenMax.to('#logo-ayg', 0.5, {
                    autoAlpha: 0,
                    });

      var tween2 =  TweenMax.to('.navbar-intro', 0.5, {
                    autoAlpha: 0,
                  });

      var tween3 =  TweenMax.to('.page-scroll', 0.5, {
                    autoAlpha: 0,
                  });

      var scene1 = new  ScrollMagic.Scene({
                        triggerElement: '#logo-ayg',
                        duration:300,
                        offset: 120,
                  })
                  .setTween(tween1)
                  .addTo(controller);

      var scene2 = new  ScrollMagic.Scene({
                        duration:400,
                        triggerElement: '.navbar-intro',
                        offset: 100,
                  })
                  .setTween(tween2)
                  .addTo(controller);

      var scene3 = new  ScrollMagic.Scene({
                        duration:300,
                        triggerElement: '.navbar-intro',
                        offset: 180,
                  })
                  .setTween(tween3)
                  .addTo(controller);

      // scene1.addIndicators({name:"1-Logo"});
      // scene2.addIndicators({name:"2-Menu"});
      // scene3.addIndicators({name:"Page Scroll"});
    })(jQuery);

    //Modulo Bienvenida
    (function($){
      var tween1 =  TweenMax.from('#logo_bienvenidos, .welcome-logos',0.3,{
                    opacity:0,
                  });

      var scene1 = new  ScrollMagic.Scene({
                      triggerElement: '#welcome',
                      offset: 60,
                    })
                  .setTween(tween1)
                  .addTo(controller);

      var p_entrada = TweenMax.from('#welcome p',0.45,{
                    opacity:0,
                  });

      var p_entrada_scene = new  ScrollMagic.Scene({
                        triggerElement: '#welcome',
                        duration: 200,
                        offset: 140,
                  })
                  .setTween(p_entrada)
                  .addTo(controller);

      var p_salida = TweenMax.to('#welcome p, .welcome-logos',0.45,{
                    opacity:0,
                  });

      var p_salida_scene = new  ScrollMagic.Scene({
                        triggerElement: '#menu-home',
                        duration: 200,
                        offset: -120,
                  })
                  .setTween(p_salida)
                  .addTo(controller);

      // scene1.addIndicators({name:"LOGO"});
      // p_entrada_scene.addIndicators({name:"TEXTO ENTRADA"});
      // p_salida_scene.addIndicators({name:"TEXTO SALIDA"});
    })(jQuery);

    // Módulo La Propuesta
    (function($){
      var tween1 = TweenMax.staggerFromTo('#menu-home .col-lg-6',0.2,
                    {opacity: 0},
                    {opacity: 1},
                    0.4
                  );

      var tween2 =  TweenMax.from('#box_ver_mas_propuesta_home',0.3,{
                    opacity:0,
                  });

      var scene2 = new  ScrollMagic.Scene({
                      triggerElement: '#menu-home',
                      offset: 240,
                    })
                  .setTween(tween2)
                  .addTo(controller);

      var scene1 = new  ScrollMagic.Scene({
                        triggerElement: '#menu-home',
                        offset: -200,
                      })
                      .setTween(tween1)
                      .addTo(controller);

      // scene1.addIndicators({name:"fondo"});
      // scene2.addIndicators({name:"BOTON"});
    })(jQuery);

    // Módulo Almuerzo Vinos
    (function($){
       var tween2 = TweenMax.staggerFromTo('#almuerzos-vinos .col-lg-6',0.2,
                    {opacity: 0},
                    {opacity: 1},
                    0.1
                  );

      var scene2 = new  ScrollMagic.Scene({
                        triggerElement: '#almuerzos-vinos',
                        offset: -280,
                      })
                      .setTween(tween2)
                      .addTo(controller);

      // scene2.addIndicators({name:"Almuerzo Vinos"});
    })(jQuery);

    // El Equipo
    (function($){
      var tween2 = TweenMax.from('#equipo_home_v2 .two-columns-info',0.6,{
                      opacity:0,
                  });

      var scene2 = new  ScrollMagic.Scene({
                        triggerElement: '#equipo_home_v2',
                        offset: 100,
                        duration: 200
                      })
                      .setTween(tween2)
                      .addTo(controller);

      // scene2.addIndicators({name:"EQUIPO"});
    })(jQuery);

    // Reservas
    (function($){
      var tween2 = TweenMax.from('#reservas-home .two-columns-info',0.45,{
                      opacity:0,
                  });

      var scene2 = new  ScrollMagic.Scene({
                        triggerElement: '#reservas-home',
                         offset: 100,
                         duration: 200
                      })
                      .setTween(tween2)
                      .addTo(controller);

      // scene2.addIndicators({name:"RESERVAS"});
    })(jQuery);
  }

  //Cabecera paginas interiores
  if((typeof window.orientation == 'undefined') & ($('#page-header').length)) {
    (function($){
      var controller_head = new ScrollMagic.Controller();
      var tween1 =  TweenMax.to('#page-header h1', 0.5, {
                    autoAlpha: 0,
                    });

      var scene1 = new  ScrollMagic.Scene({
                        triggerElement: '#page-header h1',
                        duration:300,
                        offset: 300,
                  })
                  .setTween(tween1)
                  .addTo(controller_head);
                  // scene1.addIndicators({name:"CABECERA"});
    })(jQuery);
  }

  //LA COCINA
  if( (typeof window.orientation == 'undefined') &
    ($('.page-template-template-menu-degustacion').length) ) {

    var controller_menu = new ScrollMagic.Controller();

    //Boton ver mas
    (function($){
      var tween2 =  TweenMax.from('#box_ver_mas',0.3,{
                    opacity:0,
                  });

      var scene2 = new  ScrollMagic.Scene({
                      triggerElement: '#intro-text',
                      offset: 120,
                    })
                  .setTween(tween2)
                  .addTo(controller_menu);

      // scene2.addIndicators({name:"BOTON"});
    })(jQuery);

    //Videos
    (function($){
      var tween1 = TweenMax.staggerFromTo('#menu-video .col-lg-6',0.2,
                    {opacity: 0},
                    {opacity: 1},
                    0.1
                  );

      var scene1 = new  ScrollMagic.Scene({
                        triggerElement: '#menu-video',
                        offset: -310,
                      })
                  .setTween(tween1)
                  .addTo(controller_menu);
      // scene1.addIndicators({name:"VIDEOS"});
    })(jQuery);

    //NUESTRA CARTA
    (function($){
      var tween1 = TweenMax.from('#eden',0.3,{
                      opacity:0,
                  });

      var scene1 = new  ScrollMagic.Scene({
                        triggerElement: '#eden',
                        offset: 80,
                        duration: 200
                      })
                  .setTween(tween1)
                  .addTo(controller_menu);

      var tween2 =  TweenMax.from('#box_ver_mas_2',0.3,{
                    opacity:0,
                  });

      var scene2 = new  ScrollMagic.Scene({
                      triggerElement: '#eden',
                      offset: 220,
                    })
                  .setTween(tween2)
                  .addTo(controller_menu);

      // scene1.addIndicators({name:"CARTA"});
      // scene2.addIndicators({name:"BOTON"});
    })(jQuery);

    //LA COCINA - Bar/Vinos
    (function($){
      var tween1 = TweenMax.from('#menu-almuerzo .col-lg-8',0.2,{
                    opacity: 0,
                    duration: 300
                  });

      var tween2 = TweenMax.from('#vinos-menu .col-lg-8',0.2,{
                    opacity: 0,
                    duration: 300
                  });

      var tween3 = TweenMax.from('#menu-almuerzo h2',0.3,{
                    opacity:0,
                    marginTop:50,
                  });

      var tween4 = TweenMax.from('#menu-almuerzo p, #menu-almuerzo a',0.3,{
                    opacity:0,
                  });

      var tween5 = TweenMax.from('#vinos-menu h2',0.3,{
                    opacity:0,
                    marginTop:50,
                  });

      var tween6 = TweenMax.from('#vinos-menu p, #vinos-menu a',0.3,{
                    opacity:0,
                  });

      var scene1 = new  ScrollMagic.Scene({
                        triggerElement: '#menu-almuerzo',
                        offset: -170,
                      })
                      .setTween(tween1)
                      .addTo(controller_menu);

      var scene2 = new  ScrollMagic.Scene({
                        triggerElement: '#vinos-menu',
                        offset: -200,
                      })
                      .setTween(tween2)
                      .addTo(controller_menu);

      var scene3 = new  ScrollMagic.Scene({
                        triggerElement: '#menu-almuerzo',
                        offset: 0,
                      })
                  .setTween(tween3)
                  .addTo(controller_menu);

      var scene4 = new  ScrollMagic.Scene({
                        triggerElement: '#menu-almuerzo',
                        offset: 40,
                      })
                  .setTween(tween4)
                  .addTo(controller_menu);

      var scene5 = new  ScrollMagic.Scene({
                        triggerElement: '#vinos-menu',
                        offset: 0,
                      })
                  .setTween(tween5)
                  .addTo(controller_menu);

      var scene6 = new  ScrollMagic.Scene({
                        triggerElement: '#vinos-menu',
                        offset: 40,
                      })
                  .setTween(tween6)
                  .addTo(controller_menu);

      //scene1.addIndicators({name:"BAR"});
      // scene3.addIndicators({name:"TITULO BAR"});
      // scene4.addIndicators({name:"PARRAFO"});
    })(jQuery);
  }

    //EL EQUIPO
    if( (typeof window.orientation == 'undefined') & ($('.page-template-template-el-equipo').length) ){

      var controller_equipo = new ScrollMagic.Controller();

      //Salon
      (function($){
        var tween3 = TweenMax.from('#equipo-salon h2',0.3,{
                      opacity:0,
                      marginTop:50,
                    });

        var tween4 = TweenMax.from('#equipo-salon p',0.3,{
                      opacity:0,
                    });

        var scene3 = new  ScrollMagic.Scene({
                          triggerElement: '#equipo-salon',
                          offset: -60,
                        })
                    .setTween(tween3)
                    .addTo(controller_equipo);

        var scene4 = new  ScrollMagic.Scene({
                          triggerElement: '#equipo-salon',
                          offset: -20,
                        })
                    .setTween(tween4)
                    .addTo(controller_equipo);

          // scene3.addIndicators({name:"SALON"});
          // scene4.addIndicators({name:"PARRAFO"});
      })(jQuery);

      // Cocina
      (function($){
        var tween2 = TweenMax.from('#equipo-cocina .two-columns-info',0.6,{
                        opacity:0,
                    });

        var scene2 = new  ScrollMagic.Scene({
                          triggerElement: '#equipo-cocina',
                          offset: 100,
                          duration: 200
                        })
                        .setTween(tween2)
                        .addTo(controller_equipo);

        // scene2.addIndicators({name:"COCINA"});
      })(jQuery);

      // Sumilleria
      (function($){
        var tween2 = TweenMax.from('#equipo_som .two-columns-info',0.6,{
                        opacity:0,
                    });

        var scene2 = new  ScrollMagic.Scene({
                          triggerElement: '#equipo_som',
                          offset: 100,
                          duration: 200
                        })
                        .setTween(tween2)
                        .addTo(controller_equipo);

        // scene2.addIndicators({name:"COCINA"});
      })(jQuery);

      //Bar
      (function($){
        var tween1 = TweenMax.from('#equipo-bar .col-lg-8',0.2,{
                      opacity: 0,
                      duration: 300
                    });

        var tween3 = TweenMax.from('#equipo-bar h2',0.3,{
                      opacity:0,
                      marginTop:50,
                    });

        var tween4 = TweenMax.from('#equipo-bar p',0.3,{
                      opacity:0,
                    });

        var scene1 = new  ScrollMagic.Scene({
                          triggerElement: '#equipo-bar',
                          offset: -170,
                        })
                        .setTween(tween1)
                        .addTo(controller_equipo);

        var scene3 = new  ScrollMagic.Scene({
                          triggerElement: '#equipo-bar',
                          offset: -60,
                        })
                    .setTween(tween3)
                    .addTo(controller_equipo);

        var scene4 = new  ScrollMagic.Scene({
                          triggerElement: '#equipo-bar',
                          offset: -20,
                        })
                    .setTween(tween4)
                    .addTo(controller_equipo);

          // scene3.addIndicators({name:"SALON"});
          // scene4.addIndicators({name:"PARRAFO"});
      })(jQuery);


      //Personas del Equipo
      // (function($){
      //   var tween1 = TweenMax.from('#equipo-crew .col-lg-4',0.3,{
      //                   opacity:0,
      //                   // paddingTop:40,
      //               });
      //
      //   var scene1 = new  ScrollMagic.Scene({
      //                     triggerElement: '#equipo-crew',
      //                     offset: -40,
      //                   })
      //               .setTween(tween1)
      //               .addTo(controller_equipo);
      // })(jQuery);

      //Trabaja con nosotros
      (function($){
        var tween1 = TweenMax.from('#equipo-trabaja-nosotros p',0.3,{
                        opacity:0,
                        marginTop:50,
                    });

        var tween2 = TweenMax.from('#equipo-trabaja-nosotros a',0.3,{
                        opacity:0,
                    });

        var scene1 = new  ScrollMagic.Scene({
                          triggerElement: '#equipo-trabaja-nosotros',
                          offset: -160,
                        })
                    .setTween(tween1)
                    .addTo(controller_equipo);

        var scene2 = new  ScrollMagic.Scene({
                          triggerElement: '#equipo-trabaja-nosotros',
                          offset: -130,
                        })
                    .setTween(tween2)
                    .addTo(controller_equipo);
      })(jQuery);
    }
});
