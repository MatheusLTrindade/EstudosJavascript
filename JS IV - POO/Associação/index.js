// const Address = require('./Address')
const Person = require('./Person')

// const addr = new Address("7 de Setembro", 99, "Centro", "São Fidélis", "RJ")
const jhon = new Person("Jhon Doe", "7 de Setembro", 99, "Centro", "São Fidélis", "RJ")

console.log(jhon)
console.log(jhon.address.fullAddress())