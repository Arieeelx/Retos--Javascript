// Arreglos o Arrays

// Declaración

let myArray = []
let myArray2 = new Array()

console.log(myArray)
console.log(myArray2)

// Inicialización

myArray = [1]
myArray2 = new Array(1)

console.log(myArray)
console.log(myArray2)

myArray = [1, 2, 3, 4]
myArray2 = new Array(1, 2)

console.log(myArray)
console.log(myArray2)

myArray = ["Ariel", "Alexander", "Fabian", 8, true]
myArray2 = new Array("Ariel", "Alexander", "Fabian")

console.log(myArray)
console.log(myArray2)

myArray2[2] = "Fabian 2.0"
console.log(myArray2)

// Métodos comunes

myArray = []

// Push y Pop || agregar y eliminar al final del array

myArray.push("Ariel")
myArray.push("Alexander")

console.log(myArray)

myArray.push("Fabian")
myArray.push("Laura")

console.log(myArray)

myArray.pop()
console.log(myArray)

console.log(myArray.pop())
console.log(myArray)

// Shift y Unshift || similar a pop y push pero al inicio del array

console.log(myArray.shift())
console.log(myArray)

myArray.unshift("Mamá Kena")
console.log(myArray)

// length || cantidad de elementos

console.log(myArray.length)

// clear || limpiar el array

myArray = []
console.log(myArray)

// Slice || cortar una parte del array

myArray.push("Papá Nacho", "Mamá Kena", "Ariel", "Alexander", "Fabian", "Laura")

let myNewArray = myArray.slice(1, 3) // el segundo parámetro es exclusivo

console.log(myNewArray) // Se imprimen solo los elementos del índice 1 y 2
console.log(myArray) // El array original no se modifica

// Splice || cortar una parte del array y modificar el array original

myArray.splice(1, 3)
console.log(myArray) // Se eliminan los elementos del índice 1, 2 y 3