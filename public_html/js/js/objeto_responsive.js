const d = document, w = window;

export default function responsiveMedia(id, mq, mobileContent, desktopContent){
        let breakpoint = w.matchMedia(mq); //Consideremos que mq = min-width: 1024px
        
        const responsive = (e) => {
            if(e.matches){  //e.matches devuelve verdadero o falso, cuando la media query cumpla o no.
                d.getElementById(id).innerHTML = desktopContent;
            }else{
                d.getElementById(id).innerHTML = mobileContent;
            }
        }
        breakpoint.addEventListener("change", responsive); //Se agrega un listener a la funcion llamada responsive, que tiene como parametro un evento que es la  mediaQuery que detecará los distintos cambios en el tamaño de la ventana
        responsive(breakpoint); //Para que se ejecute en el momento de carga del documento,  independientemente del cambio en tamaño.
}