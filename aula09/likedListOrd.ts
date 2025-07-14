
//classe referente ao nó da corrente
export class Node<T> {
    constructor(
        public data: T, //valor
        public next: Node<T> | null = null) { } //indicação para o próximo nó
}


//aqui é a lista linkada refenrecia o conjunto de nós, como se fosse uma corrente.
export class LinkedList<T> {
    private head: Node<T> | null = null; //lista de nós
    append(data: T): void {// método que adicona um valor como nó dentro da corrente
        const newNode = new Node(data);
        if (!this.head) { //se lista nula adiciono o primeiro valor
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) { //enquanto nao for a ultima posicao da lista ele vai passando as posicoes
            current = current.next;
        }
        current.next = newNode; // por fim adiciona o último nó na posição
    }
    print(element:Node<T>): void { //método de exibir a lista
        let current = this.head;
        if(current.data <= element.data){
            current = current.next;
        }
        if(current.data <= element.data){
            current = current.next;
        }
        while (current.data != element.data && current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

const myList = new LinkedList<number>();
myList.append(1);
myList.append(5);
myList.append(37);
myList.append(48);
myList.append(65);
const node1 = new Node(65);
myList.print(node1);