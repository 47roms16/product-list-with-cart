import { resetState } from "../cart/state/cart";
import generateAddToCartBtn from "../products/generated-subcomponents/add-to-cart-btn-html";

export default function resetUi(resetBtn: HTMLButtonElement): void {
  resetState();

  const imgElements = document.querySelectorAll(".menu-item__picture");

  const quantityDiv = document.querySelectorAll(".item-quantity__controls");

  quantityDiv.forEach((div) => {
    const addToCartBtn = generateAddToCartBtn();
    div.replaceWith(addToCartBtn);
  });

  imgElements.forEach((pictureElem) => {
    pictureElem.classList.remove("product-added");
  });
  const modal = resetBtn.closest(".modal-wrap");

  modal?.remove();
}
