class Vehicle {
    move() {
        console.log('O veiculo está se movendo')
    }
}

class Car extends Vehicle {
    move() {
        console.log('O carro está se movendo')
    }
}

class Ship extends Vehicle {
    move() {
        console.log('O navio está navegando')
    }
}

class Aircraft extends Vehicle {
    move(speed) {
        console.log(`A aeronave está voando a ${speed} km/h`)
    }
}

const delorean = new Car()
const blackPearl = new Ship()
const epoch = new Aircraft()

delorean.move()
blackPearl.move()
epoch.move(80)

// Outra possibilidade
function start(vehicle) {
    console.log()
    console.log("Iniciando um veículo...")
    vehicle.move()
}

start(delorean)
start(blackPearl)