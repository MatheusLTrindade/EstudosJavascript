const App = require("./App")

App.createUSer('matheus@email.com', 'Matheus Trindade')
App.createUSer('lucas@email.com', 'Lucas Queiroga')
App.createUSer('juliana@email.com', 'Juliana Conde')

App.deposit('matheus@email.com', 100)

App.transfer('matheus@email.com', 'lucas@email.com', 20)

App.changeLoanFee(10)
App.takeLoan('juliana@email.com', 2000, 24)

console.log(App.findUser('matheus@email.com'))
console.log(App.findUser('matheus@email.com').account)
console.log(App.findUser('lucas@email.com'))
console.log(App.findUser('lucas@email.com').account)
console.log(App.findUser('juliana@email.com'))
console.log(App.findUser('juliana@email.com').account)
console.log(App.findUser('juliana@email.com').account.loans[0].installments)