

class Tarefa {                                  // cada tarefa é um NÓ
    constructor(
        public descricao: string,               // descricao da tarefa  data
        public proxima: Tarefa | null = null    // PONTE - PONTEIRO para próximo nó 
    ) { }
}

class ListaDeTarefas {                          // linkedList
    private inicio_PrimeiroNó: Tarefa | null = null;

    adicionarTarefa(descr: string): void {
        const nova = new Tarefa(descr);

        if (!this.inicio_PrimeiroNó) {
            this.inicio_PrimeiroNó = nova;
            return;
        }

        let atual = this.inicio_PrimeiroNó;
        while (atual.proxima) {
            atual = atual.proxima;
        }
        atual.proxima = nova;
    }

    listar(): void {
        let atual = this.inicio_PrimeiroNó;
        let i = 1;
        while (atual) {
            console.log(`${i++}. ${atual.descricao}`);
            atual = atual.proxima;
        }
    }

    // Busca uma tarefa específica
    buscar(descricao: string): Tarefa | null {
        let atual = this.inicio_PrimeiroNó;
        while (atual) {
            if (atual.descricao.toLowerCase() === descricao.toLowerCase()) {
                return atual;
            }
            atual = atual.proxima;
        }
        return null;
    }

    // Insere nova tarefa após uma tarefa específica
    inserirDepois(depoisDe: string, novaDescricao: string): void {
        let atual = this.inicio_PrimeiroNó;
        while (atual) {
            if (atual.descricao.toLowerCase() === depoisDe.toLowerCase()) {
                const nova = new Tarefa(novaDescricao, atual.proxima);
                atual.proxima = nova;
                console.log(`Tarefa "${novaDescricao}" inserida após "${depoisDe}".`);
                return;
            }
            atual = atual.proxima;
        }
        console.log(`Tarefa "${depoisDe}" não encontrada.`);
    }
}



const servicosPrestados = [
    "Trocar óleo do motor",
    "Revisar freios",
    "Alinhar direção",
    "Balancear rodas",
    "Verificar bateria",
    "Substituir filtro de ar",
    "Verificar sistema de arrefecimento",
    "Checar velas de ignição",
    "Verificar fluido de freio",
    "Trocar correia dentada",
    "Revisar suspensão",
    "Verificar luzes do painel",
    "Lubrificar dobradiças",
    "Inspecionar escapamento",
    "Substituir filtro de combustível",
    "Revisar sistema elétrico",
    "Verificar pressão dos pneus",
    "Verificar limpadores de para-brisa",
    "Inspecionar sistema de direção hidráulica",
    "Testar alternador"
];

const TarefasRanger = new ListaDeTarefas();

TarefasRanger.adicionarTarefa('troca óleo')
TarefasRanger.listar()

// servicosPrestados.forEach(desc => TarefasRanger.adicionarTarefa(desc));

// console.log("📋 Tarefas Iniciais:");
TarefasRanger.listar();