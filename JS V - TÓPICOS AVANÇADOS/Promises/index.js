// pendente - pending
// resolvida - resolved
// rejeitada - rejected

function execute() {
    // faz alguma coisa
    return new Promise((resolve, reject) => {
        console.log('A promise está sendo executada...')
        setTimeout(() => {
            console.log('Resolvendo a promise...')
            resolve('Resultado')
        }, 1500);
    })
}

const p = execute()

console.log(p)

setTimeout(() => {
    console.log(p)
}, 3000);