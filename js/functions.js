// A $( document ).ready() block.
$(document).ready(function() {

    /* Retardo de 8 segundos */

    setTimeout(saludo, 8000);

    function saludo() {

        /* Se desplaza hasta saludo para ejecutar la animación de bienvenida */

        var posicion = $(".saludo").offset().top;

        posicion = posicion - 350;

        $("html, body").animate({

            scrollTop: posicion

        }, 1000, function bienvenida() {
            $(".saludo-inicio").addClass("zoom");
        });
    }
});