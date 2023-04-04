import _ from "underscore";

/**
 *Estas funcion crea un nuevo deck
 * @param {Array<String>} tiposDecarta Ejemplo: ["C", "D", "H", "S"]
 * @param {Array<String>} tiposEspeciales Ejemplo: ["A", "J", "Q", "K"]
 * @returns {Array<String>} retorna un nuevo deck de cartas
 */
export const crearDeck = (tiposDecarta, tiposEspeciales) => {
  if (!tiposDecarta || tiposDecarta.length === 0)
    throw new Error("tiposDecarta es requerido y tiene que ser un string");

  if (!tiposEspeciales || tiposEspeciales.length === 0)
    throw new Error("tiposEspeciales es requerido y tiene que ser un string");
  let deck = [];
  for (let i = 2; i <= 10; i++) {
    for (let tipo of tiposDecarta) {
      deck.push(i + tipo);
    }
  }

  for (let tipo of tiposDecarta) {
    for (let esp of tiposEspeciales) {
      deck.push(esp + tipo);
    }
  }
  deck = _.shuffle(deck);
  return deck;
};
