
// COMO ANY, ela pode assumir qualquer valor
let aux: any
aux = 'aux'
aux = true
console.log(aux)

// tipando arrays
let meuArray: string []
let seuArray : Array < string>

// tipando objetos
let aluno : {nome: string, idade: number}


// tipando funções
function soma (a: number, b: number) : number { return (a+ b)}

// caso um parametro seja opcional, basta usar "?"
// ex
function digaOi (nome?: string) : void{
    console.log(`Oi, tudo bem ${nome}` || `Oi Mundo`)   // jeito errado , pois nao cria a lógica ou. 
    console.log("Oi, tudo bem ", nome || `Sem nome`)
}
digaOi()
