// troquei tempo por entradas, que é uma medida bastante usada p referenciar desempenho quando 'MANDA / ENCADENA' uma via. 
// encadenar ou mandar significa ir até o final da via sem cair ou usar equipamentos artificiais ( segurar no mosquetao, na corda, pisar na chapeleta, etc)

let viaKinderOvo = '7c'
let viaAmigoDoZelador = '5sup'
let viaProblemaDeUmaGeracao = '10b'
let viaJagube = '7a'
let viaChacrona = '7b'

const viasEncadenadas = [
    {
        nome: 'KinderOvo',
        entradas: 6
    }, 
    {
        nome: 'Jagube',
        entradas: 1
    }, 
    {
        nome: 'Chacrona',
        entradas: 3
    }, 
    {
        nome: 'ProblemaDeUmaGeracao',
        entradas: 565454
    }, 
]

let qtdeEntradas = [2, 6, 4, 7, 1, 3, 5]

let entradaLimite = 3


for (item of viasEncadenadas) {
    item.entradas < entradaLimite
    ? console.log(`TOP, mandou À VISTA a via ${item.nome}, apenas ${item.entradas}`)
    : item.entradas == entradaLimite
    ? console.log(`Muito bem, precisou de apenas ${item.entradas} para mandar a via ${item.nome}`)
    : console.log(`precisa melhorar, mandar a via ${item.nome} com ${item.entradas} entradas é FRANGO !`)
}


// para discutir com professor 
const  performanceEscalador =  () => {
    let viasEncadenadasFiltradas = viasEncadenadas.filter( (elem) => elem.entradas <= entradaLimite    )
    console.log(viasEncadenadasFiltradas)
}
// performanceEscalador()




