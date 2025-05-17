/**
 * condicao (se verdadeiro)
 *  acao dentro do if
 * senao se (outra condicao)
 *  acao dentro do if
 * senao
 *  acao dentro do else
 */

if (10 > 5) {
    console.log('valor é maior')
} else {
    console.log('valor é menor')
}

const idade = 1
const porte = 'P'


if (idade >= 2) {
    console.log ('Pode ser adotado')
}else if (porte === 'P'){
    console.log('Pode ser adotado')
}else {
    console.log('Não pode ser adotado')
}