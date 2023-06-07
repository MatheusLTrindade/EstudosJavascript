const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question("Digite sua data de nascimento(dd/mm/aaaa): ", (answer) => {
    birthday(answer)
    readline.close()
})

const dayjs = require("dayjs")
var customParseFormat = require("dayjs/plugin/customParseFormat")
var ptBr = require("dayjs/locale/pt-br")

function birthday(date) {
    dayjs.extend(customParseFormat)
    dayjs.locale(ptBr)
    const birthday = dayjs(date, "D/M/YYYY")
    const today = dayjs()

    const ageInYears = today.diff(birthday, "year")

    const nextBirthday = birthday.add(ageInYears + 1, "year")
    const daysToNextBirthday = nextBirthday.diff(today, "day")
    const hoursToNextBirthday = nextBirthday.diff(today, "hour")
    const minutesToNextBirthday = nextBirthday.diff(today, "minute")

    if(birthday.format("DD/MM") === today.format("DD/MM")) console.log("Feliz Aniversário!")
    console.log(`Idade: ${ageInYears}`)
    console.log(
        `Proximo aniversario é: ${nextBirthday.format("dddd, [dia] D [de] MMMM [de] YYYY")}`
    )
    console.log(
        `Completará ${ageInYears + 1} anos daqui: ${
            daysToNextBirthday >= 1
                ? `${daysToNextBirthday} ${
                    daysToNextBirthday === 1 ? "dia" : "dias"}`
                : `${hoursToNextBirthday} ${
                        hoursToNextBirthday === 1 ? "hora" : "horas"
                    } e ${minutesToNextBirthday % 60} ${
                        minutesToNextBirthday % 60 === 1 ? "minuto" : "minutos"}`
        }`
    )
}

