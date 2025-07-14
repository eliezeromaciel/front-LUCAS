class Fila<T> {
    private elementos: T[] = [];
 
    enfileirar(item: T): void {
        this.elementos.push(item);
    }
    desenfileirar(): T | undefined {
        if (this.estaVazia()) {
            console.log("A fila está vazia.");
            return undefined;
        } return this.elementos.shift();
    }
    primeiro(): T | undefined {
        if (this.estaVazia()) {
            console.log("A fila está vazia.");
            return undefined;
        }
        return this.elementos[0];
    }
    estaVazia(): boolean {
        return this.elementos.length === 0;
    }
    tamanho(): number {
        return this.elementos.length;
    }
}