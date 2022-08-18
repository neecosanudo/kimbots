import CalculadoraDto from './index.dto';

export default class Calculadora implements CalculadoraDto {
  /**
   * Divide dos números entre si y devuelve el resultado.
   * Si el denominador es cero, devuelve cero.
   *
   * @param numerador - Cualquier número.
   * @param denominador - Cualquier número.
   * @returns Resultado de dividir numerador por denominador.
   */
  dividir(numerador: number, denominador: number): number {
    /** Comprueba que el denominador no sea cero */
    if (denominador === 0) {
      return 0;
    }

    const resultado = numerador / denominador;
    return resultado;
  }
}
