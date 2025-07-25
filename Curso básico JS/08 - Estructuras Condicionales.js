/************
CONDICIONALES
************/

// IF , ELSE IF , ELSE

let age = 50;

if (age <= 29) {
    console.log(`La edad es menor o igual a ${age}`)
} else if (age >= 50) {
    console.log(`La edad es mayor o igual a 50!`)
} else {
    console.log(`la edad esta en el rango de 30 a 49 años`)
}

// OPERADORES TERNARIOS COMO CONDICIONAL

age == 37 ? console.log(`La edad es 37`) : console.log(`La edad no es 37`)

const message = age == 50 ? "La edad es 50" : "La edad no es 50"

console.log(message)

// SWITCH | alternativa para anidar if else cuando son muchas condicionales

let day = 0
let dayName 

if (day == 0) {
    dayName = "Lunes"
} else if (day == 1) {
    dayName = "Martes"

} else if (day == 2) {
    dayName = "Miércoles"

} else if (day == 3) {
    dayName = "Jueves"

} else if (day == 4) {
    dayName = "Viernes"
}

switch (day) {
    
    case 0:
        dayName = "Lunes"
    case 1:
        dayName = "Martes"
    case 2:
        dayName = "Miércoles"
    case 3:
        dayName = "Jueves"
    case 4:
        dayName = "Viernes"
    case 5:
        dayName = "Sábado"
    case 6:
        dayName = "Domingo"    
}

console.log(dayName)
