import calculate from "./calculate.js"
import { copyBtnReset } from "./copyToClipboard.js"

const input = document.getElementById('input')

export function handleButtonPress (e) {
    const value = e.currentTarget.dataset.value
    input.value += value
}

export function handleClearButton () {
    input.value = ''
    input.focus()
}

export function handleTyping (e) {
    e.preventDefault()
    // Teclas permitidas
    const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

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
}