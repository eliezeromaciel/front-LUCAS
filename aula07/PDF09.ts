class Animal {
    classe: string  // mamíferos, aves, peixes, anfíbios e répteis. 
    familia: string // hominidios, felidae
    especie: string // homo sapiens, felis silvestris
    alimentacao: string // herbívoros, carnívoros, onívoros
    sede: number
    cor: string

    constructor (classs: string, family: string, specie: string, food: string, thirst: number, color: string ) {
        this.classe = classs
        this.familia = family
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