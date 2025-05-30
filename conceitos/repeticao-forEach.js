/**
 * listadeAlunos
 * Ana
 * Lisa
 * Elem
 * 
 * paraCada (item da) listaDeAlunos
 * // dar uma nota aleatoria
 */

const listaDeAlunos = [
    'Ana',
    'Lisa',
    'Elem'
]
listaDeAlunos.forEach(aluno => {
    console.log(aluno)
})

//outro exemplo
const listaDeAlunosENotas = [
    {
        nome: 'Ana',
        nota: 10
    },
    {
        nome: 'Lisa',
        nota: 8
    },
    {
        nome: 'Elem',
        nota: 5
    }
]

listaDeAlunosENotas.forEach(aluno => {
    console.log(`O aluno ${aluno.nome} tem a nota ${aluno.nota}`)
})