// O jogo segue estas regras:
// Pedra esmaga Tesoura. 
// Pedra esmaga Lagarto.
// Papel cobre Pedra. 
// Papel desqualifica Spock.
// Tesoura corta Papel. 
// Tesoura decapita Lagarto. 
// Lagarto envenena Spock. 
// Lagarto come Papel. 
// Spock vaporiza Pedra. 
// Spock quebra Tesoura.
// 
// Gere uma escolha aleatória para o computador: 
// const escolhaComputador = choices[Math.floor(Math.random() * 5)];
// Use um switch-case para comparar as escolhas e determinar o vencedor.
// Utilize operadores lógicos para definir as regras de vitória.

const choices = ['pedra', 'tesoura', 'papel', 'lagarto', 'spock',]

let escolhaUsuario = choices[Math.floor(Math.random() * 5)]
const escolhaComputador = choices[Math.floor(Math.random() * 5)]
// let escolhaUsuario = 'tesoura'
// const escolhaComputador = 'papel';

switch (escolhaComputador) {
case 'pedra': 
  if (escolhaUsuario == 'pedra'){
    console.log(`computador escolheu: ${escolhaComputador} e usuário escolheu:  ${escolhaUsuario}`)
    console.log('ambos escolheram pedra')
  } 
  if (escolhaUsuario == 'tesoura'){
    console.log(`computador escolheu: ${escolhaComputador} e usuário escolheu:  ${escolhaUsuario}`)
    console.log('pedra quebra tesoura')
  }
  if (escolhaUsuario == 'papel'){
    console.log(`computador escolheu: ${escolhaComputador} e usuário escolheu:  ${escolhaUsuario}`)
    console.log('Papel embrulha pedra')
  }
  if (escolhaUsuario == 'lagarto'){
    console.log(`computador escolheu: ${escolhaComputador} e usuário escolheu:  ${escolhaUsuario}`)
    console.log('Pedra esmaga lagarto')
  }
  if (escolhaUsuario == 'spock'){
    console.log(`computador escolheu: ${escolhaComputador} e usuário escolheu:  ${escolhaUsuario}`)
    console.log('Spock vaporiza pedra')
  }
  break
case 'tesoura': 
  console.log(escolhaUsuario)
  if (escolhaUsuario == 'pedra'){
    console.log(`computador escolheu: ${escolhaComputador} e usuário escolheu:  ${escolhaUsuario}`)
    console.log('Pedra quebra tesoura')
  }
  if (escolhaUsuario == 'tesoura'){
    console.log(`computador escolheu: ${escolhaComputador} e usuário escolheu:  ${escolhaUsuario}`)
    console.log('Ambos escolheram tesoura')
  }
  if (escolhaUsuario == 'papel'){
    console.log(`computador escolheu: ${escolhaComputador} e usuário escolheu:  ${escolhaUsuario}`)
    console.log('Tesoura corta papel')
  }
  if (escolhaUsuario == 'lagarto'){
    console.log(`computador escolheu: ${escolhaComputador} e usuário escolheu:  ${escolhaUsuario}`)
    console.log('Tesoura decapita lagarto')
  }
  if (escolhaUsuario == 'spock'){
    console.log(`computador escolheu: ${escolhaComputador} e usuário escolheu:  ${escolhaUsuario}`)
    console.log('Spock quebra tesoura')
  }
  break
case 'papel':
  console.log(escolhaUsuario)
  if (escolhaUsuario == 'pedra'){
    console.log(`computador escolheu: ${escolhaComputador} e usuário escolheu:  ${escolhaUsuario}`)
    console.log('Papel cobre pedra')
  }
  if (escolhaUsuario == 'tesoura'){
    console.log(`computador escolheu: ${escolhaComputador} e usuário escolheu:  ${escolhaUsuario}`)
    console.log('Tesoura corta papel')
  }
  if (escolhaUsuario == 'papel'){
    console.log(`computador escolheu: ${escolhaComputador} e usuário escolheu:  ${escolhaUsuario}`)
    console.log('Ambos escolheram papel')
  }
  if (escolhaUsuario == 'lagarto'){
    console.log(`computador escolheu: ${escolhaComputador} e usuário escolheu:  ${escolhaUsuario}`)
    console.log('Lagarto come papel')
  }
  if (escolhaUsuario == 'spock'){
    console.log(`computador escolheu: ${escolhaComputador} e usuário escolheu:  ${escolhaUsuario}`)
    console.log('Papel desqualifica Spock')
  }
  break

    // continuar.........
}
 

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
let numeroDoUsuario = 2

async function perguntaNumeroParaUsuario  () {
  // dá erro, pois .QUESTION nao retorna uma promise por padrão. vamos adaptar para poder usar o await diretamente.
  // let entradaUsuario = await rl.question('Digite um número: ');

  // criamos um RETURN NEW PROMISE, retornando question como uma promise... daí vai dar certo.

  // function perguntar(pergunta) {
  //     const rl = readline.createInterface({
  //       input: process.stdin,
  //       output: process.stdout,
  //     });
      
  //     return new Promise((resolve) => {
  //       rl.question(pergunta, (resposta) => {
  //         rl.close();
  //         resolve(resposta);
  //       });
  //     });
  //   }
  // async function main() {
  //     const numeroDoUsuario = await perguntar('Digite um número: ');
  //     console.log('Número digitado:', numeroDoUsuario);
  //   }
      
  //   main();
  let entradaUsuario = await rl.question('Digite um número: ')
  numeroDoUsuario = entradaUsuario
};


console.log(numeroDoUsuario)

