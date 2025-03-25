/*
length - Esta función/propiedad devuelve la longitud de una cadena de texto, 
es decir, el número de caracteres que contiene.
*/
let cadena5 = "Hola Mundo";
let longitud = cadena5.length; // longitud será 10
console.log(longitud);

/*
toUpperCase() - Esta función convierte todos los caracteres de una cadena 
de texto a mayúsculas.
*/
let mayusculas = cadena5.toUpperCase(); // mayusculas será "HOLA MUNDO"
console.log(mayusculas);

/*
toLowerCase() - Esta función convierte todos los caracteres de una cadena
de texto a minúsculas.
*/
let minusculas = cadena5.toLowerCase(); // minusculas será "hola mundo"
console.log(minusculas);

/*
charAt(position) - Esta función devuelve el carácter que 
    se encuentra en una posición específica dentro de la cadena de texto.
*/
let caracter = cadena5.charAt(0); // caracter será "H"
let caracter2 = cadena5.charAt(2); // caracter2 será "l"
console.log(caracter);
console.log(caracter2);

/*
indexOf(substring) - Esta función busca la primera aparición de una 
subcadena (substring) dentro de la cadena de texto y devuelve la posición (índice) 
donde se encuentra. Si la subcadena no se encuentra, devuelve -1.
*/
let posicion = cadena5.indexOf("Hola"); // posicion será 1
let posicion2 = cadena5.indexOf("S"); // posicion2 será -1
console.log(posicion);
console.log(posicion2);

var frase = "Estoy aprendiendo JavaScript";
console.log(frase.indexOf("aprendiendo")); // Salida: 6
console.log(frase.indexOf("Python")); // Salida: -1 (no encontrado)

//console.log(0/0);


   