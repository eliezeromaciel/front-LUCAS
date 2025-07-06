// PILHA DE PRATOS

export class PilhaDePratos {
    private pilha: string [] 

    constructor (pilhaConst: string []) {
        this.pilha = pilhaConst
    }

    adicionarPrato (novoPrato: string): void {
        this.pilha.push(novoPrato)
    }

    retirarPrato (): string | undefined {
        return this.pilha.pop()        // aqui mesmo eu verificaria antes se eu o array está vazio? 
    }

    estaVazio () : boolean {
        return this.pilha.length === 0
    }
}