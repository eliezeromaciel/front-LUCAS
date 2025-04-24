let nivelExperiencia = 1.3

//vias existentes no setor Noel Rocks - Caxias do Sul
let viaKinderOvo = '7c'
let viaAmigoDoZelador = '5sup'
let viaProblemaDeUmaGeracao = '10b'

// fiz desta forma abaixo, antes de ler última instruçao ( se nível tiver qq outro número , exibir msg erro)
nivelExperiencia < 2 
? console.log(`Diante do seu atual nível, por favor escale a via de graduação ${viaAmigoDoZelador}`) 
: nivelExperiencia == 2 
? console.log(`Escale via  de graduação ${viaKinderOvo}`) 
: console.log(`Você está bem treinado, escale a via de graduação ${viaProblemaDeUmaGeracao}`)


if (nivelExperiencia == 1 ) {
    console.log(`conforme seu nível, escale a via de graduação  ${viaAmigoDoZelador}`)
} else 
if (nivelExperiencia == 2 ) {
    console.log(`Diante de sua aptidão atual, pode escalar a via de graduação ${viaKinderOvo}`)
} else 
if (nivelExperiencia == 3 ) {
    console.log(`Você está bem treinado, bora escalar um ${viaProblemaDeUmaGeracao}`)
} else {
    console.log(`Erro quanto ao nível de experiência`)
}