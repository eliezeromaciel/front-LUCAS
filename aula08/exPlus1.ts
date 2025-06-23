export class PolicialCivil {
    private nome: string
    private matricula: number
    private cargo: string
    private especialidade: string[]

    constructor (nomeConst: string, matriculaConst: number, cargoConst: string, especialidadeConst: string[]) {
        this.nome = nomeConst
        this.matricula = matriculaConst
        this.cargo = cargoConst
        this.especialidade = especialidadeConst
    }

    getProfessor () {
        // nao criei nenhum setter ou getter, pois exercício nao pedia hehe.
    }

    mostrarPolicialCivil () {
        console.log(`${this.nome}, matrícula ${this.matricula}, é ${this.cargo} de Polícia, especialista em ${this.especialidade}`)
    }
}

const policial1 = new PolicialCivil ('Lucas Alves', 3834455, 'Inspetor', ['Contabilidade', 'Matemática', 'defesa pessoal'])
const policial2 = new PolicialCivil ('Marcelo Maciel', 171171, 'Estagiário', ['TI', 'Ingês', 'direção ofensiva'])
const policial3 = new PolicialCivil ('Marcos Dias', 180180, 'Delegado', ['Direito'])

export class Veiculo {
    protected placa: number
    protected anoFabricacao: number
    protected cor: string

    constructor (placaConst : number, anoFabricacaoConst: number, corConst: string) {
        this.placa = placaConst
        this.anoFabricacao = anoFabricacaoConst
        this.cor = corConst

    }

    getPlaca () :number {
        return this.placa
    }
    getAnoFabricacao () :number {
        return this.anoFabricacao
    }
    getCor () :string {
        return this.cor
    }

}

export class Viatura extends Veiculo {  
    private caracterizada : boolean
    private placaDiscreta ? : number
    private acessorios: string []
    private equipe: PolicialCivil []

    constructor (
        caracterizadaConst: boolean, 
        placaDiscretaConst: number, 
        acessoriosConst: string[], 
        equipeConst :PolicialCivil[] ,
        
        protected placa: number,
        protected anoFabricacao: number,
        protected cor: string
    ) {
        super(placa, anoFabricacao, cor)
        this.caracterizada = caracterizadaConst
        this.placaDiscreta = placaDiscretaConst
        this.acessorios = acessoriosConst
        this.equipe = equipeConst
    }

    mostrarViatura () {
        // estou usando atributos do pai e também da filha. TOP !!
        console.log(`A viatura de placa oficial ${this.placa}, tem ${this.acessorios}, ${this.caracterizada ? "é preta e branca " : 'discreta'}, e os tripulantes são ${this.equipe} `)
    }
}

const viaturaA = new Viatura (false, 3333, ['giroflash'], [policial1, policial2, policial3], 6981, 2020, 'azul')
viaturaA.mostrarViatura()

export class CasoPolicial  {
    private tipo: string // inquérito ou Termo Circunstanciado
    private static contador = 0   // STATIC MOSTRA QUE PERTENCE A CLASSE , e nao aos atributos da instancia (dos objetos)
    private numeroCaso: number
    private tipoPenal: string
    private emAndamento: boolean // em andamento ou concluído
    private evidencia: Array<Evidencia>

    constructor (tipoConst: string, tipoPenalConst: string) {
        this.tipo = tipoConst
        CasoPolicial.contador++ // AQUI EU SOMO O CONTADOR , para só abaixo eu SOMAR.
        this.numeroCaso = CasoPolicial.contador // se eu somasse aqui o contador, ele somaria no objeto instanciado, e nao é isso que desejamos. 
        this.tipoPenal = tipoPenalConst
        this.emAndamento = true // já instancio o objeto como true, pois estou criando um novo caso, por óbvio ele está aberto. 
        // this.evidencia = evidenciaConst . tinha feito assim, e inserido como parametro do construtor evidenciaConst ?: Array<Evidencia>. depois, instancio como um array vazio.
        this.evidencia = [] 
    }

    modificarAndamento (novoAndamento: boolean) : void{
        this.emAndamento = novoAndamento
    }

    mostrarCasoPolicial () {
        console.log(`O ${this.tipo}, núm ${this.numeroCaso}, crime: ${this.tipoPenal} está ${this.emAndamento ? 'aberto' : 'concluído'}.`)
        console.log(`O ${this.tipo}, núm ${this.numeroCaso} ${this.evidencia? `possui evidências ${this.evidencia}` : 'não possui evidências.'}`)
    }

    adicionarEvidencia (novaEvidencia: Evidencia) : void{
        this.evidencia.push(novaEvidencia)
    }

    removerEvidencia (num: number): void {
        this.evidencia.splice(num, 1)
    }

}

const expediente1 = new CasoPolicial ('Inquérito',  'estelionato')
const expediente2 = new CasoPolicial ('Termo Circunstanciado', 'vias de fato')
const expediente3 = new CasoPolicial ('Inquérito', 'roubo')
expediente1.mostrarCasoPolicial()



export class Evidencia {
    private tipoEvidencia: string
    private localColeta: string
    private dataColeta: string

    constructor (tipoEvidenciaConst: string, localColetaConst: string, dataColetaConst: string) {
        this.tipoEvidencia = tipoEvidenciaConst
        this.localColeta = localColetaConst
        this.dataColeta = dataColetaConst
    }

    mostrarEvidencia (): void {
        console.log(`Evidência do tipo ${this.tipoEvidencia}, coletada em ${this.localColeta} na data de ${this.dataColeta}`)
    }
}

const evidenciaA = new Evidencia ('papiloscópica', 'Porto Alegre', '24/07/2025')
const evidenciaB= new Evidencia ('Corpo de Delito', 'Igrejinha', '03/06/2025')
evidenciaA.mostrarEvidencia()


const arrayDeEvidencias = [evidenciaA, evidenciaB]
console.log(arrayDeEvidencias)  // apenas para analisar como sao impressos os objetos. 

//GOSTARIA, NA VERDADE, DE CRIAR EVIDENCIA TAMBEM COM NUMERACAO ÚNICA E QUE ESSE ATRIBUTO FOSSE O ÚNICO ATRIBUTO A SER INSTANCIADO NO CASO POLICIAL. 


expediente1.adicionarEvidencia(evidenciaA) 
expediente1.adicionarEvidencia(evidenciaB) 
expediente1.mostrarCasoPolicial()
expediente1.removerEvidencia(1)
expediente1.mostrarCasoPolicial()



export class CentralOperacoes { // extends e usar os pais viaturas evidencias . 
    designarPoliciaisParaViaturas () {
        // criar aqui o que foi exigido
    }

    enviarViaturaParaColetaEvidencia () {

    }

}

















