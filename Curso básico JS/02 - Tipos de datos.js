/**************
 TIPOS DE DATOS
***************/

// STRING / Cadena de texto

let text = "Holaaa, esto es un texto entre comillas";

// NUMBER / Números

let age = 28; // int
let high = 1.77; // float

// BOOLEANOS / BOOLEAN

let isTeacher = true;
let isStudent = false;

// UNDEFINED / No definido

let undefinedValue;
console.log(undefinedValue);

// NULL / Valor nulo / Object <- valor primitivo

let nullValue = null;
console.log(nullValue);

// SYMBOL / Símbolos

let mySymbol = Symbol("mysymbol");
console.log(mySymbol);

// BIG INT / Gran entero

let myBigInt = BigInt(987945164564889878978979875464123131231231325645648978978);
let myBigInt2 = 89748948949848994849894884984989489789798489468612315489468189498456456486486n;

console.log(myBigInt);
console.log(myBigInt2);

// MOSTRAR LOS TIPOS DE DATOS

console.log(typeof text);
console.log(typeof age);
console.log(typeof high);
console.log(typeof isTeacher);
console.log(typeof isStudent);
console.log(typeof undefinedValue);
console.log(typeof nullValue);
console.log(typeof mySymbol);
console.log(typeof myBigInt);
console.log(typeof myBigInt2);