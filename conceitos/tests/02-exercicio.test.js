/**
 * Validador de nomes para as tags
 * 
 * Alguns donos estão registrando os dogs com nomes mal formatados.
 * Crie um script para limpar e padronizar os nomes.
 * Aplique as formatações e exiba:
 * - o nome original, como foi cadastrado
 * - o nome formatado
 * 
 * Extra: aplique uma regra que confira se o nome informado possui
 * apenas uma palavra. Exiba se o nome é valido ou não.
 * 
 * Salve no gitHub
 */

const nomeCat = "LIsA  "
let nomeFormatado = nomeCat.trim()
//nomeFormatado = removerCaracteresEspeciais(nomeFormatado)
nomeFormatado = tornarAPrimeiraLetraMaiuscula(nomeFormatado)

//const valido = nomeFormatado.split(" ").length ===1
const valido = verificarSeONomeEValido(nomeCat)

console.log(nomeCat)
console.log(nomeFormatado)
console.log(valido)

//function removerCaracteresEspeciais(nome){
  //  return nome.replace(/[^a-zA-ZÀ-y\s]/g, "");
//}

function removerEspaçosEntreAPalavra(nomeCat){
    return nomeCat.replace(/\s+/g, "")
}

function tornarAPrimeiraLetraMaiuscula(nomeCat){
    return nomeCat.charAt(0).toUpperCase() + nomeCat.slice(1).toLowerCase()
}

function verificarSeONomeEValido(nomeCat){
    return nomeFormatado.split(" ").length === 1
}