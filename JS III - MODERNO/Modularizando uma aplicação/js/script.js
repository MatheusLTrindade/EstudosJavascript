import calculate from "./calculate.js"
import copyToClipboard, { copyBtnReset } from "./copyToClipboard.js"
import { handleButtonPress, handleClearButton, handleTyping } from "./keyHandlers.js"
import themeSwitcher from "./themeSwitcher.js"

// Adiciona teclas virtuais ao input
document.querySelectorAll('.charKey').forEach(charKeyBtn => charKeyBtn.addEventListener('click', handleButtonPress))

// Limpa calculadora
document.getElementById('clear').addEventListener('click', handleClearButton)

// Verifica o que o usuário digitou no teclado
document.getElementById('input').addEventListener('keydown', handleTyping)

// Calcula
document.getElementById('equals').addEventListener('click', () => { calculate(); copyBtnReset() })

// Troca tema
document.getElementById('themeSwitcher').addEventListener('click', themeSwitcher)

// Função copiar
document.getElementById('copyToClipboard').addEventListener('click', copyToClipboard)