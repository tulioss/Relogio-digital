const tempoH = document.getElementById('horas')
const tempoM = document.getElementById('minutos')
const tempoS = document.getElementById('segundos')

horaAtual()

setInterval(horaAtual, 1000)

function horaAtual(){
    const agora = new Date();

    let hora = agora.getHours()
    let minuto = agora.getMinutes()
    let segundo = agora.getSeconds()

    tempoH.textContent = zero(hora)
    tempoM.textContent = zero(minuto)
    tempoS.textContent = zero(segundo)
}

function zero(tempo){
    return tempo < 10 ? '0' + tempo : tempo
}
