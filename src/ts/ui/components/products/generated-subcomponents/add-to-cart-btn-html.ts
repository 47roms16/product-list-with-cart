import generateSVGElem from "../../utils/generate-subcomponents/generate-svg-elem";

import "./add-to-cart.css";

export default function generateAddToCartBtn(): HTMLButtonElement {
  const addToCartBtn = document.createElement("button");
  addToCartBtn.className = "menu-btn__add-to-cart";
  addToCartBtn.setAttribute("aria-label", "Add item to cart");

  const cartIcon = generateSVGElem(
    "menu-btn__icon",
    "/assets/images/icons.svg#icon-add-to-cart"
  );

  addToCartBtn.appendChild(cartIcon);
  addToCartBtn.appendChild(document.createTextNode("Add To Cart"));

  return addToCartBtn;
}
