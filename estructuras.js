//Escapar caracteres
//Cuando el texto contiene caracteres especiales


var miCadena = 'una frase con "comillas dobles" dentro de comillas dobles';
var miCadena1 = "Una frase con 'comillas simples' dentor de comillas simples";
var miCadena2 = "que fácil es incluir \'comillas simples' dentro de comillas simples";

console.log(miCadena1);

// ----ARRAYS---
// reunir variables diferentes del mismo tipo
var diasSemana = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];
console.log(diasSemana[0]);

//crear un Array con los meses del año y mostras el nombre del mes de tu cumpleaños
var mesesAño = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(mesesAño[2]);

// ----Notación de corchetes----
//cadena = 5
//Indice = 4
var dia1 = "lunes";

console.log(dia1[4]);
console.log(dia1[1]);
console.log(dia1[6]);
console.log(dia1[-1]);

//----Inmutabilidad de cadenas de caracteres----
// no se puede cambiar
var miCadena3 = "Jola Mundo";
miCadena[0] = "H";
console.log(miCadena3);

//forma correcta de corregir variable mal escrita
var miCadena3 = "jola mundo";
miCadena3 = "Hola mundo";
console.log(miCadena3);

//----Notacion de corchetes ultimo caracter------
// mostrar la longitud de la cadena
var cadena = "javascript";
console.log(cadena.length);
//mostrar el ultimo indice de la cadena
console.log(cadena[cadena.length - 1]);

// ---- Arreglos de listas -----
var miArreglo = ["Diego", 24]
console.log(miArreglo);

// ----Arreglos - listas - anidados ----
var estudiantes = [["Diego", 25], ["Ana", 20]];
console.log(estudiantes[1][0]);

var otroArreglo = [10, 20, 30];
console.log(otroArreglo);
console.log(otroArreglo[0]);
console.log(otroArreglo[1]);
console.log(otroArreglo[2]);

var suma = otroArreglo[0] + otroArreglo[1] + otroArreglo[2];
console.log(suma);
// -modificar datos de un arreglo - los arreglos a diferencia de las cadenas si se pueden modificar-----
otroArreglo[0] = 80;
console.log(otroArreglo);
//-arreglo multidimensional
var miArreglo = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
//var  miArreglo = [[1,2,3], [4,5,6], [7,8,9]];
//Indice               0        1        2
//Indice interno
console.log(miArreglo[0]);
console.log(miArreglo[1]);
console.log(miArreglo[2]);

console.log(miArreglo[0][2]);

// agregar un elemento al arreglo
var estaciones = ["Invierno", "Otoño", "Primavera"];
estaciones.push("verano");
console.log(estaciones);
// remover elemento del arreglo- pop elimina el ultimo elemento agregado
estaciones.pop();
console.log(estaciones);
//remover primer elemento del arreglo
estaciones.shift();
console.log(estaciones);
//agregar un elemnto en primera posición del arreglo
estaciones.unshift("Invierno");
console.log(estaciones);

// ------ Boleanos -------
//variable de tipo logico
var x = 5;
var y = 10;
var x = y; //asignacion del valor de y a x
console.log(x);

// incremento y decremento}
var a = 5;
a = a + 1;
console.log(a);
a++;
console.log(a);
a--;
console.log(a);
a = a - 1;
console.log(a);

// operadores logicos
//negacion (!) se utiliza para invertir el valor de una expresion logica

var visible = true;
var oculto = !visible;
console.log(oculto);

// --- and---
var valor1 = true;
var valor2 = true;
resultado7 = valor1 && valor2;
console.log(resultado7);

// ---- or ---
var valor1 = true;
var valor2 = false;
resultado6 = valor1 || valor2;
console.log(resultado6);

var valor1 = false;
var valor2 = false;
resultado8 = valor1 || valor2;
console.log(resultado8);

// --- relacionales ---
// comparar dos valores y devolver un booleano
var a = '5';
var b = 2;
resultado1 = a >= b;
console.log(resultado1);

resultado2 = a <= b;
console.log(resultado2);

resultado3 = a == b;
console.log(resultado3);

resultado4 = a != b;
console.log(resultado4);

resultado5 = a !== b;
console.log(resultado5);

let num1 = '5'; //javascript lo toma como falso
let num2 = 5;
console.log(num1 != num2);

var texto1 = "a";
var texto2 = "b";
resultadoa = texto1 < texto2;
console.log(resultadoa);

// --- estructuras de control de flujo -----
var mostrarMensaje = true;
if (mostrarMensaje == true) {
    console.log("Hola mundo");
}

// -- estructura for -----
// se utiliza para repetir un bloque de codigo un numero detrminado de veces

for (let i = 1; i <= 5; i++) {
    console.log(i); //imprime de 1 a 5, incrementando de a 1
}

//bucle for ... in
let persona1 = {
    nombre: "Juan",
    edad: 30,
    saludar: function () {
        console.log("Hola, mi nombre es " + this.nombre);
    }
};
persona1.saludar();

let persona4 = {
    nombre: "Ana",
    saludar: function () {
        console.log("Hola, mi nombre es " + this.nombre);
    }
};
persona4.saludar();

let profesor = { Nombre: "Juan", Edad: 30, Ciudad: "Madrid" }

for (let clave in profesor) {
    console.log(clave + ": " + profesor[clave])
}

