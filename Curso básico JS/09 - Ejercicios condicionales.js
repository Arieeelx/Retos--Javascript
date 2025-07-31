// 1. Imprime por consola tu nombre si una variable toma su valor

let var1 = 10;
const miNombre = "Ariel";

if (var1 == 10) {
    console.log(`El nombre del usuario es ${miNombre}`)
} else {
    console.log(`Nombre incorrecto`)
};

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

let user = "Pepe";
let password = 1234;
let ingreso = "Pepe";

if (user == ingreso && password == 1234) {
    console.log(`Usuario ingresado correctamente:
        Usuario: ${user}`)
} else {
    console.log(`Usuario incorrecto.
        Usuario: "${ingreso}" no existe.`)
};

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

let number = 7;
let result;

if (number == 0) {
    console.log(`El ${number} es un CERO`)
} else if (number > 0) {
    console.log(`El ${number} es un número positivo`)
} else {
    console.log(`El ${number} es un número negativo`)
}


// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

let edadUsuario = 17;
const edadPermitida = 18;
let edadFaltante = edadPermitida - edadUsuario;

if (edadUsuario >= 18) {
    console.log(`El usuario tiene ${edadUsuario} años, PUEDE VOTAR`)
} else if (edadUsuario < 18) {
    console.log(`El usuario tiene ${edadUsuario} años. NO PUEDE VOTAR || Le faltan ${edadFaltante} años para poder tener la edad permitida que son: "${edadPermitida}"`)
} else {
    console.log("ERROR")
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 

let age = 18;
age >= 18 ? console.log("El usuario es un adulto") : console.log("El usuario es menor de de edad");

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

let mes = 1;
let nombreMes;

switch (mes) {
    case 1:
        nombreMes = "Enero"
        break
    case 2:
        nombreMes = "Febrer"
        break
    case 3:
        nombreMes = "Marzo"
        break
    case 4:
        nombreMes = "Abril"
        break
    case 5:
        nombreMes = "Mayo"
        break
    case 6:
        nombreMes = "Junio"
        break
    case 7:
        nombreMes = "Julio"
        break
    case 8:
        nombreMes = "Agosto"
        break
    case 9:
        nombreMes = "Septiembre"
        break
    case 10:
        nombreMes = "Octubre"
        break
    case 11:
        nombreMes = "Noviembre"
        break
    case 12:
        nombreMes = "Diciembre"
        break
    default:
        nombreMes = ("ERROR")
}

console.log(nombreMes)


// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
// switch

let dias;

if (mes == 1 || mes == 5 || mes == 3 || mes == 7 || mes == 8 || mes == 10 || mes == 12) {
    dias = 31
    console.log(`${nombreMes} tiene ${dias} dias`)
} else if (mes == 4 || mes == 6 || mes == 9 || mes == 11) {
    dias = 30
    console.log(`${nombreMes} tiene ${dias} dias`)
} else if (mes == 2) {
    dias = 28
    console.log(`${nombreMes} tiene ${dias} dias`)
} else {
    console.log("ERRORS")
}


// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let continente = "sudamerica";
let idioma;

switch (continente) {
    case "sudamerica":
        idioma = "Español, Portugues, Inglés"
        break
    case "norteamerica":
        idioma = "Inglés, Frances"
        break
    case "europa":
        idioma = "Inglés, Aleman, Español"
        break
    default:
        idioma = "ERROR"
}

console.log(`En ${continente} se suele ocupar las siguientes lenguas: ${idioma}`)


