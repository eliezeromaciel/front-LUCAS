import {Bicicleta, Frota} from './exPlus3.js'

// FUNCAO PARA CRIAR FROTAS E CONTAR TOTAL DE FROTAS // 

const bike1 = new Bicicleta ('Caloi', 'dez', 28, 'azul', true)
const bike2 = new Bicicleta ('Specialized', 'run', 28, 'cinza', true)
const bike3 = new Bicicleta ('Orbit', 'great', 26, 'branca', true)
const bike4 = new Bicicleta ('Specialized', 'Storm', 28, 'cinza', true)



let contadorDeFrotas = 0

const criarNovaFrota = (nomeDaBike: Bicicleta) => {
    contadorDeFrotas ++
    console.log(`Existem ${contadorDeFrotas} frotas criadas.`)
    return new Frota ([nomeDaBike])
}

const frotaY = criarNovaFrota(bike4)
