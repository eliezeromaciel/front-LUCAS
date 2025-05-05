// exerc 1 ////////////////////////////////////////////////////////////////////////////////////////
// usa um laço for para acrescentar 1 a variável chamada valor, durante 5x, até item i atingir número 4. 
// testei o código e vi que errei a resposta. perguntar p professor a diferença.

let valor = 0
for ( let i= 0; i < 5; i++) {
//   valor += i
  valor = valor + 1
  console.log(valor)
}
console.log(valor)



// exerc 2 ///////////////////////////////////////////////////////////////////////////////////////////
//a) será impresso todos números maiores do que 18, existentes no array.

//b) preciso usar .entries(), que 'transforma o array em um array de objetos, com índice e valor de cada elemento)
const usaEntries = () => {
  let arrayPalavras =  ['Oi', 'sumido', 'tudo', 'bem?', 'Saudades']
  let iteradorEntries = arrayPalavras.entries()
  console.log(iteradorEntries.next())  
  for (let item of arrayPalavras.entries()) {
    console.log(item)
  }
}
usaEntries()



// exerc 3 /////////////////////////////////////////////////////////////////////////////////////////////
// será impresso dois asteriscos. copiei código e vi que errei. 
console.log('exercicio 3')
const quantidadeTotal = 4
let quantidadeAtual = 0
while (quantidadeAtual < quantidadeTotal) {
  let linha = ''
  for (let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos ++){
    linha += '*'        // POR QUE AQUI NAO OCORREU O MESMO ERRO DO EXERCICIO 1????
  }
  console.log(linha)
  quantidadeAtual++
}

// exerc 1 quantidade bichinhos /////////////////////////////////////////////////////////////////////////////
// const pets= Number(prompt('“Quantidade pets?”')) // NAO FUNCIONA PROMPT. COMO FAÇO?
const pets = 3
pets == 0? console.log('poxa, vamos adotar um pet, né') :
  console.log('vamos digitar o nome deles')



// exerc 2 operações com array /////////////////////////////////////////////////////////////////////////////
const arrayOriginal = [45, 23, 639, 76, 5, 44, 87 , 2, 10, 204, 8999, ]

// a) 
const imprimeTodosValores = () => {
  for (let item = 0; item < arrayOriginal.length; item ++ ){
    console.log(arrayOriginal[item])
  }
}
imprimeTodosValores()

// b)
const imprimeTodosValoresDivididosPor10 = () => {
  for (let item = 0; item < arrayOriginal.length; item ++ ){
    console.log(arrayOriginal[item]/10)
  }
}
imprimeTodosValoresDivididosPor10()

// c)
const imprimeSomentePares = () => {
  let arrayPares = []
  for (let item = 0; item < arrayOriginal.length; item ++ ) {
    console.log(arrayOriginal[item])
    if (arrayOriginal[item]%2 == 0) {
      arrayPares.push(arrayOriginal[item])
    } 
  }
  console.log(arrayPares)
}
imprimeSomentePares()

// d) nao entendi

// e) 
// usando for
const imprimeMaioreMenor = () => {
  let menor = arrayOriginal[0]
  let maior = 0
  for (let item = 0; item < arrayOriginal.length; item++) {
    if (arrayOriginal[item] > maior)  {
      maior = arrayOriginal[item] 
    }  else { if (arrayOriginal[item] < menor) {
      menor = arrayOriginal[item]
    }
    }
  }
  console.log(`VARIÁVEL MENOR = ${menor}`)
  console.log(`VARIÁVEL MAIOR = ${maior}`)
}
imprimeMaioreMenor()
// usando for of





// DESAFIO 1 //////////////////////////////////////////////////////////////////////////////////

// usei while, pois nao preciso necessariamente percorrer todo o array. 
const chutes = [ 56, 11, 27, 4, 9, 2, 13, 5]
const adivinheONumero = () => {
  let numeroSecreto = 4
  let i = 0
  while (chutes[i] != numeroSecreto){
    if (chutes[i] > numeroSecreto){
      console.log('Errrrrooou, é MENOR')
    } 
    if (chutes[i] < numeroSecreto){
      console.log('Errrrrrrou, é MAIOR')
    }
    i++
  }
  console.log(`Acertou!!!!!! E conseguiu na ${i+1}ª tentativa`)
}
adivinheONumero()
console.log('//////////////////////////////////////////')

// desafio 2 ////////////////////////////////////////////////////////////////////////////////////
let numeroSecreto = (Math.random()*100).toFixed()
const adivinheONumeroRandom = () => {
  let chute = 0
  let contador = 1
  while (chute != numeroSecreto){
    if (chute > numeroSecreto){
      console.log('Errrrrooou, é MENOR')
    } 
    if (chute < numeroSecreto){
      console.log('Errrrrrrou, é MAIOR')
    }
    chute = (Math.random()*100).toFixed()
    contador ++
  }
  console.log(`Acertou!!!!!! E conseguiu na ${contador} ª tentativa`)
}
adivinheONumeroRandom()
