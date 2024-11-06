import {
  describe, expect, it,
} from '@jest/globals';
import Evento from '../../models/evento.js';

describe('Testando o modelo Evento', () => {
  const objetoEvento = {
    nome: 'Evento Teste',
    descricao: 'Descrição do novo teste',
    data: '2024-12-11',
    autor_id: 1,
  };

  it('Deve instanciar um novo autor', () => {
    const evento = new Evento(objetoEvento);

    expect(evento).toEqual(expect.objectContaining(objetoEvento));
  });
});
