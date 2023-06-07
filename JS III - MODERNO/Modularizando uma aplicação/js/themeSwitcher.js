export default function () {
    const icon = document.querySelector('.material-icons-round')
    const root = document.querySelector(':root')
    const main = document.querySelector('main')

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
}