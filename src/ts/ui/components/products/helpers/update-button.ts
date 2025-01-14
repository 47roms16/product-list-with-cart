import findMatchingId from "../../../../utils/find-matching-id";
import generateAddToCartBtn from "../generated-subcomponents/add-to-cart-btn-html";
import generateQuantityControls from "../generated-subcomponents/quantity-controls-html";

export function replaceWithQuantityControls(productId: number): void {
  const addToCartBtn = document.querySelector(
    `[data-product-id="${productId}"].menu-btn__add-to-cart`
  ) as HTMLButtonElement;

  const matchingProduct = findMatchingId(productId);

  if (!matchingProduct) return;

  // passing quantity to set the initial textContent for quantity count element

  const quantityControlsDiv = generateQuantityControls(matchingProduct);

  addToCartBtn.replaceWith(quantityControlsDiv);
}

export function restoreAddToCartBtn(productId: number) {
  const matchingProduct = findMatchingId(productId);

  if (!matchingProduct) {
    const addToCartBtn = generateAddToCartBtn(productId);
    const btn = document.querySelector(
      `[data-product-id="${productId}"].item-quantity__decrement`
    ) as HTMLButtonElement;

    const quantityControlsDiv = btn.closest(".item-quantity__controls") as HTMLDivElement;

    quantityControlsDiv.replaceWith(addToCartBtn);
  }
}
