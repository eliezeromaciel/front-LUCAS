// MATRIZ 2 x 3 

let matriz_2x3 = [ // duas linhas     três colunas
  [1,2,3],
  [4,5,6]
] 
console.log(matriz_2x3[0][2]) // imprime 3


// insere em uma matriz vazia
let matriz = []
matriz[0] = [10, 20, 30]
matriz[1] = [40, 50, 60]

console.log(matriz)
// quero imprimir o 50
console.log(matriz[1][1])




console.log('exercício 1 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////')
let jogoDaVelha = [
  [0,0,0],
  [0,0,0],
  [0,0,0],
]
jogoDaVelha[1][2] = 1
console.log(jogoDaVelha)

// COMO DESEJAVA IMPRIMIR LINHA POR LINHA, DEI UMA FUTRICADA NO CHATGPT
for(let i = 0; i < jogoDaVelha.length; i++){
  console.log(jogoDaVelha[i])
}

// cópia do exemplo do professor
for (let i = 0; i < matriz_2x3.length; i++) {
  for (let j = 0; j < matriz_2x3[i].length; j++) {
    console.log(matriz_2x3[i][j])
  }
}

// somar todos elementos:
console.log('exercicio SOMAR ///////////////////////////////////////////////////////////////////////////////////////////////////////')
let soma = 0
for (let i = 0; i < matriz_2x3.length; i++) {
  for (let j = 0; j < matriz_2x3[i].length; j++) {
    soma = soma + matriz_2x3[i][j]
  }
}
console.log(soma)





console.log('exercicio MULTIPLICAR ///////////////////////////////////////////////////////////////////////////////////////////////////////')
for (let i = 0; i < matriz_2x3.length; i++) {
  for (let j = 0; j < matriz_2x3[i].length; j++) {
    matriz_2x3[i][j] = matriz_2x3[i][j]*10
  }
}
console.log(matriz_2x3)





console.log('exercicio batalha naval ///////////////////////////////////////////////////////////////////////////////////////////////////////')
let batalhaNaval = [ 
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
]
const posicionaNavio = (linha, coluna) => {
  batalhaNaval[linha][coluna] = 1
}

posicionaNavio(0,0)
posicionaNavio(1,0)
posicionaNavio(2,0)
posicionaNavio(3,0)
posicionaNavio(5,2)
posicionaNavio(5,3)
posicionaNavio(5,4)
posicionaNavio(5,5)


for (let i =0; i < batalhaNaval.length; i++) {
  console.log(batalhaNaval[i].join())
}

const acertaNavio = (linha, coluna) => {
  if (batalhaNaval[linha][coluna] == 0){ 
    console.log('Errou, jogou na água')
    batalhaNaval[linha][coluna] = '-'        // NO INÍCIO TIVE DIFICULDADE, POIS ESTAVA ESCREVENDO DUAS VEZES O SINAL DE IGUAL
  }
  if (batalhaNaval[linha][coluna] == 1) {
    console.log('Acertou')
    batalhaNaval[linha][coluna] = 'X'
  }
  if (batalhaNaval[linha][coluna] == '-') {
    console.log('Vc já havia escolhido esta posição anteriormente')
  }  
}
acertaNavio(5,3)
// imprime batalha naval atualizado
for (let i =0; i < batalhaNaval.length; i++) {
  console.log(batalhaNaval[i].join())
}

const acertaTodosNavios = () => { 
  
}








