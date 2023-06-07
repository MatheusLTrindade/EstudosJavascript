const a = 0 // false
const b = null // false
const c = "Teste" // true

console.log(a || b || c)
console.log(a ?? b ?? c)
console.log(b ?? c)


let d = 0
let e = d || 42
console.log({ d, e })

e = d ?? 42

console.log({ d, e })

let f = null ?? 42
console.log({f})