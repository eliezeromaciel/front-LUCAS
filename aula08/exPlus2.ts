// ESCALADA

export class Equipamento {

    private nome: string
    private tipo: string
    private status: string  // disponível , em uso , em manutenção

    constructor (nomeConst: string, tipoConst: string, statusConst: string ) {
        this.nome = nomeConst
        this.tipo = tipoConst
        this.status = statusConst
    }

    getNome (): string {
        return this.nome
    }
    getTipo (): string {
        return this.tipo
    }
    getstatus (): string {
        return this.status
    }

    setNome (name: string) { 
        this.nome = name
    }
    setTipo (type: string) {
        this.tipo = type
    }

    emprestarEquipamento (): string {   // acho que nao precisa de parametro
        return this.status = 'em uso'
    }

    devolverEquipamento (): string {
        return this.status = 'disponível'
    }

    consertarEquipamento (): string {
        return this.status = 'em manutenção'
    }
}

export class Via {
    protected nome: string
    protected graduacao: string
    protected localizacao: string

    constructor (nomeConst: string, graduacaoConst: string, localizacaoConst: string) {
        this.nome = nomeConst
        this.graduacao = graduacaoConst
        this.localizacao = localizacaoConst
    }

    descreverVia():string{
        return;
    }
}

export class ViaEsportiva extends Via {
    private qtdeProtecoes: number

    constructor (nome, graduacao, localizacao, qtdeprotecoesConst: number) {
        super(nome, graduacao, localizacao)
        this.qtdeProtecoes = qtdeprotecoesConst
    }

    exibirViaEsportiva (): void {
        console.log(`A via ${this.nome}, graduada em ${this.graduacao}, localizada em ${this.localizacao} possui ${this.qtdeProtecoes} proteções fixas.`)
    }
    descreverVia(): string {
        return `A via ${this.nome}, graduada em ${this.graduacao}, localizada em ${this.localizacao} possui ${this.qtdeProtecoes} proteções fixas.`
    }
}

export class ViaTradicional extends Via {
    private qtdeEquipamentosMoveis: number
    private qtdeEnfiadas: number // se a via tem mais enfiadas / esticões

    constructor (nome, graduacao, localizacao, qtdeEquipamentosMoveisConst: number, qtdeEnfiadasConst: number) {
        super(nome, graduacao, localizacao)
        this.qtdeEquipamentosMoveis = qtdeEquipamentosMoveisConst
        this.qtdeEnfiadas = qtdeEnfiadasConst
    }

    exibirViaTradicional (): void {
        console.log(`Na via ${this.nome}, que tem ${this.qtdeEnfiadas} enfiadas, graduada em ${this.graduacao}, localizada em ${this.localizacao} é sugerido o uso de  ${this.qtdeEquipamentosMoveis} móveis.`)

    }

    descreverVia(): string {
        return `Na via ${this.nome}, que tem ${this.qtdeEnfiadas} enfiadas, graduada em ${this.graduacao}, localizada em ${this.localizacao} é sugerido o uso de  ${this.qtdeEquipamentosMoveis} móveis.`
    }
}

export class Alpinista {
    private nome: string
    private nivelExperiencia: number    // nível 0 a 10
    private equipamentos: Equipamento[]

    constructor (nomeConst: string, nivelExperienciaConst: number, equipamentosConst ? : Equipamento[]) {
        this.nome = nomeConst
        this.nivelExperiencia = nivelExperienciaConst
        if (equipamentosConst) {
            this.equipamentos = equipamentosConst
        } else {
            this.equipamentos = []
        }
    }

    mostrarAlpinista () {
        console.log(`${this.nome}, nível ${this.nivelExperiencia} possui ${this.equipamentos} equipamentos.`)
    }
}

export class Guia {
    private nome: string
    private alpinistasTutelados: Alpinista []

    constructor (nomeConst: string, alpinistasTuteladosConst ? : Alpinista []) {
        this.nome = nomeConst
        this.alpinistasTutelados = alpinistasTuteladosConst
    }

    mostrarGuia (): void {
        console.log(`O guia ${this.nome} possui ${this.alpinistasTutelados}, todos alpinistas sob sua tutela.`)
    }
}


let equipamento1 = new Equipamento ('cadeirinha', 'pessoal', 'em uso' )
let equipamento2 = new Equipamento ('costura', 'mosquetão', 'em uso' )
let equipamento3 = new Equipamento ('capacete', 'proteção', 'em uso' )

let novoAlpinista1 = new Alpinista ('Bibiana', 1)
let novoAlpinista2 = new Alpinista ('Thais', 5, [equipamento1, equipamento3])

novoAlpinista1.mostrarAlpinista()
novoAlpinista2.mostrarAlpinista()

let guiaA = new Guia ('Lucas', [novoAlpinista1, novoAlpinista2])

//  Pense em um atributo protected para uma classe derivada GuiaChefe.
