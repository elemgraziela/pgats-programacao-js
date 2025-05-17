/**
 * Console API
 */

console.log("Aula inicial JS")

/**
 * Para exibir erros no console
 */
console.error ("Falha na execução")

/**
 * Para exibir alerta
 */
console.warn("Atenção")

/**
 * Para converter objeto em tabela
 */
console.table([{
    nome: 'Elem',
    turma: '02',
    disciplina: 'Prog JS'
},
{
    nome: 'Lucas',
    turma: '02',
    disciplina: 'Prog JS'
}])


/**
 * constantes e Variáveis
 */
//const - para informações que nunca mudam e devem ser declaradas o valor
//var ou let - para informações que podem mudar, não é obrigado colocar um valor inicial

//informacoes que não mudam de um dog
const nome = 'Loki'
const raca = 'SRD'
const sexo = 'Macho'
const cor = 'Caramelo'
const dataDeNascimento = '01/01/2020'
const porte = 'M'

//informacoes que mudam
let idade = 5
let peso = 10.5
let vacinado = true 
let castrado = false 
let tamanho = 'M'


/**
 * Tipos de dados
 * String - cadeia
 * number - inteiro/real
 * boolean - logico
 * array - vetor/matriz
 * bigInt = number - para números grandes
 * Symbol - identificador único
 */

/**
 * Tipos de Strings - tres formas de declarar
 * 'Turma 02 PGATS' - aspas simples ou single quote
 * "Turma 02 PGATS" - aspas dupla ou double quote
 * `Turma 02 PGATS` - template strings 
 */
//concatenação +
const turma = "02"
const numeroAula = "03"
let data = "05 de abril"

console.log("Concatenação: Aula 03 da turma " + turma + " no sábado dia 05 de abril")

//interpolação ${ turma } e tem que usar a crase
console.log(`Interpolação: Aula ${ numeroAula} da turma ${ turma } no sabado dia ${ data }`)

//length - contar o tamanho da string
console.log(turma.length)

//split - separar string
const nomesDeAluno = "Elem Graziela Costa Silva"
const nomesDeAlunosSplit = nomesDeAluno.split(" ")
console.log(nomesDeAlunosSplit)

//.toLowerCase - transforma toda string em minusculo
console.log(nomesDeAluno.toLowerCase())

//.toUpperCase - transforma toda string em maiuscula
console.log(nomesDeAluno.toLocaleUpperCase())

//includes () - verifica se foi declarado na variavel retornando true ou false
console.log(nomesDeAluno.includes("Elem")) //Elem foi declarado na na linha 84 retorna true
console.log(nomesDeAluno.includes("Ana")) //Ana não foi declarado na linha 84 retorna false

//replaceAll('a', 'i') - substituição de uma string por outra
console.log(nomesDeAluno.replaceAll('a', 'i'))

//.trim() - remove espaço antes ou no fim das string
const removerEspaco = "     muito espaco antes remover com trim"
console.log(removerEspaco.trim())

//.slice () - server para cortar
const cpf = "86748958987"
console.log(cpf.slice(0, 3))

//.substring() - igual slice, so tem comportamento diferente para caso negativo ou troca de posição
