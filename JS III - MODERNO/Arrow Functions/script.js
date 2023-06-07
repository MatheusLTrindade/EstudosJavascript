// Função normal
function normalSum (a, b) {
    return a + b
}
console.log(`Soma normal: ${normalSum(2, 2)}`)

// Função anônima
const anonymousSum = function (a, b) {
    return a + b
}
console.log(`Soma anônima: ${anonymousSum(2, 2)}`)

// Arrow Function
const arrowSum = (a, b) => a + b
console.log(`Soma arrow function: ${arrowSum(2, 2)}`)

const double = n => `O dobro de ${n} é ${n * 2}`
const number = 21
console.log(double(number))

// High Order Function
const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen']
const startingWithP = towns.filter(town => town[0] === 'P')
console.log(startingWithP)