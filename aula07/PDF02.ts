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
    private nome: string; //atributo
    peso: number;
    constructor (name: string, weight: number) {
        if(weight<0){
            console.log('idade deve ser um número maior que 0')
            throw console.error();
        }
        else{
            this.nome = name;
            this.peso = weight
        }
    }

    miar (): void { //metodos
        console.log(`Miauuu`)
    }

    comer (qtde: number): void {
        console.log (`O gato ${this.nome} come ${qtde} gramas.` )
    }

    //admin permite alterar nome
    getNome():string{
        return this.nome;
    }


}

const meuGato = new Cat ('Osvaldinho', -5)
console.log(meuGato.getNome())
meuGato.miar()
meuGato.comer(300)