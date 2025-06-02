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
// Crie uma classe Inventario que possa armazenar diferentes tipos de itens do Minecraft (blocos, ferramentas, etc.).
// A classe deve ter métodos para adicionar, remover e  exibir os itens do inventário. Crie uma classe Jogador que tenha 
// um objeto do tipo Inventario como atributo.

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
    private nome:string;
    private idade:number;
    private inventario: Inventario;

    constructor(nomeConst:string, idadeCost:number){
        this.nome = nomeConst;
        this.idade = idadeCost;
        this.inventario = new Inventario(new Array<string>)
    }

    setItemInventario(item:string):void{
        this.inventario.adicionarItem(item);
    }
}

const jogador1 = new Jogador('Eli',31);
jogador1.setItemInventario('Costura');