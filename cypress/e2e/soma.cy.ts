import { soma } from '../../soma';

describe('Teste da função soma', () => {
  it('deve somar 2 + 3 e retornar 5', () => {
    expect(soma(2, 3)).to.equal(5);
  });

  it('deve somar 0 + 0 e retornar 0', () => {
    expect(soma(0, 0)).to.equal(0);
  });

  it('deve somar -1 + 1 e retornar 0', () => {
    expect(soma(-1, 1)).to.equal(0);
  });
});