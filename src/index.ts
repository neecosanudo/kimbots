import CalculadoraDto from './index.dto';

export default class Calculadora implements CalculadoraDto {
  dividir(numerador: number, denominador: number): number {
    if (denominador === 0) {
      return 0;
    }
    const resultado = numerador / denominador;
    return resultado;
  }
}
