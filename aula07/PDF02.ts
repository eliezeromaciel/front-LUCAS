export class Gato {
    nome: string; 
    peso: number
    constructor () {
        // sempre haverá um constructor, se nao explicitado, ele será vazio.
    }

    miar (): void {
        console.log(`Miauuu`)
    }

    comer (qtde: number): void {
        console.log (`O gato ${this.nome} come ${qtde} gramas.` )
    }
}

// com construtor
export class Cat {
    nome: string;
    peso: number;
    constructor (name: string, weight: number) {
        this.nome = name;
        this.peso = weight
    }

    miar (): void {
        console.log(`Miauuu`)
    }

    comer (qtde: number): void {
        console.log (`O gato ${this.nome} come ${qtde} gramas.` )
    }
}

const meuGato = new Cat ('Osvaldinho', 5)
meuGato.miar()
meuGato.comer(300)