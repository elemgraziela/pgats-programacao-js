/**
 * calculadora de ração diária
 * crie um script que receba o peso do dog em kg + estoque
 * atual de ração em gramas. calcule a quantidade diaria de
 * racao com base na seguinte formula: gramas por dia = peso x 30
 * 
 * exiba:
 * -nome do dog
 * -peso
 * -quantidade de racao recomendada por dia
 * -quantos dias o estoque atual vai durar
 */

const nome = 'lisa'
const peso = 8
const estoque = 3000

const gramasPorDia = peso *30
const duracaoEstoque = estoque / gramasPorDia

console.log(`nome do pet: ${ nome }`)
console.log(`Peso: ${ peso }`)
console.log(`Gramas por dia: ${ gramasPorDia }`)
console.log(`Duracao do estoque: ${ duracaoEstoque }`)


//ALTERNATIVA COM FUNÇÃO
function calcularConsumoDeRacao(nome, peso, estoque) {
    const gramasPorDia = peso *30
    const duracaoEstoque = Math.floor(estoque / gramasPorDia)

console.log(`nome do pet: ${ nome }`)
console.log(`Peso: ${ peso }kg`)
console.log(`Gramas por dia: ${ gramasPorDia }g`)
console.log(`Duracao do estoque: ${ duracaoEstoque }dias`)
}

calcularConsumoDeRacao('lisa' ,8, 2000)