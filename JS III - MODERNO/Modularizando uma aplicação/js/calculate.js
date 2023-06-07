export default function () {
    const resultInput = document.getElementById('result')
    resultInput.value = 'ERROR'
    resultInput.classList = 'error'

    const result = eval(input.value)
    
    resultInput.value = result
    resultInput.classList.remove('error')
}