import { test, expect } from '@playwright/test';
import {
  geradorDeTagsDeIdentificacao,
  verificarSePodeSerAdotado,
  calcularConsumoDeRacao,
  decidirTipoDeAtividadePorPorte,
  buscarDadoAsync
} from './trabalho.js';

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