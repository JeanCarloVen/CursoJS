const d = document;
export default function slider(){
    //Captura de los elementos del DOM con los que se va a interactuar
    const $nextBtn = d.querySelector(".slider-btns .next"),
            $prevBtn = d.querySelector(".slider-btns .prev"),
            $slides = d.querySelectorAll(".slider-slide");
    let i = 0;
    d.addEventListener("click", e => {
        //Dado que tenemos todo el selector en las variables no es necesario qeu matche
        if(e.target === $prevBtn){
            console.log(e.target);
            e.preventDefault(); // prevenimos el comportamiento por defecto para que no se vaya arriba el click
            $slides[i].classList.remove("active");
            i--; 

            if(i<0){
                i = $slides.length - 1;
            }

            $slides[i].classList.add("active");
        }
        
        if(e.target === $nextBtn){
            e.preventDefault();
            $slides[i].classList.remove("active");
            i++;
            if(i >= $slides.length){
                i = 0;
            }
            $slides[i].classList.add("active");
        }
        
        
    });
}