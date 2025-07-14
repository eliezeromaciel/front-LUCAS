import { NOTE } from "./tree"

interface Relacionavel {
    descreverRelacao(): string
}

class Pessoa implements Relacionavel {
    nome: string
    sobreNome: string
    dataNascimento: number
    genero: string
    outasRelacoes: Relacionavel[]

    constructor(nomeConst) {
        this.nome = nomeConst
    }
    descreverRelacao(): string {
        return `${this.nome} é uma pessoa da família ... !!!!??????????`
    }
}

class ArvoreGenealogica {
    raiz: NOTE<string>
    filho: NOTE<string>

    constructor(raizConst) {
        this.raiz = raizConst
    }

    criaRaiz(noteRaiz) {
        new NOTE(noteRaiz)
    }

    adicionarFilho(variavelCriada) {
        variavelCriada.addChild(no)
    }

    mostrarNO(): void {
        console.log(`Valor do nó é: ${JSON.stringify(this.raiz)}`)
        console.log(`filhos são: ${JSON.stringify(this.raiz.children)}`)
    }
}



const pessoa1 = new Pessoa('Angela')
const pessoa2 = new Pessoa('Carolina')
const pessoa4 = new Pessoa('Benício')


const arvore = new ArvoreGenealogica(pessoa1)

arvore.mostrarNO()

arvore.adicionarFilho(pessoa2)

new NOTE()