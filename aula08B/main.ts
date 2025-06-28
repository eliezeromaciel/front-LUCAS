import { Aluno, Avaliacao, Exercicio, Treino, Equipamento, Instrutor } from "./gerenciamentoAcademia";

const alunoA = new Aluno ('Claudenir', 'claudenir@gmail.com', 43, 78, 1.65)
const alunoB = new Aluno ('Morgana', 'claudenir@gmail.com', 43, 78, 1.65)
const alunoC = new Aluno ('Fernando', 'claudenir@gmail.com', 43, 78, 1.65)

const instrutorA = new Instrutor ('Alvaro', 'alvaro@gmail', 'CrossFit', '5493-RS')
const instrutorB = new Instrutor ('Jane Calamidade', 'jane@gmail', 'pilates', '5493-RS')
const instrutorC = new Instrutor ('PAtricia', 'patricia@gmail', 'jump', '5493-RS')

const exercA = new Exercicio ('biceps', 3, 15)
const exercB = new Exercicio ('gluteo', 4, 10)
const exercC = new Exercicio ('costas', 3, 8)
const exercD = new Exercicio ('peito', 3, 8)
const exercE = new Exercicio ('triceps', 3, 8)
const exercF = new Exercicio ('panturrilha', 3, 8)

const treinoA = new Treino (alunoA, instrutorA, [exercA, exercC])
const treinoB = new Treino (alunoB, instrutorB, [exercD, exercF, exercB])
const treinoC = new Treino (alunoC, instrutorA, [exercA, exercE])

const equipamentoA = new Equipamento ('supino', 'bla bla', true, [exercA, exercD])
const equipamentoB = new Equipamento ('puxador', 'bla bla', true, [exercA, exercC, exercD, exercE])
const equipamentoC = new Equipamento ('legpress', 'bla bla', true, [exercB, exercF])
const equipamentoD = new Equipamento ('abdutor', 'bla bla', true, [exercB, exercF])




const imcAlunoA = alunoA.calcularIMC()
console.log(imcAlunoA)

const avaliacaoA = new Avaliacao (alunoA, 22062025, 78, 1.7,)

console.log(avaliacaoA.gerarRelatorio())