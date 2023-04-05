// Tema Claro
function useLightTheme() {
    document.body.style.color = '#212529'
    document.body.style.backgroundColor = '#F1F2F9'
}

document.getElementById('lightBtn').addEventListener('click', useLightTheme)

// Tema Escuro
function useDarkTheme() {
    document.body.style.color = '#F1F5F9'
    document.body.style.backgroundColor = '#212529'
}

document.getElementById('darkBtn').addEventListener('click', useDarkTheme)

// Alterna tema
function switchTheme() {
    document.body.classList.toggle('is-ligth')
    document.body.classList.toggle('is-dark')
}

document.getElementById('switchBtn').addEventListener('click', switchTheme)