/**
 * contador de satisfação de passeio
 * 
 * crie um script que avise quando o dog já passeou o suficiente. Para saber,
 * vamos considerar que ele se sentira satisfeito somente a partir de 5 voltas na quadra.
 * 
 * use a estrutura de repetição while
 * 
 * exiba:
 * qual o numero de volta atual
 * quando o dog estiver satisfeito
 */

let voltasAteFicarCansado = 5
let volta = 1

while (volta <= voltasAteFicarCansado) {
    console.log(`Volta de nº ${volta} com a Lisa`)

    //para nao ficar no loop infinito tem que colocar condição para ele parar
    volta++
}

console.log('Acabou o passeio, Lisa!')