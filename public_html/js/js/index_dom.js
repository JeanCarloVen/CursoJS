import hamburgerMenu from "./menu_hamburguesa.js";
import {digitalClock, alarm} from "./reloj.js";
import {moveBall, shortcuts} from "./keyboard.js";
import countdown from "./countdown.js";
import scrollTopButton from "./boton_scroll.js";
import darkTheme from "./tema_oscuro.js";
import responsiveMedia from "./objeto_responsive.js";
import responsiveTester from "./prueba_responsive.js";
import userDeviceInfo from "./deteccion_dispositivos.js";
import networkStatus from "./deteccion_red.js";
import webCam from "./deteccion_camara.js";
import getGeolocation from "./geolocalizacion.js";
import searchFilters from "./filtro_busquedas.js";
import draw from "./sorteo.js";
import slider from "./carusel.js"
import scrollSpy from "./scroll_espia.js"
import smartVideo from "./video_inteligente.js"
import contactFormValidations from "./validaciones_formulario.js"
import speechReader from "./narrador.js"

//Queremos que funcione al cargar la página, por tanto, se coloca el addEventListener con el evento DOMContentLoaded
const d = document;
d.addEventListener("DOMContentLoaded", (e)=>{
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
    alarm("./assets/alarma.mp3", "#activar-alarma", "#desactivar-alarma");
    countdown("countdown", "May 20, 2021 14:18:19", "Feliz Cumpleaños"); //dado que no se utilizará un querySelector no es necesario un #countdown
    scrollTopButton(".scroll-top-btn");
    responsiveMedia("youtube","(min-width: 1024px)", 
        `<a href="https://www.youtube.com/watch?v=-ZClicWm0zM" target=".blank" rel="noopener">Ver video</a>`, 
        `<iframe width="560" height="315" src="https://www.youtube.com/embed/-ZClicWm0zM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>` );
    responsiveMedia("gmaps","(min-width: 1024px)",
        `<a href="https://goo.gl/maps/4u2oHPfwWcjSicGc8" target=".blank" rel="noopener">Ver mapa</a>`, 
        `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.6616309270976!2d-99.16978803509346!3d19.427020586887494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff35f5bd1563%3A0x6c366f0e2de02ff7!2sEl%20%C3%81ngel%20de%20la%20Independencia!5e0!3m2!1ses-419!2smx!4v1620879810582!5m2!1ses-419!2smx" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>` );
    responsiveTester("responsive-tester");
    userDeviceInfo("user-device");
    webCam("webCam");
    getGeolocation("geolocation");
    searchFilters(".card-filter", ".card");
    draw("#winner-btn", ".player");
    slider();
    scrollSpy();
    smartVideo();
    contactFormValidations();
    
}); 

d.addEventListener("keydown", e=>{
    shortcuts(e);
    moveBall(e,".ball", ".stage"); 
});

darkTheme(".dark-theme-btn","dark-mode");
networkStatus();
speechReader();