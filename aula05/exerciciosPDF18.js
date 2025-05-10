// exercicios de FIXAÇÃO 

// 1
// a) será impresso o nome MATEUS NACHTERGAELE
// b) será impresso VIRGINIA CAVENDISH
// C) será impresso canal: 'globo' , horário: 14h


// 2
// a) será impresso nome: juca, idade 3, raca: srd
// b) será impresso nome: JUBA, idade 3, raça: srd
// c) será impresso nome : JUBO, idade 3, raça: src
// os tres pontinhos copiam o array/objeto completo (propriedades, chaves e valores, índices, etc)



// 3) 
// a) será impresso pessoa, especificamente o valor da chave beckener. ou seja, irá aparecer FALSE. mas deu erro, pois está faltando pontuacao ou algo do tipo. estou com dúvidas.
// b) idem
function minhaFuncao (objeto, propriedade) {
//   return objeto[`'${propriedade}'`]
//   console.log(objeto[`'${propriedade}'`])
//   return objeto[propriedade]
  objeto.altura
  return objeto['altura']
}
const pessoa= {
  nome: 'joao',
  idade: 23,
  beckender: false
}
console.log(minhaFuncao(pessoa, 'backender'))
console.log(minhaFuncao(pessoa, 'altura'))



console.log ('EXERCICIO DE ESCRITA DE CÓDIGO 1 ------------------------------------------------------------------------------------------------')
// a)
const pessoa1 = {
  nome: 'Gervásio Damasceno',
  apelidos: [ 'Mestre', 'Prof', 'Guru']
}
console.log(`Eu sou ${pessoa1.nome}, mas pode me chamar de ${pessoa1.apelidos[0]}, ${pessoa1.apelidos[1]} ou ${pessoa1.apelidos[2]}.`)

// b) 
const pessoa2 = {
//   ...pessoa1.apelidos = ['Teacher', 'Divindade', 'Grande Sol'] // essa forma está errada. 
  ...pessoa1,
  apelidos : ['Teacher', 'Divindade', 'Grande Sol']
}
console.log(pessoa2)

// c) era pra usar a funçao do exercicio anterior pra imprimir a variável pessoa2




console.log ('EXERCICIO DE ESCRITA DE CÓDIGO 2 ------------------------------------------------------------------------------------------------')
let usuario1 = {
  nome: 'Mateus',
  idade: 43,
  profissao: 'senior'
}
let usuario2 = {
  nome: 'Kelly',
  idade: 32,
  profissao: 'data science'
}
const retornaArray = (usuario) => {
  let array = [usuario.nome, usuario.nome.length , usuario.idade, usuario.profissao, usuario.profissao.length ]
  console.log(array)
}
retornaArray(usuario1)




console.log ('EXERCICIO DE ESCRITA DE CÓDIGO 3 ------------------------------------------------------------------------------------------------')
// a)
let carrinho = []

// b)
let fruta1 = {
  nome: 'maçã',
  disponibilidade: true
}
let fruta2 = {
  nome: 'mamão',
  disponibilidade: true
}
let fruta3 = {
  nome: 'banana',
  disponibilidade: true
}

// c)
let criaArrayDeFrutas = (fruta) =>{
  carrinho.push(fruta)
}

const compra = (fruta) => {
  criaArrayDeFrutas(fruta)
  console.log(carrinho)
}

// SIMULEI, ASSIM, TRES COMPRAS, AINDA QUE APARECA CONSOLE TRES VEZ, AO FINAL IRA APARECER O CARRINHO COMPLETO. 
compra(fruta1)
compra(fruta2)
compra(fruta3)





console.log ('DESAFIO 3 ------------------------------------------------------------------------------------------------')
const controleEstoqueFrutas = (fruta) => {
  fruta.valor = 'valor foi invertido'
  return `${fruta.disponibilidade} + ${fruta.valor}`
}
console.log(controleEstoqueFrutas(fruta3))







console.log ('DESAFIO 1 ------------------------------------------------------------------------------------------------')
import readline  from 'readline'

// QUIS FAZER DA FORMA ABAIXO, MAS AO PESQUISAR, DESCOBRI QUE O ERRO OCORRE PORQUE .QUESTION NÃO RETORNA UMA PROMISE, UM CALLBACK.

// let perguntaParaUsuario = async () => {
//   let leitor = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
//   })
//   let nome = ''
//   let idade = ''
//   let profissao = ''
//   await leitor.question( 'Qual seu nome?', function(answer) {
//     nome = answer
//   })
//   await leitor.question( 'Qual sua idade?', function(answer) {
//     idade = answer
//   })
//   await leitor.question( 'Qual sua profissão?', function(answer) {
//     profissao = answer
//     leitor.close()
//   })
// }
// perguntaParaUsuario()




// ENTAO, PESQUISEI E ENCONTREI FORMA DE CRIAR UMA PROMISSE PARA "GUARDAR" A RESPOSTA DO USUARIO, E DEPOIS CHAMO ELA , COLOCANDO UMA PROPRIEDADE E NELA INSIRO A PERGUNTA QUE DESEJO.
// let perguntaPUsuario = async () => {
//   let leitor = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
//   })

//   const pergunta = (texto) => {
//     return new Promise ( (resolve) => {
//       leitor.question(texto, (answer) => { resolve(answer)})   
//     })
//   }
//   let nomeDoUsuario = await pergunta('Qual seu nome?')
//   let idadeDoUsuario = await pergunta('Qual sua idade?')
//   let profissaoDoUsuario = await pergunta('Qual sua profissão?')
//   let objetoPessoa = {
//     nome: nomeDoUsuario,
//     idade: idadeDoUsuario,
//     profissao: profissaoDoUsuario
//   }
//   leitor.close()
//   console.log(objetoPessoa)
//   console.log(` A variável objetoPessoa é do tipo: ${typeof(objetoPessoa)}`)

// }
// perguntaPUsuario()




console.log ('DESAFIO 2 ------------------------------------------------------------------------------------------------')
// AQUI EU "ME LIGUEI" DA PEGADINHA. É ALGO BEM SIMPLES MESMO, SÓ CONSOLE.LOG, NAO PRECISA IF, NEM NADA. CLARO, CRIEI VARIÁVEIS E CHAMEI A FUNÇAO PRA TESTAR
const recebeFilmesECompara = (filme1, filme2) => {
  console.log(`O primeiro filme (${filme1.nome}) foi lançado no mesmo ano do segundo? ${filme1.anoLancamento == filme2.anoLancamento}`)
  console.log(`O primeiro filme (${filme1.nome}) foi lançado antes do segundo? ${filme1.anoLancamento < filme2.anoLancamento} `)
}

let filmeA = {
  nome: 'Matrix',
  anoLancamento: 1999
}
let filmeB = {
  nome: 'Oppenheimer',
  anoLancamento: 2024
}

recebeFilmesECompara(filmeA, filmeB)




// NAO FIZ DESAFIO 4, SEMANA FARROUPILHA