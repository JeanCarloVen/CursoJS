//1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
//2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
//3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
//4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

//1)
//let cadena;
//let sizeLength;
//function sizeCadena(cadena = 'default'){
//    
//    return cadena.length;
//}
//console.log(sizeCadena());
//

//2)
//let miCadena;
//
//function cortarCadena(miCadena, corte){
//    console.log(miCadena.slice(0, corte));
//}
//
//cortarCadena("Hola Mundo", 4);
//
//
//3)
//let miCadena = null;
//
//function cortarCadena(miCadena, parametro){
//    //Validacion de datos:
//    if(isNan(miCadena)){
//        console.log(miCadena.split(parametro));    
//    }
//    else{
//        "No es una Cadena"
//    }
//    
//    
//}

//cortarCadena("Hola Mundo Como", ' ');

//4)
//let cadena;
//function repetirCadena(cadena, n){
//    if(isNaN(cadena)){
//        console.log(cadena.repeat(n));
//    }
//    else{
//        "No es una Cadena";
////    }
////}
////
////
////repetirCadena("hola que hace ", 2);
//
//
////Ejercicio 17)
////Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
//const calcularAnios = (fecha = undefined) => {
//    if(fecha === undefined )return console.warn("No ingresaste la fecha");
//    if(!fecha instanceof Date ) return console.error("El valor que ingresaste no es una fecha válida");
//    let hoyMenosFecha = new Date().getTime() - fecha.getTime(),
//    aniosEnMS = 1000*60*60*24*365
//    aniosHumanos = Math.floor(hoyMenosFecha/aniosEnMS);
//    
//    return (Math.sign(aniosHumanos) === -1))
//    ? console.info('Faltan $(Math.abs(aniosHumanos)) años para el $(fecha.getFullYear()) ')
//}
//
