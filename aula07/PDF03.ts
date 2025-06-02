class Varinha {
    private madeira : string
    private nucleo: string
    private tamanho: string

    constructor (wood: string, core: string, size: string) {
        this.madeira = wood;
        this.nucleo = core;
        this.tamanho = size
    }
    public pegarVarinha () {
        return {
            madeira: this.madeira,
            nucleo: this.nucleo,
            tamanho: this.tamanho
        }
    }

    public setarVarinha (novaMadeira: string, novoNucleo: string, novoTamanho: string) {
        this.madeira = novaMadeira
        this.nucleo = novoNucleo
        this.tamanho = novoTamanho 
    }

    public exibirDetalhes () {
        console.log(`Varinha de madeira de ${this.madeira}, núcleo de ${this.nucleo} e tamanho ${this.tamanho}`)
    }
}

const minhaVarinha = new Varinha('Carvalho', 'Pena de Fênix', '32cm');
console.log(minhaVarinha.pegarVarinha());

// ---------------------------- //

class ChapeuSeletor {
    private casa: number
    private nomeProf:string

<<<<<<< HEAD
    constructor () {
        this.selecionar_SETAR_Casa();
        this.nomeProf='lucas';
=======
    constructor () {    // construtor pode já SETAR parametros, invocar funçoes da própria classe, etc.
        this.selecionar_SETAR_Casa()
>>>>>>> 30454c25e484644db254fed341cca9e687cbe82d
    }

    public pegarChapeuSeletor () {
        return this.casa
    }

<<<<<<< HEAD
    private selecionar_SETAR_Casa () {
=======
    private selecionar_SETAR_Casa () : void {
>>>>>>> 30454c25e484644db254fed341cca9e687cbe82d
        this.casa = Math.floor( Math.random()*4 + 1)
    }

    public exibirCasa () {
        console.log(`A Casa escolhida aleatoriamente é a de número ==> ${this.casa}`)
    }

}

const novoChapeuSeletor = new ChapeuSeletor()
<<<<<<< HEAD
//console.log(novoChapeuSeletor.selecionar_SETAR_Casa())
=======
>>>>>>> 30454c25e484644db254fed341cca9e687cbe82d
console.log(novoChapeuSeletor.exibirCasa())


// --------------------------------- // 


class Feitico {
    private nome: string
    private tipo: string
    private poder: number

    constructor (name: string, type: string, power: number) {
        this.nome = name
        this.tipo = type
        this.poder = power
    }

    public pegarFeitico () {
        return {
            nome: this.nome,
            tipo: this.tipo,
            poder: this.poder
        }
    }    

    public setarFeitico (novoNome : string, novoTipo: string, NovoPoder: number) {
        this.nome = novoNome
        this.tipo = novoTipo
        this.poder = NovoPoder
    }

    public LancarFeitico () {
        console.log(`O feitiço chamado ${this.nome} do tipo ${this.tipo} e com poder ${this.poder} foi lançado!`)
    }
}

const feitico1 = new Feitico('alohomora', 'utilidade', 3);
feitico1.setarFeitico('lumus', 'utilidade',3);



// NAO FIZ O DESAFIO 

