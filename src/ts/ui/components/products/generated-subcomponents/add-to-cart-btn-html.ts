import generateSVGElem from "../../utils/generate-svg-elem";

import "./add-to-cart.css";

export default function generateAddToCartBtn(
  productId: number
): HTMLButtonElement {
  const addToCartBtn: HTMLButtonElement = document.createElement("button");
  addToCartBtn.className = "menu-btn__add-to-cart";
  addToCartBtn.dataset.productId = productId.toString();
  addToCartBtn.setAttribute("aria-label", "Add item to cart");

  const cartIcon = generateSVGElem(
    "menu-btn__icon",
    "src/assets/images/icons.svg#icon-add-to-cart"
  );

  addToCartBtn.appendChild(cartIcon);
  addToCartBtn.appendChild(document.createTextNode("Add To Cart"));

  return addToCartBtn;
}
