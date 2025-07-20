// 1. Crea una variable para cada operación aritmética

let sumar = 5 + 2;
let restar = 5 - 2;
let multiplicacion = 5 * 2;
let dividir = 5 / 2;

let modulo = 5 % 2;
let exponente = 5 ** 2;

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

sumar += 3;
restar -= 1;
multiplicacion *= 5;
dividir /= 1;
modulo %= 2;
exponente **= 3;

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

console.log(5 > 3);
console.log(2 < 8);
console.log(5 == 5);
console.log(5 >= 2);
console.log(10 >= 10);

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log(5 < 3);
console.log(2 > 8);
console.log(5 != 5);
console.log(5 < 2);
console.log(10 < 10);

// 5. Utiliza el operador lógico and

console.log(5 > 2 && 10 < 11);

// 6. Utiliza el operador lógico or

console.log(5 < 1 || 7 > 6);

// 7. Combina ambos operadores lógicos

console.log(5 < 10 && 7 > 3 || 4 < 5 && 3 > 1);

// 8. Añade alguna negación

console.log(!(5 == 5 && 4 < 5));

// 9. Utiliza el operador ternario

let moverCarro = true; 

moverCarro ? console.log("Se moverá el carro hacia la izquierda") : console.log("Se moverá el carro hacia la derecha");

// 10. Combina operadores aritméticos, de comparáción y lógicas

let valorUno = 5 + 5;
console.log(valorUno);

valorUno ++;
console.log(valorUno);

console.log( valorUno <= 11 && valorUno == valorUno++);