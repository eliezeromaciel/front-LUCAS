class BlocoDeMadeira {
    tipo : string
    durabilidade: number
}

class Personagem {
    vida:number
    forca: number
    inventario: []
}

class EspadaDeDiamante {
    dano: number
    durabilidade: number
}

class Monstro {
    vida: number
    poderDeExplosao: number
    distanciaDeExplosao: number
}

class Mundo {
    blocoDeMadeira : Array<{}>
}

// ------------------// 


class Inventario {
    private itens: Array<string>

    constructor (itens: Array<string>) {
        this.itens = itens
    }

    public pegarItens () {
        return this.itens
    }

    public adicionarItem (novoItem : string) {
        this.itens.push(novoItem)
    }

    public deletarItem (item : string) {      // ao usar loop FOR, para parar de percorrer, USO BREAK. ou posso usar FINDINDEX
        for (let i = 0; i < this.itens.length; i++) {
            if (this.itens[i] == item) {
                this.itens.splice(i,1)
                break
            }
        }        
    }

    public mostrarItens () {
        console.log(this.itens)
    }
}

const inventarioJogadorLucas = new Inventario (['bloco', 'picareta', 'espada', 'carne assada'])
console.log(inventarioJogadorLucas.mostrarItens())
inventarioJogadorLucas.adicionarItem('anel de fogo')
console.log(inventarioJogadorLucas.mostrarItens())
inventarioJogadorLucas.deletarItem('picareta')
console.log(inventarioJogadorLucas.mostrarItens())


class Jogador {
    inventario: {}
}

const inventario1 = new Inventario (['bloco', 'picareta', 'espada', 'carne assada'])
console.log(inventario1.mostrarItens())
inventario1.adicionarItem('anel de fogo')
console.log(inventario1.mostrarItens())
inventario1.deletarItem('picareta')
console.log(inventario1.mostrarItens())


class Player {
    private nome: string
    private idade: number
    inventario: Inventario  

    constructor (name: string, age: number, itensDoInventario ?: Array<string>) {       // AGORA CONSEGUI. precisei inserir um parametro, pois o tipo Inventario exige um array. e deixei ele opcional com o caractere "?""
        this.nome = name
        this.idade = age
        // this.inventario = new Inventario(['sdf'])  // criar no construtor aqui para já criar pelo menos um inventário vazio. Porque até o momento não existe inventário algum.
        this.inventario = new Inventario(itensDoInventario)
    }

    public mostrarJogador () : void {
        console.log(`Jogador nome: ${this.nome}, idade ${this.idade} anos e inventário: ${this.inventario.pegarItens()}`)
    }

}
const inventario2 = ['sabre', 'pistola', 'bastão']

const jogadorLucas = new Player ('Lucas SkyWalker', 30,  inventario2)
jogadorLucas.mostrarJogador()