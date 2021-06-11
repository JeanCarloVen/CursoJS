const d = document;

export default function scrollSpy() {
    const $section = d.querySelectorAll("section[data-scroll-spy]");
    const cb = (entries) => {
        //console.log("entries", entries);
        entries.forEach( (entry) => {
            //console.log("entry", entry);
            const id = entry.target.getAttribute("id");
            if(entry.isIntersecting){
                //Activa el elemento se esta visualizando o ya se vio
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add("active");
            }else{
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove("active");
            }
        })
        
    };
        
    const observer = new IntersectionObserver(cb,{
        //Propiedades del IntersectionObserver
        //root
        //rootMargin: "-250px" // Zona interactiva de observación se encoje para que no alcance a otras zonas
        threshold: [0.5, 0.75] //Limite de 0 a 1 en cuanto el elemento se visualize ejecuta la intersectionObserver
    }); 
    $section.forEach(el => observer.observe(el));
}