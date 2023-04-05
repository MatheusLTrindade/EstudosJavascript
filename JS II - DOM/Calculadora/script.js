const main = document.querySelector('main')
const root = document.querySelector(':root')
const input = document.getElementById('input')
const resultInput = document.getElementById('result')
const copyBtn = document.getElementById('copyToClipboard')

// Teclas permitidas
const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

// Adiciona teclas virtuais ao input
document.querySelectorAll('.charKey').forEach(charKeyBtn => {
    charKeyBtn.addEventListener('click', () => {
        const value = charKeyBtn.dataset.value
        input.value += value
    })
})

document.getElementById('clear').addEventListener('click', () => {
    input.value = ''
    input.focus()
})

document.getElementById('equals').addEventListener('click', () => {
    calculate()
    copyBtnReset()
})

// Verifica o que o usuário digitou no teclado
input.addEventListener('keydown', e => {
    e.preventDefault()
    if (allowedKeys.includes(e.key)) {
        input.value += e.key
        return
    }
    if (e.key === 'Backspace') {
        input.value = input.value.slice(0, -1)
    }
    if (e.key === "Delete") {
        input.value = ''
    }
    if (e.key === 'Enter') {
        calculate()
        copyBtnReset()
    }
})

// Calcula
function calculate() {
    resultInput.value = 'ERROR'
    resultInput.classList = 'error'

    const result = eval(input.value)
    
    resultInput.value = result
    resultInput.classList.remove('error')
}

// Troca tema
document.getElementById('themeSwitcher').addEventListener('click', () => {
    const icon = document.querySelector('.material-icons-round')

    if (main.dataset.theme === 'dark') {
        icon.innerText = 'light_mode'
        root.style.setProperty('--bg-color', '#F1F5F9')
        root.style.setProperty('--border-color', '#AAA')
        root.style.setProperty('--font-color', '#212529')
        root.style.setProperty('--primary-color', '#26834A')
        main.dataset.theme = 'light'
    } else {
        icon.innerText = 'dark_mode'
        root.style.setProperty('--bg-color', '#212529')
        root.style.setProperty('--border-color', '#666')
        root.style.setProperty('--font-color', '#F1F5F9')
        root.style.setProperty('--primary-color', '#4DFF91')
        main.dataset.theme = 'dark'
    }
})

// Função copiar
copyBtn.addEventListener('click', e => {
    const button = e.currentTarget
    if (button.innerText === 'Copy') {
        button.innerText = 'Copied'
        button.className = 'success'
        navigator.clipboard.writeText(resultInput.value)
    }
})

//Restaura o estado do botão copy
function copyBtnReset() {
    copyBtn.classList.remove('success')
    copyBtn.innerText = 'Copy'
    input.value = ''
}