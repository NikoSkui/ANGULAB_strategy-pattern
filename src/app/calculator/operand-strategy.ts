export abstract class OperandStrategy {


  /**
   * Détermine si l'opérateur est suppporter ou non
   * @param  {string} operand opérateur testé
   * @returns boolean
   */
  abstract support(operand: string): boolean;

  /**
   * Effectue l'opération voulu avec l'opérateur et retourne le résultat
   * @param  {number} leftValue première valeur
   * @param  {number} rightValue deuxième valeur
   * @returns number le résultat calculé
   */
  abstract compute(leftValue: number, rightValue: number): number;

}
