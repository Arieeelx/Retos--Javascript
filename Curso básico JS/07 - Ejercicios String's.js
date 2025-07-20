// 1. Concatena dos cadenas de texto

let nombre = "Ariel";
let appelido = "Sereño";

let nombreCompleto = `El nombre del participante es ${nombre} ${appelido}.`;

console.log(nombreCompleto);
    
// 2. Muestra la longitud de una cadena de texto

console.log(nombreCompleto.length);

// 3. Muestra el primer y último carácter de un string

console.log(nombreCompleto[0]);
console.log(nombreCompleto[42]);

// 4. Convierte a mayúsculas y minúsculas un string

console.log(nombreCompleto.toUpperCase());
console.log(nombreCompleto.toLowerCase());

// 5. Crea una cadena de texto en varias líneas

let textoAmor = `

|Poesía para una enamorada|

Este presente texto,
es mi carta de pasión.
Mi presente entero,
Mi prueba de amor.

Quiero tocar de tu cuerpo,
como también sentir tu olor.
Morder cada parte tuya,
Y perderme en tus labios.
`;

console.log(textoAmor);

// 6. Interpola el valor de una variable en un string

console.log(typeof textoAmor);

// 7. Reemplaza todos los espacios en blanco de un string por guiones

console.log(nombreCompleto.replaceAll(" ", "-"));

// 8. Comprueba si una cadena de texto contiene una palabra concreta

console.log(textoAmor.includes("amor"));

// 9. Comprueba si dos strings son iguales

console.log(nombreCompleto == textoAmor);

// 10. Comprueba si dos strings tienen la misma longitud

console.log(nombreCompleto.length == textoAmor.length);