// decarar variabe
var a;
let b;
const c = - 10;

var x = 5;
console.log(x);

//declarar variable con el nombre e imprimir mensaje saludo con la variabale
var nombre = "Diana";
//imprimir
console.log("Hola " + nombre + " ¿Como estás?");

var num1 = 5;
var num2 = 10;
var resultado = num1 + num2;
console.log(resultado);

var resultador = num1 - num2;
console.log(resultador);

var resultadom = num1 * num2;
console.log(resultadom);

//reasignar variables
var a = 10;
let d = 20;
var f = d;
console.log(f);

/*
Concatenar las cadenas para crear la siguiente oración "el perro negro corrió rapidamente a la tienda" 
*/
var sustantivo = "perro ";
var adjetivo = "negro ";
var verbo = "corrió ";
var adverbio = "rapidamente ";
console.log("El " + sustantivo + adjetivo + verbo + adverbio + "a la tienda");

var resultadomen = num1 + num2;
console.log("El resultado de " + num1 + " + " + num2 + " es " + resultadomen);

var num3 = 20;
var num4 = 8;
var diferencia = num3 - num4;
console.log("La diferencia entre " + num3 + " y " + num4 + " es " + diferencia);

var num5 = 6;
var num6 = 7;
var producto = num5 * num6;
console.log("E producto entre " + num5 + " y " + num6 + " es " + producto);

// +=, -=, *=, /=, %=
var saldo = 1000;
saldo += 500;
console.log(saldo);

saldo -= 200;
console.log(saldo);

saldo *= 100;
console.log(saldo);

saldo /= 5;
console.log(saldo);

saldo %= 30;
console.log(saldo);

// ----- CONDICIONALES ------
// If
var hora = new Date().getHours(); //metodo para obtener la hora del sistema

if (hora < 12) {
   console.log("Buenos días"); 
} else if(hora < 18){
    console.log("Buenas tardes");
} else {
    console.log("Buenas noches");
}

//verificar si un número es par o impar
var num7 = 11;

if (num7%2===0) {
    console.log("Numero par");    
} else {
    console.log("Numero impar");
}


