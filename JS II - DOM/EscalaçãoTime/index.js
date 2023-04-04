function addPlayer(){
    const position = document.getElementById('position').value
    const name = document.getElementById('name').value
    const number = document.getElementById('number').value

    const confirmation = confirm(
        "Escalar " + 
        name + 
        " como " + 
        position + 
        "?"
    )

    if(confirmation){
        const teamSection = document.getElementById('teamSection')
        teamSection.style = 'visibility: "visible"'


        const ul = document.createElement('ul')
        ul.id = 'teamList'
        const playerItem = document.createElement('li')
        playerItem.id = 'player-' + number
        playerItem.innerText = position + ": " + name + " (" + number + ")"
        ul.appendChild(playerItem)
        teamSection.append(ul)

        document.getElementById('position').value = ''
        document.getElementById('name').value = ''
        document.getElementById('number').value = ''
    }
}

function removePlayer(){
    const number = document.getElementById('numberToRemove').value
    const playerToRemove = document.getElementById('player-' + number)

    const confirmation = confirm(
        "Remover o jogador " + playerToRemove.innerText + '?'
    )

    if(confirmation){
        playerToRemove.remove()
        document.getElementById('numberToRemove').value = ''
    }
}