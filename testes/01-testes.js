/**
 * palavras chaves usadas
 * describe - agrupador de testes
 * it - implementação do teste
 */

describe('Testes do Projeto', () => {
    it('Primeiro teste', () => {
    })

    it('segundo teste', () => {

    })
})

//pode criar orientado a TDD
//crio o teste 
//vejo o teste falhar
//crio a implementação para o teste passar
//rodo o teste de novo 
//refatoro o codigo para melhorar

import { exibirNomePetFormatado } from "../conceitos/teste-de-unidade.js"
import assert from 'node:assert'   // vai importar o asser/ asserção que verifica se um coportamento esta de acordo com o esperado

describe('Imprimir nome do pet', () => {
    it('deve exibir o nome do pet com letras maiusculas', () => {
      assert.strictEqual (exibirNomePetFormatado('Lisa'), 'LISA')
      //acima o assert que verifica se valor atual é igual ao valor esperado
    })

    it('segundo teste', () => {
       // throw new Error()

    })
})
//aqui ele olha la no arquivo teste-de-unidade onde esta configurado a função importada aqui e 
// verifica se o que é enviado aqui é o mesmo recebido de la da função
//dai o teste passou pq recebe LISA maisculo e é igual ao esperado aqui