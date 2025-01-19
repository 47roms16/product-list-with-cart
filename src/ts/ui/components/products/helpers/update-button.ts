import findMatchingId from "../../../../utils/find-matching-id";
import generateAddToCartBtn from "../generated-subcomponents/add-to-cart-btn-html";
import generateQuantityControls from "../generated-subcomponents/quantity-controls-html";

export function replaceAddToCartBtn(
  addToCartBtn: HTMLButtonElement,
  parentLiId: number
): void {
  const matchingProduct = findMatchingId(parentLiId);

  if (!matchingProduct) return;

  const quantityControlsDiv = generateQuantityControls(matchingProduct.quantity);

  addToCartBtn.replaceWith(quantityControlsDiv);
}

export function restoreAddToCartBtn(productId: number) {
  const matchingProduct = findMatchingId(productId);

  if (!matchingProduct) {
    const addToCartBtn = generateAddToCartBtn();
    const parentLi = document.querySelector(`.menu-item[data-product-id="${productId}"]`);

    const quantityControlsDiv = parentLi?.querySelector(".item-quantity__controls");

    quantityControlsDiv && quantityControlsDiv.replaceWith(addToCartBtn);
  }
}
