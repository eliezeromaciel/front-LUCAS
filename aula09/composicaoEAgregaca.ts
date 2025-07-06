

class Motor {
    private numero: number
    private cilindradas: number;
  
    constructor (numeroConst: number, cilindradasConst: number) {
        this.numero = numeroConst
        this.cilindradas = cilindradasConst
  }

  mostrarDados (): number [] {
    return [this.numero, this.cilindradas]
  }
}

class Carro {
    nome: string
    motor: Motor;

    constructor(nomeConst: string, numeroMotor: number, cilindradasMotor: number) {
        this.nome = nomeConst
        this.motor = new Motor(numeroMotor, cilindradasMotor); // composição: o Carro cria o Motor
    }

    visualizarCarro (): void {
        // console.log(`Carro ${this.nome} tem o motor numero ${this.motor.numero} com  ${this.motor.cilindradas} cilindradas.`)
        console.log(`Carro ${this.nome} tem o motor numero ${this.motor.mostrarDados()} com  ${this.motor.mostrarDados()} cilindradas.`)
    }
}



const carroA = new Carro ('Uno', 397, 125)
carroA.visualizarCarro()
//  FALTA TIPAR ENCAPSULAMENTOS 