const result = document.querySelector('.result')
const myScore = document.querySelector('#myScore')
const machineScore = document.querySelector('#machineScore')


let myScoreNumber = 0
let machineScoreNumber = 0


const playUser = (humanChoice) => {
    playTheGame(humanChoice, playMachine())

}

const playMachine = () => {
    const choice = ['pedra', 'papel', 'tesoura']
    const randomNumber = Math.floor(Math.random() * 3)
    return choice[randomNumber]
}

const playTheGame = (human, machine) => {
    
    console.log('Humano:  ' + human + ' Maquina: ' + machine)

    if (human === machine) {
        
        result.innerHTML = 'Deu empate !'

    } else if (
        (human === 'papel' && machine === 'pedra') ||
        (human === 'pedra' && machine === 'tesoura') ||
        (human === 'tesoura' && machine === 'papel')
    ) {
        myScoreNumber ++
        myScore.innerHTML = myScoreNumber
        result.innerHTML = " 🏆Voçê Ganhou!"
        
    } else {
        machineScoreNumber ++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = "😭 Voçê perdeu para Alexa! "
    }

}