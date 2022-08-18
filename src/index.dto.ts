/**
 *  Interface para métodos de una calculadora.
 *
 *  @privateRemarks Los métodos que contiene son:
 *  - dividir
 */
export default interface CalculadoraDto {
  dividir: (numerador: number, denominador: number) => number;
}
