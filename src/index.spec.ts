import Calculadora from './index';
import CalculadoraDto from './index.dto';

describe('Clase Calculadora', () => {
  const calculadora: CalculadoraDto = new Calculadora();

  describe('Método dividir', () => {
    test('Debe devolver un número', () => {
      const respuesta = calculadora.dividir(10, 2);
      expect(respuesta).toBe(5);
    });
    test('El denominador no puede ser cero', () => {
      const respuesta = calculadora.dividir(10, 0);
      expect(respuesta).toBe(0);
    });
  });
});
