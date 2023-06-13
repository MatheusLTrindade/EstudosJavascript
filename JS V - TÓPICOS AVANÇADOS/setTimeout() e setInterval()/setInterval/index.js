console.log('Programa iniciado!')

let seconds = 11

const intervalId = setInterval(() => {
    seconds -= 1
    console.log(`Restam ${seconds} segundos.`)
    if (seconds <= 1) {
        clearInterval(intervalId)
        console.log('Tempo Esgotado! Encerrando...')
    }
}, 1000)