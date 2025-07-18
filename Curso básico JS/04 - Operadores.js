/*********
OPERADORES
*********/

// OPERADOR ARITMÉTICO

let a = 6;
let b = 4;

console.log(a + b); // Suma
console.log(a - b); // Resta
console.log(a * b); // Multiplicar
console.log(a / b); // División

console.log(a % b); // Módulo
console.log(a ** b); // Exponenete

a++ // Incremento
console.log(a);

b-- // Decremento
console.log(b);

// OPERADORES DE ASIGNACIÓN

let miVariable = 2;
console.log(miVariable);

miVariable += 2;
console.log(miVariable);

// OPERADORES DE COMPARACIÓN

console.log(a > b); // MAYOR QUE
console.log(a < b); // MENOR QUE
console.log(10 >= 10); // MAYOR O IGUAL
console.log(10 <= 11); // MENOR O IGUAL
console.log(5 == 4); // IGUAL A QUE / IGUALDAD POR VALOR
console.log(5 == "5"); // APLICA A STRINGS
console.log(5 === 5); // IGUALDAD POR IDENTIDAD
console.log(5 != 6); // ES DISTINTO A
console.log(5 !== "5"); // ES DISTINTO POR IDENTIDAD
console.log(0 == false);

// TRUTHY VALUES (VALORES VERDADEROS)

// todos los números positivos y negativos menos el cero
// todas las cadenas de textos menos vacías
// el boolean TRUE

// FALSY VALUES (VALORES FALSOS)

// 0
// 0n
// null
// undefined
// NaN
// Cadenas de textos 

// OPERADORES LÓGICOS

// AND (&&) AMPERSAND 
console.log(5 > 2 && 2 < 3); // SE DEBEN CUMPLIR LAS DOS CONDICIONES
console.log(4 < 5 && 5 > 10); // NO SE CUMPLEN LAS DOS POR ENDE FALSE

// OR (||) DOBLE PIPE
console.log(5 > 2 || 2 < 3); // SE DEBEN CUMPLIR UNA DE LAS CONDICIONES
console.log(4 < 5 || 5 > 10); // SE CUMPLE UNA POR ENDE TRUE

// NOT (!)
console.log(!(5 > 2 || 2 < 3)); // SE REVIERTE EL RESULTADO 
console.log(!(4 < 5 && 5 > 10)); // SE REVIERTE EL RESULTADO

// OPERADORES TERNARIOS (? "x" : "y")|| Si cumple algo se hace X si cumple otra hace Y

const isRaining = true;

isRaining ? console.log("Esta lloviendo") : console.log("No está lloviendo");