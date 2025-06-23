/**
 * Gerador de tags de identificação
 * Crie um script para gerar a etiqueta (tag) de identificação que será presa na coleira de um cachorro
 * no abrigo. o dono irá informar nome, idade, peso, raça e se é adotado ou não.
 * a tag deve ter:
 * - o nome em letras maiusculas
 * - a raça com a primeira letra maiuscula
 * - peso
 */

const nome = "Lisa" , raca = "SRD"
let idade = 3, peso = 4.0, adotado = true

let nameUpperCase = nome.toLocaleUpperCase()
let racaFirsletter = raca.charAt(0).toUpperCase() + raca.slice(1).toLowerCase()

const animal = [{
    nome: nameUpperCase,
    peso: peso,
    raca: racaFirsletter
}]

console.log(animal)