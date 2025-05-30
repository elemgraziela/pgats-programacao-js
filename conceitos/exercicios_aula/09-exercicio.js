/**
 * entregador de brinquedos para o pet
 * dado que voce tenha uma lista de brinquedos: bola, osso, corda, sino
 * crie um script que passe pela lista de brinquedos e entregue um por vez
 * exiba o nome de cada brinquedo que for entregue
 * use a estrutura de repetição forEach
 */


const listaDeBrinquedos = [
    'Bola',
    'Osso',
    'Corda',
    'sino'

]
listaDeBrinquedos.forEach(brinquedo => {
    console.log(brinquedo)
})

console.log(`Todos os brinquedos entregues`)