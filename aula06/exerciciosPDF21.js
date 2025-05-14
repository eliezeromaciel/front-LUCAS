'exercício 1 interpretação ///////////////////////////////////////////////////////////////////////////////////////'
// será impresso o número 16.

'exercício 2 interpretação ///////////////////////////////////////////////////////////////////////////////////////'
// serão impressos apenas os números pares, pois na divisão por dois, nao pode haver resto, precisando ser igual a zero. 

'exercício 2 interpretação ///////////////////////////////////////////////////////////////////////////////////////'
// soma terá o valor da soma de todos os valores existentes na matriz, pois a cada item ele soma o valor do item da matriz ao valor da variável soma e atualiza a variável com o resultado dessa soma.


'exercício 1 de fixação ///////////////////////////////////////////////////////////////////////////////////////////'
let mapaJogo = [
  [0,2,1,2,0],
  [0,2,1,2,0],
  [1,1,1,2,0],
  [2,2,2,2,0],
  [0,0,0,0,0],
]


console.log('exercício 2 de fixação ///////////////////////////////////////////////////////////////////////////////////////////')
let pontuacoes = [
  [3,1,9,5],
  [23,9,0,2],
  [6,13,1,7]
]

// TENTEI ME PUXAR E FAZER ALGO MAIS ELABORADO AQUI 
const imprimeTotalPontos = (jogador) => {
  let soma = 0
  for ( let i = 0; i < pontuacoes.length; i++) {     // POR QUE DESTA FORMA ABAIXO EU PRECISO QUE O LOOP CHEGUE NA IGUALDADE DE LENGTH, E NAO APENAS SER MENOR???       
    soma += pontuacoes[jogador[1]][i]
  }
  console.log(`Jogador ${jogador[0]} obteve ${soma} pontos`)
} 

let jogadorA = ['Benício', 0]
let jogadorB = ['Lucas', 1]
let jogadorC = ['Simon', 2]

imprimeTotalPontos (jogadorC)




console.log('exercício de fixação 3 ///////////////////////////////////////////////////////////////////////////////////////')
let matrix_4x4 = [ 
  [1,2,3,4],
  [5,6,7,8],
  [9,10,11,12],
  [13,14,15,16],
]
const inverteMatrix = () => {
  // fiz até um desenho pra poder pensar melhor. (tirei foto)
  let novaMatrix = [...matrix_4x4]
  for (let i=0 ; i < matrix_4x4.length; i++) {
    for ( let l = 0; l < matrix_4x4.length; l++){
      novaMatrix[i][l] = matrix_4x4.length - i - 1
    }
  }


  let length = matrix_4x4.length  - 1
  console.log(novaMatrix)
}
inverteMatrix()




console.log('JURASSIC PARK ///////////////////////////////////////////////////////////////////////////////////////')
let jurassicPark = [
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
]
// a)
const criaIlha = () => {
  for (let i = 0; i < 10; i++) {
    for(let l = 0; l< 10; l++) {
      jurassicPark[i][l] = Math.floor(Math.random()*5)
    }
    // console.log(jurassicPark[i].join())
  }
  console.log('---')
}
criaIlha()



// b) NAO ENTENDI A PERGUNTA SOBRE COMO OS DINOSSAUROS PODEM SE MOVER.



// c) imprimir quantidade de dinossauros herbívoros e carnívoros
let qtdeCarnivoros = 0
let qtdeHerbivoros = 0
for (let i = 0; i < jurassicPark.length; i++) {
  for(let l = 0; l< jurassicPark.length; l++) {
    if (jurassicPark[i][l] == 3) {
      qtdeCarnivoros = qtdeCarnivoros + 1
    }
    if (jurassicPark[i][l] == 4) {
      qtdeHerbivoros = qtdeHerbivoros + 1
    }
  }
}
console.log(`Total de dinossauros carnívoros é de : ${qtdeCarnivoros}`)
console.log(`Número total de herbívoros: ${qtdeHerbivoros}`)






















