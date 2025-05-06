// EXERCÍCIOS WHILE
let i = 0
while (i<10) {
  // faz algo aqui
  i ++
}


// EXERCÍCIOS FOR
// objetivo: imprimir o maior número do array
let arrayDeNumeros = [11, 15, 18, 14, 12, 13]
let maior = 0
let menor = 500;

for ( i = 0 ; i < arrayDeNumeros.length ; i ++){
  // let proximo = arrayDeNumeros[i + 1]      // PROFESSOR : eu estava inserindo i++ , o que fazia pular um índice, ...
  if (arrayDeNumeros[i] > maior)  {
    maior = arrayDeNumeros[i]
  }  
}

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
let arrayDeNumerosNovo = [11, 15, 18, 14, 12, 13]














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
// })();