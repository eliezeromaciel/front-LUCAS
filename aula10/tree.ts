export class NOTE<T> {
    value: T;
    children: NOTE<T>[] = [];

    constructor(value: T) {
        this.value = value;
    }

    addChild(child: NOTE<T>): void {
        this.children.push(child);
    }

    mostrarNOTE(): void {
        console.log(`Valor do nó é: ${this.value}`)
        console.log(`filhos são: ${JSON.stringify(this.children)}`)
    }
}


// // criando a raiz
// const raiz = new NOTE('A')

// // criando os nós
// const b = new NOTE('B')
// const c = new NOTE('C')
// const d = new NOTE('D')
// const e = new NOTE('E')

// // criando os filhos

// raiz.addChild(b)

// raiz.mostrarNOTE()