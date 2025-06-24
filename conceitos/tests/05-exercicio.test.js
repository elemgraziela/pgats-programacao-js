/**
 * Classificador de porte automático
 * 
 * muitos tutores não sabem o porte do animal
 * crie um script que classifica o porte com base no peso de forma simples
 * até 10kg - pequeno
 * acima disso medio
 * use operador ternario para determinar o porte
 * exiba: nome, peso, porte 
 *
 *
 */

const nome = 'Lisa'
const peso = 5.0

const porte = peso <= 10 ? 'pequeno' : 'medio'
console.log (`-----`)
console.log(`nome: ${ nome }`)
console.log(`peso: ${peso}`)
console.log(`porte: ${porte}`)
console.log(`------`)

//alternativa com a função extra
function classificarPortePorPeso(nome, peso) {
    const porte = peso <= 10 ? 'pequeno' : 'medio'

    console.log (`-----`)
    console.log(`nome: ${ nome }`)
    console.log(`peso: ${peso}`)
    console.log(`porte: ${porte}`)
    console.log(`------`)

}

classificarPortePorPeso('Pantera', 14.5)
classificarPortePorPeso('Bilu', 10.0)
classificarPortePorPeso('Duque', 20.5)