export default function (e) {
    const button = e.currentTarget
    const resultInput = document.getElementById('result')
    if (button.innerText === 'Copy') {
        button.innerText = 'Copied'
        button.className = 'success'
        navigator.clipboard.writeText(resultInput.value)
    }
}

//Restaura o estado do botão copy
export function copyBtnReset() {
    const copyBtn = document.getElementById('copyToClipboard')
    copyBtn.classList.remove('success')
    copyBtn.innerText = 'Copy'
    input.value = ''
}