const resultado = document.querySelector('#resultado')
const altura = document.querySelector('#altura')
const peso = document.querySelector('#peso')

const calcIMC = () => {

  if (altura.value !== '' && peso.value !== '') {
    const imc = (peso.value / (altura.value * altura.value)).toFixed(2)
    let classification = ''

    if (imc < 18.5) {
      classification = 'magricelo'
    } else if (imc < 25) {
      classification = 'tá normal'
    } else if (imc < 30) {
      classification = 'Acima do peso'
    } else if (imc < 35) {
      classification = ' saco de chumbo grau I'
    } else if (imc < 41) {
      classification = ' bola 8 grau II'
    } else {
      classification = ' majin boo obeso'
    }
    
    resultado.innerHTML = `IMC: ${imc} (${classification})`
  } else {
    resultado.innerHTML = 'EU SOU CALCULADORA!! NÃO ADIVINHA'
  }
}