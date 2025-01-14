import { cartProducts } from "../../cart/cart";
import { cartItem } from "../../cart/types/cart-item";
import generateSVGElem from "../../utils/generate-svg-elem";

import "./quantity-controls.css";

export default function createQuantityControls({
  productId,
  quantity,
}: cartItem): HTMLDivElement {
  const controlsDiv: HTMLDivElement = document.createElement("div");

  controlsDiv.className = "item-quantity__controls";

  controlsDiv.appendChild(
    createButton(
      "item-quantity__decrement",
      "/assets/images/icons.svg#icon-decrement-quantity",
      productId
    )
  );
  controlsDiv.appendChild(createQuantityElem(productId, quantity));
  controlsDiv.appendChild(
    createButton(
      "item-quantity__increment",
      "/assets/images/icons.svg#icon-increment-quantity",
      productId
    )
  );

  return controlsDiv;
}

function createButton(
  className: string,
  src: string,
  product: number
): HTMLButtonElement {
  const button = document.createElement("button");
  button.className = className;
  button.dataset.productId = product.toString();

  button.appendChild(generateSVGElem("item-quantity__icon", src));

  return button;
}

function createQuantityElem(productId: number, quantity: number): HTMLSpanElement {
  const para = document.createElement("p");
  para.className = "item-quantity";
  para.dataset.productId = productId.toString();
  para.textContent = quantity.toString();

  return para;
}
