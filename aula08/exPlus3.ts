// FROTA BICICLETAS

export class Bicicleta {
    private marca: string
    private modelo: string
    private aro: number
    private cor: string
    private disponivel: boolean

    constructor (marcaConst: string, modeloConst: string, aroConst: number, corConst: string, disponivelConst: boolean) {
        this.marca = marcaConst
        this.modelo = modeloConst
        this.aro = aroConst
        this.cor = corConst
        this.disponivel = disponivelConst
    }

    public mostrarModelo () : string {
        return this.modelo
    }

}

export class Frota {
    private name : string;
    private colecaoDeBicicletas: Bicicleta[] = []
    private static contador = 0

    constructor (nameConst:string) {
        this.name = nameConst
        Frota.contador++;

    }

    adicionarBicicleta (novaBicicleta: Bicicleta): void {
        this.colecaoDeBicicletas.push(novaBicicleta)
    }

    removerBicicleta (bicicleta: Bicicleta) {
        // gostaria que fosse percorrido o array, procurando a string modelo em cada item do array, até encontra-lo e dai deletar.
        // const modeloDaBicicleta = bicicleta.mostrarModelo ()
  
        for (let i=0; i < this.colecaoDeBicicletas.length; i++) {
            if (this.colecaoDeBicicletas[i] == bicicleta) {
                this.colecaoDeBicicletas.splice(i,1)
            } break
        }
    }

    mostrarColecaoBicicletas (): void { 
        console.log(this.colecaoDeBicicletas)
    }

    mostrarNumeroBicicletasDaFrota (): void {
        console.log(this.colecaoDeBicicletas.length)
    }

}


const bike1 = new Bicicleta ('Caloi', 'dez', 28, 'azul', true)
const bike2 = new Bicicleta ('Specialized', 'run', 28, 'cinza', true)
const bike3 = new Bicicleta ('Orbit', 'great', 26, 'branca', true)
const bike4 = new Bicicleta ('Specialized', 'Storm', 28, 'cinza', true)

const frotaA = new Frota('ZN')
frotaA.adicionarBicicleta(new Bicicleta('Caloi', 'dez', 28, 'azul', true))
frotaA.adicionarBicicleta(bike2)
frotaA.mostrarColecaoBicicletas()


frotaA.removerBicicleta(bike1)

frotaA.mostrarColecaoBicicletas()

// minha ideia era fazer o seguinte: escrever uma string (modelo da bike) e fazer percorrer toda a frota de bicicletas até achar o modelo correto e então deletar.
// mas nao estou conseguindo, então vou fazer algo mais simples e depois melhoro.


frotaA.mostrarNumeroBicicletasDaFrota()




