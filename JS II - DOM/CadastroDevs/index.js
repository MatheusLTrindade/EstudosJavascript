function createLabel(text, htmlFor){
    const label = document.createElement('label')
    label.htmlFor = htmlFor
    label.innerText = text
    return label
}

function createInputs(id, value, name, type = 'text', placeholder = ''){
    const input = document.createElement('input')
    input.id = id
    input.value = value
    input.name = name
    input.type = type
    input.placeholder = placeholder
    return input
}

const addTechBtn = document.getElementById('addTechBtn')
const form = document.getElementById('devForm')
const developers = []
let inputRows = 0

addTechBtn.addEventListener('click', (e) => {

    const stackInputs = document.getElementById('stackInputs')

    //Cria linha
    const newRow = document.createElement('li')
    const rowIndex = inputRows
    inputRows++
    newRow.id = 'inputRow-' + rowIndex
    newRow.className = 'inputRow'

    //Cria Tecnologia
    const techNameLabel = createLabel('Nome: ', 'techName-' + rowIndex)
    const techNameInput = createInputs('techName-' + rowIndex, null, 'techName')

    //Cria Experiência
    const expLabel = createLabel('Experiência: ')
    const id1 = 'expRadio-' + rowIndex + '.1'
    const expRadio1 = createInputs(id1, '0-2 anos', 'techExp-' + rowIndex, 'radio')
    const expLabel1 = createLabel('0-2 anos', id1)
    const id2 = 'expRadio-' + rowIndex + '.2'
    const expRadio2 = createInputs(id2, '3-4 anos', 'techExp-' + rowIndex, 'radio')
    const expLabel2 = createLabel('3-4 anos', id2)
    const id3 = 'expRadio-' + rowIndex + '.3'
    const expRadio3 = createInputs(id3, '5+ anos', 'techExp-' + rowIndex, 'radio')
    const expLabel3 = createLabel('5+ anos', id3)

    //Remove linha
    const removeRowBtn = document.createElement('button')
    removeRowBtn.type = 'button'
    removeRowBtn.innerText = 'Remover'
    removeRowBtn.addEventListener('click', (e) => {
        stackInputs.removeChild(newRow)
    })

    //Add elementos a linha
    newRow.append(
        techNameLabel, techNameInput, expLabel, expRadio1, expLabel1, expRadio2, expLabel2, expRadio3, expLabel3, removeRowBtn
    )
    
    //Add linha a lista não ordenada
    stackInputs.appendChild(newRow)
})

// Add eventos ao formulario
form.addEventListener('submit', (e) => {
    e.preventDefault()

    const fullnameInput = document.getElementById('fullname')
    const inputRows = document.querySelectorAll('.inputRow')

    let technologies = []

    inputRows.forEach(row => {
        const techName = document.querySelector('#' + row.id + ' input[name="techName"]').value
        const techExp = document.querySelector('#' + row.id + ' input[type="radio"]:checked').value
        technologies.push({ name: techName, exp: techExp })
    })

    // Cadastra Dev
    const newDev = { fullname: fullnameInput.value, technologies: technologies }
    developers.push(newDev)
    alert('Dev cadastrado com sucesso!')

    // Limpa Inputs
    fullnameInput.value = ''
    inputRows.forEach(row => {
        row.remove()
    })

    console.log(developers)
})