import assert from 'assert';


/**it('QUANDO informar um nome para o Pet, DEVE ser impresso na tag com letras maiúsculas', () => {
    assert.strictEqual(geradorDeTagsDeIdentificacao('Pantera'), 'PANTERA');
  }); */


export function geradorDeTagsDeIdentificacao (nomeDoPet){
    return nomeDoPet.toUpperCase()
}

console.log(geradorDeTagsDeIdentificacao("Pantera"))


/** it('QUANDO a idade = 1 + porte M, DEVE ser permitida a adoção', () => {
    assert.strictEqual(verificarSePodeSerAdotado(1, 'M'), true)
  }) */


export function verificarSePodeSerAdotado(idade, porte) {
    const idadeMinima = 2;

    const adocao = idade >= idadeMinima || porte === 'M'
        ? 'sim, permitido adoção'
        : 'não, não é permitido adoção';

    return adocao;
}

const idade = 1;
const porte = 'P';
console.log(verificarSePodeSerAdotado(idade, porte));

/**it('QUANDO o peso = 14.5, DEVE ser retornado 4350 gramas para o consumo diário', () => {
    assert.strictEqual(calcularConsumoDeRacao('Pitoco', 1, 14.5), 4350)
  }); */

const nome = 'Pitoco'
const peso = 14.5
const consumo = 4350

const gramasPorDia = peso *30


export function calcularConsumoDeRacao(nome, peso, consumo) {
    const gramasPorDia = peso *30

console.log(`nome do pet: ${ nome }`)
console.log(`Peso: ${ peso }kg`)
console.log(`Gramas por dia: ${ gramasPorDia }g`)
}

calcularConsumoDeRacao('Pitoco',1, 4350)


/**it('QUANDO o porte = pequeno, DEVE ser retornada a atividade adequada', () => {
    assert.strictEqual(decidirTipoDeAtividadePorPorte('pequeno'), 'brincar dentro de casa')
  });*/

export function decidirTipoDeAtividadePorPorte(portePet) {
    let atividade = '';

    switch (portePet) {
        case 'pequeno':
            atividade = 'brincar dentro de casa';
            break;
        case 'medio':
            atividade = 'caminhada na rua';
            break;
        case 'grande':
            atividade = 'correr no parque';
            break;
        default:
            atividade = 'inválido';
    }

    return atividade;
}
const portePet = 'pequeno';
console.log(decidirTipoDeAtividadePorPorte(portePet)); 


/**it('QUANDO buscar dado de exemplo, DEVE retornar um valor de forma assíncrona', async () => {
    const resultado = await buscarDadoAsync();
    assert.strictEqual(resultado, 'Pipoca');
  });
 */

export async function buscarDadoAsync() {
  return 'Pipoca';
}

console.log(await buscarDadoAsync ('Pipoca'))