//length - Esta función/propiedad devuelve la longitud de una cadena de texto, es decir, el número de caracteres que contiene.
let cadena5 = "Hola Mundo";
let longitud = cadena5.length; // longitud será 10
console.log(longitud);

//toUpperCase() - Esta función convierte todos los caracteres de una cadena de texto a mayúsculas.
let mayusculas = cadena5.toUpperCase(); // mayusculas será "HOLA MUNDO"
console.log(mayusculas);

//toLowerCase() - Esta función convierte todos los caracteres de una cadena de texto a minúsculas.
let minusculas = cadena5.toLowerCase(); // minusculas será "hola mundo"
console.log(minusculas);

//charAt(position) - Esta función devuelve el carácter que se encuentra en una posición específica dentro de la cadena de texto.
let caracter = cadena5.charAt(0); // caracter será "H"
let caracter2 = cadena5.charAt(2); // caracter2 será "l"
console.log(caracter);
console.log(caracter2);

//indexOf(substring) - Esta función busca la primera aparición de una subcadena (substring) dentro de la cadena de texto y devuelve la posición (índice) donde se encuentra. Si la subcadena no se encuentra, devuelve -1.
let posicion = cadena5.indexOf("Hola"); // posicion será 1
let posicion2 = cadena5.indexOf("S"); // posicion2 será -1
console.log(posicion);
console.log(posicion2);

var frase = "Estoy aprendiendo JavaScript";
console.log(frase.indexOf("aprendiendo")); // Salida: 6
console.log(frase.indexOf("Python")); // Salida: -1 (no encontrado)

//array con nombres de productos
let productos = ["laptop", "Mouse", "Teclado", "Monitor"];

productos.forEach((producto, indice) => {
    console.log(`Producto ${indice + 1}: ${producto}`);
}
);

//reduce - reduce un array a un solo valor, aplicando una funcion acumuladora
let precios = [10, 20, 30];
let total = precios.reduce((acc, precio) => acc + precio, 0);
console.log(total); 

//find
//let personas = [
  //  {nombre: "Ana" edad: 25},
   // {nombre: "Luis" edad: 30},
//];

//let personaEncontrada = personas.find(p => p.nombre === "Luis");
//console.log(personaEncontrada);

//lastIndexOf
let texto = "Hola Profe Diego";
let position = texto.lastIndexOf("Profe");
console.log(position);

/* 
split(separador)
Divide una cadena en un array de subcadenas, 
utilizando el separador que le pases como argumento. 
Si no se especifica un separador, 
convierte la cadena completa en un solo elemento del array.
*/

let texto3 = "Hola, cómo estás Valentina?";
let palabras = texto3.split(" ");
console.log(palabras);


/*. concat()
Este método se utiliza para unir dos o más cadenas (o arrays). 
No cambia las cadenas o arrays existentes, 
sino que devuelve una nueva concatenación.
El método concat() une las dos cadenas y devuelve una nueva.
*/

let parte1 = "Perro ";
let parte2 = "es blanco ";
let parte3 = "y con puntos ";
let parte4 = " naranja";
let resultado = parte1.concat(parte2)+(parte3)+(parte4);
console.log(resultado);

/*

join()
Este método une todos los elementos de un array en una sola cadena, 
separados por el valor que se le pase como argumento. 
Si no se pasa ningún argumento, usa una coma , como separador por defecto.
En este caso, join(" ") convierte el array en una cadena, 
uniendo los elementos con un espacio.
*/
let array = ["Yo", "soy", "divertida"];
let cadena8 = array.join(" ");
console.log(cadena8);

/*
reverse()
Este método invierte el orden de los elementos en un array. 
Modifica el array original y devuelve el array invertido.
Aquí, reverse() invierte el orden de los elementos del array.
*/
let numeros = [1, 2, 3, 4, 5, 6 , 7 ,8, 9, 10];
numeros.reverse();
console.log(numeros);

//--- factura ---


//ejemplo tabla con tabulador
// Lista de compras: [Producto, Cantidad, Precio Unitario]
let listaProductos = [
    ["Camiseta", 12, 9000],
    ["Pantalón", 3, 14200],
    ["Medias", 12, 6600],
    ["Chaqueta", 5, 34500],
    ["Top", 4, 13500]
];

// Mostrar encabezado
console.log("Factura de Compras");
console.log("------------------------------------------------------");
console.log("Producto   | Cantidad | Precio         |  Total");
console.log("------------------------------------------------------");

// Variable para almacenar el total general
let totalFinal = 0;

// Recorrer la lista de compras y calcular totales
listaProductos.forEach(function(producto) {
    let nombre = producto[0];
    let cantidad = producto[1];
    let precio = producto[2];
    let totalProducto = cantidad * precio; // Calcula total por producto

    // Sumar al total final
    totalFinal += totalProducto;

    // Mostrar cada producto en la tabla
    console.log(`${nombre.padEnd(10)} | ${cantidad.toString().padEnd(8)} | $${precio.toString().padEnd(13)} | $${totalProducto}`);
});

console.log("----------------------------------------------------");
console.log(`TOTAL FACTURADO: $${totalFinal.toLocaleString()}`);

// ----  Funciones ca cu ad ra
function agregar(valor) {
    document.getElementById("pantalla").value += valor;
}

function borrar() {
    document.getElementById("pantalla").value = "";
}

function calcular() {
    try {
        document.getElementById("pantalla").value = eval(document.getElementById("pantalla").value);
    } catch (e) {
        alert("Error en la operación");
    }
}