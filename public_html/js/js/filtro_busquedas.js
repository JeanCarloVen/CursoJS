const d = document;

export default function searchFilters(input, selector){
    d.addEventListener("keyup", (e) =>{
        if(e.target.matches(input)){
            console.log(e.key);
            
            if(e.key === "Escape"){
                e.target.value = "";
                e.target.placeholder = "hola hijo de puta";
            }
            
            const a = d.querySelectorAll(selector); //Da una lista de nodos del elemento HTML selector que es son las div "card"
            a.forEach( (el) => el.textContent.toLowerCase().includes(e.target.value) ? el.classList.remove("filter") : el.classList.add("filter"));
            
        }
    });
}