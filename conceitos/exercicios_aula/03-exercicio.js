/**
 * validar a idade mínima para adoção
 * crie um script que verifique se um 
 * dog pode ser adotado com base na idade 
 * minima definida, po exemplo, 2 anos.
 * use os operadores adequados e exiba:
 * -nome do dog
 * -idade
 * -se esta apto ou nao para adoção
 * 
 * extra: aplique uma regra de operador logico
 * para permitir que se o cao for de pequeno
 * porte, pode ser adotado independente da idade
 * 
 * exemplo:
 * minimo = 2
 * idade 1 + porte m = não
 * idade 2 + porte m = sim, pela idade
 * idade 2 + porte p = sim, pela idade
 * idade 1 + porte p = sim pelo porte
 */

const nome = 'Lisa'
const idade = '3'
const porte = 'p'

const idadeMinima = 3

const adocao = idade >= idadeMinima || porte === 'p'
                ? 'sim'
                : porte === 'p'
                ? 'sim'
                : 'nao'


console.log(adocao)


function verificarSePodeSerAdotado(idade, porte) {
    const adocao = idade >= idadeMinima
                ? 'sim'
                : porte === 'p'
                ? 'sim'
                : 'nao'
    console.log(adocao)            
}
verificarSePodeSerAdotado(1, 'm')
verificarSePodeSerAdotado(2, 'm')
verificarSePodeSerAdotado(2, 'p')
verificarSePodeSerAdotado(1, 'p')

