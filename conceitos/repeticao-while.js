/**
 * while - quando precisa repetir o codigo
 * enquanto (pet nao estiver cansado); faça {
 * dar uma volta na quadra
 * }
 */

let voltasAteFicarCansado = 5
let quantidadeVoltasAtual = 0

while (quantidadeVoltasAtual < voltasAteFicarCansado) {
    console.log(`Dar uma volta na quadra`)

    //para nao ficar no loop infinito tem que colocar condição para ele parar
    quantidadeVoltasAtual++
}