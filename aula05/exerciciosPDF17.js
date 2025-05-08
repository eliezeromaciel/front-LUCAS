// ESTUDO DE OBJETOS ( pdf aula 17)

console.log ('EXERCICIO 1 ----------------------------------------------------------------------------------------------------------------')
let filme = {
  direcao: 'eberti rrichards',
  nome: 'Matrix',
  anoLancamento: '1991',
  elenco: [ 'Jamil', 'Aninha', 'Batavo', 'Chicão'],
  assistido: true
}
console.log(filme.direcao)
console.log(filme.nome)
console.log(filme.anoLancamento)
console.log(filme['elenco'])
console.log(filme['assistido'])




console.log(' EXERCICIO 2 - PESSOA ----------------------------------------------------------------------------------------------------------------')
let pessoa = {
  nome: 'Adalberto',
  idade: 50,
  generoMusical: 'arrocha'
}
console.log(`O nome da pessoa é ${pessoa.nome}, ela tem ${pessoa.idade} anos e gosta de ${pessoa.generoMusical}`)




console.log(' EXERCICIO 3 ----------------------------------------------------------------------------------------------------------------')
// A) adicionar ao objeto 1 lista com nome dos personagens
filme.personagens = ['Neo', 'Trinity', 'Morpheus', 'Mr. Smith']
for ( let i = 0; i < filme.elenco.length; i++){
  console.log(`O ator ${filme.elenco[i]} interpretou o personagem ${filme.personagens[i]}`)
}

// B) alterar por xuxa
filme.elenco[0] = 'Xuxa Meneguel'

// C)
console.log(` O filme possui todas essas propriedades ( chaves e valores) :
    ${JSON.stringify(filme)}`)

 


console.log(' EXERCICIO 4 - SPREAD ----------------------------------------------------------------------------------------------------------------')
const criaPessoa = () => {
  let novaPessoa = {...pessoa}
  novaPessoa.comidasPreferidas = [ 'chuchu', 'rabanete', 'proteína de soja', 'sardinha']
  novaPessoa.melhorAmigo = { 
    nome: 'Gilson', 
    idade: 49
  }
  console.log(`O nome da pessoa é ${novaPessoa.nome} e suas comidas preferidas são ${novaPessoa.comidasPreferidas}. Seu melhor amigo se chama ${novaPessoa.melhorAmigo.nome} e ele tem ${novaPessoa.melhorAmigo.idade} anos.`)
  return novaPessoa
}
criaPessoa()



console.log(' EXERCICIO 5 - CAVALEIROS ZODIACO ---------------------------------------------------------------------------------------------')
let personagensCavaleirosZoodiaco = [ 
  {
    nome: 'Shiryu ',
    sobrenome: 'de Dragão',
    armadura: 'bronze',
    poderes: ['Colera do Dragão', 'Último Dragão', 'Cólera dos Cem Dragões' ]
  },
  {
    nome: 'Seya',
    sobrenome: 'de Pegazus',
    armadura: 'bronze',
    poder: ['Turbilhão de  Pégaso', 'Meteoro de Pégaso', 'Cometa de Pégaso' ]
  },
  {
    nome: 'Hyoga',
    sobrenome: 'de Cisne',
    armadura: 'bronze',
    poder: ['Pó de Diamante', 'Trovão Aurora', 'Execução Aurora']
  },
  {
    nome: 'Shun',
    sobrenome: 'de Andrômeda',
    armadura: 'bronze',
    poder: ['Corrente de Andrômeda', 'Tempestade Nebulosa', 'Defesa Circular']
  }
]

// a)
const adicionaPersonagem = (name, lastname, armor, powers) => {
  let novoPersonagem = {
    nome: name,
    sobrenome: lastname,
    armadura: armor,
    poderes: powers
  }
  personagensCavaleirosZoodiaco.push(novoPersonagem) //  TEM OUTRA FORMA MELHOR DE ADICIONAR??? NAO PRECISANDO CRIAR UMA VARIÁVEL DENTRO DA FUNÇÃO? 
}
adicionaPersonagem('Ikki', 'de Fênix', ['Golpe Fantasma de Fênix', 'Ave Fênix'])

//b)
const buscaPersonagem = (name) => {
  for ( let i = 0; personagensCavaleirosZoodiaco[i].nome !== name; i++) {   // INSERI A CONDICAO DE IGUALDADE DOS NOMES, PARA NAO RPECISAR PERCORRER TODO O ARRAY, TÁ CERTO??????
    console.log('Personagem não encontrado na lista')
  }
  return   console.log('personagem encontrado')
}
buscaPersonagem('Hyoga')

// c)
const listaPersonagems = () => {
  return (console.log(JSON.stringify(personagensCavaleirosZoodiaco)))
}
listaPersonagems()


