//classe de pilha
export class Pilha<T> {
    private elementos: T[] = [];
    push(item: T): void { //adicionar um item na pilha
        this.elementos.push(item);
    }
    pop(): T | undefined { //remover um item
        return this.elementos.pop();
    }
    peek(): T | undefined {//buscar o elemento sem deletar
        return this.elementos[this.elementos.length - 1];
    }
    isEmpty(): boolean { //testa se a pilha é vazia
        return this.elementos.length === 0;
    }
    size(): number { //retorna a quantidade de elementos da pilha
        return this.elementos.length;
    }
    clear(): void { //limpa a pilha
        this.elementos = [];
    }
}

// Exemplo de uso
const minhaPilha = new Pilha<number>();
minhaPilha.push(1);
minhaPilha.push(2);
minhaPilha.push(3);
console.log(minhaPilha.pop()); // Saída: 3
console.log(minhaPilha.peek()); // Saída: 2
console.log(minhaPilha.size()); // Saída: 2
console.log(minhaPilha.isEmpty()); // Saída: false
minhaPilha.clear();
console.log(minhaPilha.isEmpty()); // Saída: true

const pilhaEli = new Pilha<string>();
pilhaEli.push('prato1');
pilhaEli.push('prato2');
pilhaEli.push('prato3');
console.log(pilhaEli.pop()); // Saída: prato3
console.log(pilhaEli.peek()); // Saída: prato2
console.log(pilhaEli.size()); // Saída: 2
console.log(pilhaEli.isEmpty()); // Saída: false
pilhaEli.clear();
console.log(pilhaEli.isEmpty()); // Saída: true