const d = document, n = navigator;
export default function getGeolocation(id) {
        const $id = d.getElementById(id), 
                options = {
                    enableHighAccuracy: true, //la mejor lectura posible
                    timeout: 5000, //cuanto tiempo espera respuesta para tomar lectura
                    maximumAge: 0//No se guarde en cache las lecturas
                };
        
        //En caso de exito de la lectura de la función position
        const success = (position) => {
            let coords = position.coords;
           //console.log(position);
           
           $id.innerHTML = `
            <p>Tu posición actual es: </p>
            <ul>
                <li>Latitud: <b>${coords.latitude}</b></li>
                <li>Longitud: <b>${coords.longitude}</b></li>
                <li>Precisión: <b>${coords.accuracy}</b>metros</li>
            </ul>
            <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude}, 20z" target="_blank" rel="noopener" >Ver en Google Maps</a>
            `
        };
        
        //En caso de error en la lectura para la fuinción position
        const error = (err) => {
            $id.innerHTML = `<p>Error${err.code}:${err.message}</p>`
            console.log(err);
        };
        
        //getCurrentPosition obtiene las coordenedas del ordendador
        //Funcion de la geolocalización necesita de opciones [options] devuelve coordenadas entre otros
        n.geolocation.getCurrentPosition(success, error, options);

}