import { cartProducts } from "../../cart/cart";
import generateSVGElem from "../../utils/generate-svg-elem";

import "./quantity-controls.css";

export default function createQuantityControls(
  productId: number,
  quantity: number
): HTMLDivElement {
  const controlsDiv: HTMLDivElement = document.createElement("div");

  controlsDiv.className = "item-quantity__controls";

  controlsDiv.appendChild(
    createButton(
      "item-quantity__decrement",
      "src/assets/images/icons.svg#icon-decrement-quantity",
      productId
    )
  );
  controlsDiv.appendChild(createQuantityElem(quantity));
  controlsDiv.appendChild(
    createButton(
      "item-quantity__increment",
      "src/assets/images/icons.svg#icon-increment-quantity",
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

function createQuantityElem(quantity: number): HTMLSpanElement {
  const para = document.createElement("p");
  para.className = "item-quantity";
  para.textContent = quantity.toString();

  return para;
}

export function updateCartButton(
  cartBtn: HTMLButtonElement,
  productId: number
) {
  const matchingProduct = cartProducts.find(
    (product) => product.productId === productId
  );

  if (!matchingProduct) return;

  console.log(matchingProduct);
  const newBtn = createQuantityControls(productId, matchingProduct.quantity);

  cartBtn.replaceWith(newBtn);
}
