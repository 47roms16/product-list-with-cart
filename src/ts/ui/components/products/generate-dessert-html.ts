import { Dessert } from "../../types/dessert-structure";

import generateImgElements from "./generated-subcomponents/img-html";
import generateAddToCartBtn from "./generated-subcomponents/add-to-cart-btn-html";
import generateItemDetails from "./generated-subcomponents/details-html";

export default function generateMenuItem(item: Dessert): HTMLLIElement {
  // create <li> - outer element
  const liItem: HTMLLIElement = document.createElement("li");
  liItem.className = "menu-item";

  liItem.appendChild(
    generateImgElements(item.image, item.name, item.productId)
  );
  liItem.appendChild(generateAddToCartBtn(item.productId));
  liItem.appendChild(generateItemDetails(item.category, item.name, item.price));

  return liItem;
}
