/***************************
STRING'S || CADENAS DE TEXTO
***************************/

// CONCATENACIÓN

let miNombre = "Ariel";
let saludo = "Hola, " + miNombre + "!";

console.log(saludo);
console.log(typeof saludo);

// LONGITUD

console.log(saludo.length);

// ACCESO A CARACTERES

console.log(saludo[0]);
console.log(saludo[1]);
console.log(saludo[6]);

// MÉTODOS COMÚNES

console.log(saludo.toUpperCase());
console.log(saludo.toLowerCase());
console.log(saludo.indexOf("a"));
console.log(saludo.indexOf("A"));
console.log(saludo.includes("w"));
console.log(saludo.includes("l"));
console.log(saludo.slice(0, 2));
console.log(saludo.slice(0, 7));
console.log(saludo.replace("Ariel", "PUTAZO"));

// TEMPLATE LITERALS || Plantillas literales

let texto = `Este es mi texto escrito
y gracias a este tipo de comillas.
Puedo saltarme filas y seguir escribiendo mi variable.`;
console.log(texto);

console.log(`Hola amigos, hoy quiero saludar a ${miNombre}.
Es un buen muchacho... o eso creo.`)


