console.log('Programa iniciado!')

const timeoutId = setTimeout(() => {
    console.log('3 segundos se passaram desde que o programa foi iniciado.')
}, 3000)

clearTimeout(timeoutId)

setTimeout(() => {
    console.log('5 segundos se passaram desde que o programa foi iniciado.')
}, 5000)