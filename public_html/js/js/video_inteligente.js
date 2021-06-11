const d = document, w = window;

export default function smartVideo() {
    const $videos = d.querySelectorAll("video[data-smart-video]");
    
    //Por cada entrada en el Observer ejecutará la siguiente programación
    const cb = (entries) => {
        console.log(entries); //Una entrada es un arreglo que describe en que momento y espacio de la pantalla se esta observando el elemento
        //Se recorre el arreglo del elemento y en donde la propiedad deseada se necesite se cambia el target
          entries.forEach((entry) => {
              if(entry.isIntersecting){
                  entry.target.play();
                  entry.target.defaultMuted = false;
              }else{
                  entry.target.pause();
                  entry.target.defaultMuted = true;
              }
              
              //Se pone el video en espera al cambiar de pestaña  
              w.addEventListener("visibilitychange", (e) => 
                d.visibilityState === "visible"
                ? entry.target.play()
                : entry.target.pause() 
                );            
          })
    }
    
    
    const observer = new IntersectionObserver(cb, {threshold: 0.5});
    
    
    $videos.forEach(el => observer.observe(el));
    
}