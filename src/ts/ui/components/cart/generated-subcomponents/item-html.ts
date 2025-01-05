import { Dessert } from "../../../types/dessert-structure";

import generateDetails from "./item-details-html";
import generateRemoveBtn from "./btn-remove-html";

import "./item.css";

export function generateItem(cartProduct: Dessert): HTMLLIElement {
  const cartItem = document.createElement("li");
  cartItem.className = "cart-item";
  const cartItemDetails = generateDetails(cartProduct);
  const removeBtn = generateRemoveBtn();

  cartItem.appendChild(cartItemDetails);
  cartItem.appendChild(removeBtn);

  return cartItem;
}
