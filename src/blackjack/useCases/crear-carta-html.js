/**
 *
 * @param {String} carta
 * @returns {HTMLImageElement} imagen de la carta
 */
export const crearCartaHTML = (carta) => {

  if (!carta) throw new Error("carta is required");

  const imgCarta = document.createElement("img");
  imgCarta.src = `assets/cartas/${carta}.png`; //3H, JD
  imgCarta.classList.add("carta");
  return imgCarta;
};
