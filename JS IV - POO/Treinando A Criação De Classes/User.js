class User {
    constructor(fullname, email, password) {
        this.fullname = fullname
        this.email = email
        this.password = password
    }

    login(email, password) {
        if(this.email === email) {
            if (this.password === password) {
                console.log('Login efetuado com sucesso!')
                return
            }
            console.log('Senha inválida!')
            return
        }
        console.log('Email inválido!')
    }
}

const user1 = new User("Alfred Calton", "alfred.calton@hotmail.com", "aBc@123")

console.log(user1)

user1.login("alfred.calton@hotmail.com", "aBc@123")
user1.login("alfred.calton@hotmail.com", "aBC@123")
user1.login("alfred@hotmail.com", "aBc@123")