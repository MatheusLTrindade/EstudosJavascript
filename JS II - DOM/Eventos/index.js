function register(ev){
    console.log(ev)
    const sectionElement = ev.currentTarget.parentNode
    const username = sectionElement.children.username.value
    const password = sectionElement.children.password.value
    const passwordConfirmation = sectionElement.children.passwordConfirmation.value

    if(password === passwordConfirmation) {
        alert('Parabéns ' + username + ',\n' + 'Você foi registrado com sucesso')
    } else {
        alert('ERRO: As senhas não conferem!')
    }
}

const button = document.getElementById('registerButton')

button.addEventListener('click', register)

function removeListener(){
    button.removeEventListener('click', register)
    alert('Event removed')
}

button.addEventListener('mouseover', function (ev){
    console.log(ev.currentTarget)
})