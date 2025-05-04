// EXERCÍCIOS WHILE
let i = 0
while (i<10) {
  // faz algo aqui
  i ++
}

const exercicioWhile = () => {
  let i = 0
  let arrayUsuario = [10, 3, 50, 7, 0]
  let soma = 0
  while (arrayUsuario[i] !== 0) {
    console.log('insira outro número!') 
    soma = soma + arrayUsuario[i] 
    i++
  }
  console.log('mostrar a soma')
  console.log(soma)
}
exercicioWhile()



///////////////////////////////////////////////////////////////////
// EXERCÍCIOS FOR
// objetivo: imprimir o maior número do array
//resposta 1
let arrayDeNumeros = [11, 15, 18, 14, 12, 13]
let maior = 0
for ( i = 0 ; i < arrayDeNumeros.length ; i ++){
  // let proximo = arrayDeNumeros[i + 1]     // PROFESSOR : eu estava inserindo i++ , o que fazia pular um índice, ...
  if (arrayDeNumeros[i] > maior)  {
    maior = arrayDeNumeros[i]
  }  
}

// resposta 2
const imprimeMaior = ( array ) => {
  let maiorNumero = 0
  for ( i = 0 ; i < array.length ; i ++){
        
    if (array[i] > maiorNumero)  {
      maiorNumero = array[i]
    }  
  }
  console.log(maiorNumero)
}
imprimeMaior(arrayDeNumeros)


// objetivo: imprimir a soma dos números pares
const exercicioFor2 = () => {
  let array = [11, 15, 18, 14, 12, 13]
  let soma = 0
  for ( i = 0; i < array.length; i++ ) {
    let resto = array[i]% 2
    resto == 0 ? soma = soma + array[i] :
      console.log(`número ${array[i]} é ÍMPAR`) 
  }
  console.log(soma)
}
exercicioFor2()




////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// exercícios FOR..OF..
//objetivo imprimir frase completa
const exercicioForOf = () => {
  let arrayPalavras =  ['Oi', 'sumido', 'tudo', 'bem?', 'Saudades']
  let frase = ''
  for (let item of arrayPalavras) {
    frase = (`${frase} ${item}`) 
  }
  console.log(`${frase} !!`) 
}
exercicioForOf()

//objetivo imprimir soma dos números pares
const somaParesForOf = () => {
  let arrayForOff = [11, 15, 18, 14, 12, 13]
  let somaPares = 0
  for (let numero of arrayForOff) {
    let pares = numero % 2
    !pares ? somaPares = somaPares + numero : console.log(`${numero} é impar`)
  }
  console.log(somaPares)
}
somaParesForOf()

//objetivo armazenar as palavras mais longas em um novo array.
const exercicioPalavrasLongas = () => {
  let arrayPalavrasLongas = [ 'parangaricotirimicoaru', 'blasfêmia', 'veraneando', 'imprevisibilidade', 'aparentemente', 'inconstitucionalicimamente']
  let palavraParametro = 'barbaridade'
  let arrayPalavrasMaiores = []
  for (let item of arrayPalavrasLongas) {
    item.length > palavraParametro.length ? arrayPalavrasMaiores.push(item) : console.log(`A palavra ${item} é menor do que a palavra padrão`)
  }
  console.log(arrayPalavrasLongas)
}
exercicioPalavrasLongas()















// const readline = require('readline');
// function pergunta(pergunta) {
//         const rl = readline.createInterface({
//           input: process.stdin,
//           output: process.stdout,
//         });
      
//         return new Promise((resolve) => {
//           rl.question(pergunta, (resposta) => {
//             rl.close();
//             resolve(resposta);
//           });
//         });
//       }

// let numeroinicial = 4      
// const main = async () => {
//         const numeroDoUsuario = await pergunta('Digite vários números: ');
//         console.log('Número digitado:', numeroDoUsuario);
//         numeroinicial = numeroDoUsuario
//       }

// (async () => {
//   await main();
//   console.log(numeroinicial);
// })();: