import { test, expect } from '@playwright/test';

// Funções a serem testadas
function geradorDeTagsDeIdentificacao(nome) {
  return nome.toUpperCase();
}

function verificarSePodeSerAdotado(idade, porte) {
  return idade >= 1 && ['P', 'M', 'G'].includes(porte);
}

function calcularConsumoDeRacao(nome, idade, peso) {
  return peso * 300; // Exemplo: 300g por kg
}

function decidirTipoDeAtividadePorPorte(porte) {
  if (porte === 'pequeno') return 'brincar dentro de casa';
  if (porte === 'médio') return 'passeios moderados';
  return 'exercícios ao ar livre';
}

async function buscarDadoAsync() {
  return Promise.resolve('Pipoca');
}

// Testes
test.describe('Testes da disciplina - fundamentos JS', () => {
  test('nome do pet em maiúsculas', () => {
    expect(geradorDeTagsDeIdentificacao('Pantera')).toBe('PANTERA');
  });

  test('adoção permitida para idade 1 e porte M', () => {
    expect(verificarSePodeSerAdotado(1, 'M')).toBe(true);
  });

  test('consumo de ração para peso 14.5', () => {
    expect(calcularConsumoDeRacao('Pitoco', 1, 14.5)).toBe(4350);
  });

  test('atividade adequada para porte pequeno', () => {
    expect(decidirTipoDeAtividadePorPorte('pequeno')).toBe('brincar dentro de casa');
  });

  test('retorno assíncrono esperado', async () => {
    const resultado = await buscarDadoAsync();
    expect(resultado).toBe('Pipoca');
  });
});