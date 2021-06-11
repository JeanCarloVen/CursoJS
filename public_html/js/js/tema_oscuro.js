const d = document, ls = localStorage;
export default function darkTheme(btn, classDark){
    const $themeBtn = d.querySelector(btn), 
            $selectors =  d.querySelectorAll("[data-dark]"); //Genera una lista de nodos: selecciona sólo los atributos data dark que contenga el html
    let moon="🌙", sun="☀";
    
    //Métodos que seleccionan el modo del tema
    const lightMode = () =>{
        $selectors.forEach(el => el.classList.add(classDark))
        $themeBtn.textContent = sun;
        ls.setItem("theme", "light");
    }
    const darkMode = () =>{
        $selectors.forEach(el => el.classList.remove(classDark))
        $themeBtn.textContent = moon;
        ls.setItem("theme", "dark");
    }
    
        //Deteccion del evento click que coincide sobre el boton
    d.addEventListener("click", e=>{
        if(e.target.matches(btn)){
            if($themeBtn.textContent === moon){
                lightMode();
            }else{
                darkMode();
            }
        }
    });
    
    d.addEventListener("DOMContentLoaded", e => {
        
        //caso Inicial, donde no se ha seleccionado previamente el tema
        if(ls.getItem("theme") === null){
            is.setItem("theme", "light");
        }
        //caso donde se tiene seleccionado el light
        if(ls.getItem("theme") === "light"){
            lightMode();
        }
        
        //caso donde se tiene seleccionado el dark
        if(ls.getItem("theme") === "dark"){
            darkMode();
        }
        
        
    });
}