const input = document.getElementById('input')

// Muda Valor
document.getElementById('value').addEventListener('click', e => {
    input.value = input.value === '' ? 'Olá Mundo' : ''
})

// Muda o tipo
document.getElementById('type').addEventListener('click', e => {
    input.type = input.type === 'text' ? 'date' : 'text'
})

// Muda o placeholder
document.getElementById('placeholder').addEventListener('click', e => {
    input.placeholder = input.placeholder === '' ? 'Digite aqui' : ''
})

// Desabilita/Habilita
document.getElementById('disable').addEventListener('click', e => {
    input.disabled = input.disabled === false ? true : false
})

// Mostrar os dados
document.getElementById('data').addEventListener('click', e => {
    const data = input.dataset.something
    console.log('O valor do atributo data-something é: ' + data)
    input.dataset.something = input.dataset.something === 'Algum valor' ? 'Troquei o valor' : 'Algum valor'
})