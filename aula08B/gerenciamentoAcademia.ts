export class Usuario {
    protected nome: string
    protected email: string

    constructor (nomeConst: string, emailConst: string) {
        this.nome = nomeConst
        this.email = emailConst
    }

    exibirInformacoes (): void {
        console.log(this.nome)
        console.log(this.email)
    }

    exibirNome (): string { // fiz esse para exibir nome do aluno no relatório da avaliacao
        return this.nome
    }
}

export class Instrutor extends Usuario {
    private especialidade: string
    private cref: string

    constructor (nome, email, especialidadeConst: string, crefConst: string) {
        super (nome, email)
        this.especialidade = especialidadeConst
        this.cref = crefConst
    }
}

export class Aluno extends Usuario {
    private idade: number
    private peso: number
    private altura: number

    constructor (nome, email, idadeConst: number, pesoConst: number, alturaConst: number) {
        super (nome, email)
        this.idade = idadeConst
        this.peso = pesoConst
        this.altura = alturaConst
    }

    calcularIMC (): number {
        return this.peso/(this.altura**2)
    }
}

export class Avaliacao {
    private aluno: Aluno
    private data: number
    private peso: number
    private altura: number
    private imc: number
    private observacoes: string

    constructor (alunoConst: Aluno, dataConst: number, pesoConst: number, alturaConst: number, observacoesConst ? : string) {
        this.aluno = alunoConst
        this.data = dataConst
        this.peso = pesoConst
        this.altura = alturaConst
        this.observacoes = observacoesConst
    }

    calcularIMC (): number {
        this.imc = this.peso/(this.altura**2)
        return this.imc
    }

    gerarRelatorio (): string {
        return `O aluno ${this.aluno.exibirNome()} foi avaliado em ${this.data}, blá blá blá.`
    }
}

export class Exercicio {
    private nome: string
    private series: number
    private repeticoes: number

    constructor (nomeConst: string, seriesConst: number, repeticoesConst: number) {
        this.nome = nomeConst
        this.series = seriesConst
        this.repeticoes = repeticoesConst
    }
}

export class Treino {
    private aluno: Aluno
    private instrutor: Instrutor
    private exercicios: Exercicio []

    constructor (alunoConst: Aluno, instrutorConst: Instrutor , exerciciosConst: Exercicio []) {
        this.aluno = alunoConst
        this.instrutor = instrutorConst
        this.exercicios = exerciciosConst
    }
}

export class Equipamento {
    private nome: string
    private descricao: string
    private disponibilidade: boolean
    private exercicio: Exercicio []

    constructor (nomeConst: string, descricaoConst: string, disponibilidadeConst: boolean, exercicioConst: Exercicio []) {

    }

    verificarDisponibilidade (): boolean {
        return this.disponibilidade
    }
}