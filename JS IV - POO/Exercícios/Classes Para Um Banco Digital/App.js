const Deposit = require("./classes/Deposit")
const Loan = require("./classes/Loan")
const Transfer = require("./classes/Transfer")
const User = require("./classes/User")

module.exports = class App {
    static #user = []

    static findUser(email) {
        const user = this.#user.find(user => user.email === email)
        return user ?? null
    }

    static createUSer(email, fullName) {
        const userExists = App.findUser(email)
        if (!userExists) {
            this.#user.push(new User(email, fullName))
        }
    }

    static deposit(email, value) {
        const user = App.findUser(email)
        if (user) {
            const newDeposit = new Deposit(value)
            user.account.addDeposit(newDeposit)
        }
    }

    static transfer(fromUserEmail, toUserEmail, value) {
        const fromUser = App.findUser(fromUserEmail)
        const toUser = App.findUser(toUserEmail)

        if (fromUser && toUser) {
            const newTransfer = new Transfer(fromUser, toUser, value)
            fromUser.account.addTransfer(newTransfer)
            toUser.account.addTransfer(newTransfer)
        }
    }

    static takeLoan(email, value, numberOfInstallments) {
        const user = App.findUser(email)
        if (user) {
            const newLoan = new Loan(value, numberOfInstallments)
            user.account.addLoan(newLoan)
        }
    }

    static changeLoanFee(newFeePercentage) {
        Loan.fee = newFeePercentage
    }
}