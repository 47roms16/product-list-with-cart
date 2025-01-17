import updatedDessertsObj from "../../../helpers/merge-quantity-property";
import generateModalWrap from "./modal-html";

export default async function showModalSuccess(): Promise<void> {
  const productsInCart = await updatedDessertsObj();

  if (!productsInCart) return;

  const bodyElem = document.body;

  productsInCart;

  const modalWrap = generateModalWrap();
  bodyElem.appendChild(modalWrap);
}
