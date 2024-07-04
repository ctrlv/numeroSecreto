const menorValor = 1
const maiorValor = 100
const numeroSecreto = gerarNumeroAleatorio()

function gerarNumeroAleatorio(){
return parseInt(Math.random() * maiorValor + 1)
}

console.log('O numero secreto é :', numeroSecreto)

const elementoMenorValor = document.getElementById('menorValor')
elementoMenorValor.innerHTML = menorValor

const elementoMaiorValor = document.getElementById('maiorValor')
elementoMaiorValor.innerHTML = maiorValor