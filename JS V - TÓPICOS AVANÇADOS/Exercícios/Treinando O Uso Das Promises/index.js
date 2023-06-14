function imc(weight, height) {
    return new Promise((resolve, reject) => {
        if (typeof weight !== 'number' || typeof height !== 'number') {
            reject('arguments must be of type number')
        } else {
            resolve(weight / (height ** 2))
        }
    })
}

function showImc(weight, height) {
    imc(weight, height).then((result => {
        console.log(`The IMC result was: ${result}.`)

        if (result < 18.5) console.log('Situation: THINNESS')
        else if (result < 25) console.log('Situation: NORMAL')
        else if (result < 30) console.log('Situation: OVERWEIGHT')
        else if (result < 40) console.log('Situation: OBESITY')
        else console.log('Situation: SERIOUS OBESITY')
    })).catch((err) => {
        console.log(err)
    })

    console.log(`Calculating IMC for weight ${weight} and height ${height}`)
}

showImc(77, 1.70)
showImc(48, 1.60)
showImc(77, "texto")
showImc(82, 1.72)
showImc(120, 1.80)