class Animal {
    //classe: string  // mamíferos, aves, peixes, anfíbios e répteis. 
   // familia: string // hominidios, felidae
especie: string // homo sapiens, felis silvestris
    alimentacao: string // herbívoros, carnívoros, onívoros
    sede: number
    cor: string

    //construtor definindo um animal com classe, família, espécia, fome, sede e cor.
    constructor (classs: string, family: string, specie: string, food: string, thirst: number, color: string ) {
        //this.classe = classs
        //this.familia = family
        this.especie = specie
        this.alimentacao = food
        this.sede = thirst
        this.cor = color
    }

    buscarRecurso () {

    }

    emitirSom () {

    }   

    mover () {

    }
    
    exibirCaracteristicas () {
        console.log(`Animal de classe ${this.classe}, família ${this.familia}, espécie ${this.especie}, alimentação ${this.alimentacao}, sede ${this.sede} e cor ${this.cor}.`)
    }
}
// EXEMPLO DO USO DO SUPER... como criei um novo parametro, chamado possuiPelos, preciso "dizer" que os outros parametros são de responsabilidade da classe pai.
class Mamiferos extends Animal {
    possuiPelos: boolean

    constructor (
        classe: string, 
        familia: string,
        especie: string,
        alimentacao: string,
        sede: number,
        cor: string,
        possuiPelos: boolean) {
        super (classe, familia, especie, alimentacao, sede, cor)
        this.possuiPelos = possuiPelos
    }
    amamentar () {
        console.log(`Sou um mamífero, portanto as fêmeas da minha espécie produzem leite e amamentam.`)
    }
}

class Aves extends Animal {
    voar () {
        console.log(`Nós aves possuimos penas e muitas espécies podem voar, huhu.`)
    }
}

const serHumano = new Mamiferos ('Mamífero','Canidae','Canis lupus familiaris','Carnívoro',6,'Marrom', true )

console.log(serHumano.exibirCaracteristicas())
console.log(serHumano.amamentar())


export class Veiculo {
    protected name : string;
    private placa: number;
    protected modelo : string;

    constructor(nameConst:string, placaConst:number, modeloConst:string){
        this.name = nameConst;
        this.placa = placaConst;
        this.modelo = modeloConst;
    }

    protected ligar():string{
        return 'motor ligado';
    };
    protected desligar():string{
        return 'motor desligado';
    };

}

export class carro extends Veiculo {
    constructor(nameCarro:string, placaCarro:number, modeloCarro:string){
        super(nameCarro, placaCarro, modeloCarro)
    }
    acelerar():void{
        console.log("O carro está: ", this.ligar());
    };
    desacelerar():void{
        console.log("O carro está: ", this.desligar());
    }
}

const veiculo1 = new Veiculo('chevete', 287347, 'tubarão');
//veiculo1.ligar();

const meuCarro = new carro('Pretão', 176343, 'Uno Mille' );
meuCarro.acelerar();
meuCarro.desacelerar();

function interagir(animal1:Animal, animal2:Animal){

}

const gato = new Mamiferos();
interagir(gato, cachorro);