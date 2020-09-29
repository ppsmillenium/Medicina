// A $( document ).ready() block.
$(document).ready(function() {

    /* Retardo de 8 segundos */

    setTimeout(saludo, 8000);

    function saludo() {

        /* Se desplaza hasta saludo para ejecutar la animación de bienvenida */

        var scroll = $(window).scrollTop();

        var posicion = $(".saludo").offset().top;

        posicion = posicion - 350;

        console.log("scroll: ", scroll, "posicion: ", posicion);

        /* Sólo se ejecuta al comienzo */

        if (posicion > scroll) {
            $("html, body").animate({

                scrollTop: posicion

            }, 1000, function bienvenida() {
                $(".saludo-inicio").addClass("zoom");
            });
        }
    }

    /** Banner dinámico */

    $(".cat1 a").hover(function() {


        /* Cat 1 */

        $(".desc-short-presentacion").addClass("oculta");
        $(".desc-long-presentacion").addClass("oculta");

        /* Descripción corta cat1 */
        $(".desc-short-cat1").toggleClass("d-block", true);

        /* Descripción larga cat1 */
        $(".desc-long-cat1").toggleClass("d-block", true);

        /* Desactivar los demás */

        $(".desc-short-cat2").toggleClass("d-block", false);
        $(".desc-long-cat2").toggleClass("d-block", false);

        $(".desc-short-cat3").toggleClass("d-block", false);
        $(".desc-long-cat3").toggleClass("d-block", false);


    });



    $(".cat2 a").hover(function() {


        $(".desc-short-presentacion").addClass("oculta");
        $(".desc-long-presentacion").addClass("oculta");


        /* Cat 2 */

        /* Descripción corta cat2 */
        $(".desc-short-cat2").toggleClass("d-block", true);

        /* Descripción larga cat2 */
        $(".desc-long-cat2").toggleClass("d-block", true);

        /* Desactivar resto */

        $(".desc-short-cat1").toggleClass("d-block", false);
        $(".desc-long-cat1").toggleClass("d-block", false);

        $(".desc-short-cat3").toggleClass("d-block", false);
        $(".desc-long-cat3").toggleClass("d-block", false);


    });

    $(".cat3 a").hover(function() {


        $(".desc-short-presentacion").addClass("oculta");
        $(".desc-long-presentacion").addClass("oculta");


        /* Cat 3 */

        /* Descripción corta cat3 */
        $(".desc-short-cat3").toggleClass("d-block", true);

        /* Descripción larga cat3 */
        $(".desc-long-cat3").toggleClass("d-block", true);

        // Desactivar resto

        $(".desc-short-cat1").toggleClass("d-block", false);
        $(".desc-long-cat1").toggleClass("d-block", false);

        $(".desc-short-cat2").toggleClass("d-block", false);
        $(".desc-long-cat2").toggleClass("d-block", false);


    });

    // Desplazar horizontalmente productos menu

    // Todo a cero

    $(".cat1").animate({
        left: '0'
    }, 200);


    $(".cat2").animate({
        left: '0'
    }, 200);


    $(".cat3").animate({
        left: '0'
    }, 200);


    // Cat1

    $(".cat1").hover(function() {

        // Desactivo resto


        $(".cat2").animate({
            left: '0'

        }, 200);


        $(".cat3").animate({
            left: '0'

        }, 200);

        // Propiedades

        $(".cat1").css({
            "width": '150px',
            "position": 'relative'
        });


        // Activo actual


        $(".cat1").animate({
            left: '15'

        });

    });

    // Cat2

    $(".cat2").hover(function() {

        $(".cat2").css({
            "width": '150px',
            "position": 'relative'
        });

        // Desactivo resto

        $(".cat1").animate({
            left: '0'
        }, 200);


        $(".cat3").animate({
            left: '0'
        }, 200);

        // Activo actual

        $(".cat2").animate({
            left: '15'

        });

    });


    // Cat3

    $(".cat3").hover(function() {

        $(".cat3").css({
            "width": '200px',
            "position": 'relative'
        });

        // Desactivo resto

        $(".cat1").animate({
            left: '0'
        }, 200);


        $(".cat2").animate({
            left: '0'
        }, 200);

        // Activo actual

        $(".cat3").animate({
            left: '15'

        });

    });



});


// Trigger menú dinámico complementos

$("li.complementos").click(function() {

    $("li.complementos a").toggleClass("btn-amarillo-menu", "btn-blanco-menu");



    $(".display-menu").toggleClass("oculta-important", "d-block");
    /*
        $(".display-menu").fadeIn().css({
            // position: 'relative'
        }).animate({
            top: '5'
        }, function() {
            //callback

        }).animate({
            top: '0'
        }, function() {
            $(".display-menu").css('display', 'flex')
        });
    */

    animaMenu = $(".display-menu");

    var numFuncionesEnCola = animaMenu.queue().length;

    animaMenu.fadeIn().animate({
        top: '5'


    }, console.log('Ejecuciones pendientes', numFuncionesEnCola));

    // Cola de efectos a cero
    animaMenu.stop(false, true);

    animaMenu.animate({
        top: '0'
    });

    animaMenu.css('display', 'flex');



});