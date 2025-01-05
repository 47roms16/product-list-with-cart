import { updateCartButton } from "../products/generated-subcomponents/quantity-controls-html";

import updateIndicatorUI from "../cart/helpers/update-indicator";
import handleAddToCartClick from "../cart/handlers";
import { decrementQuantity, incrementQuantity } from "./quantity-controls";
import { cartProducts } from "../cart/cart";

export default function setUpAddToCartBtns(container: HTMLUListElement): void {
  // Event Delegation: Instead of adding individual event listeners to each button,
  // we attach a single event listener to the container. This improves performance
  // and dynamically handles buttons added to the DOM later.

  container.addEventListener("click", (event) => {
    const target = event.target as HTMLButtonElement;

    // * Add To Cart button
    const addToCartBtn = target.closest(
      ".menu-btn__add-to-cart"
    ) as HTMLButtonElement;

    if (addToCartBtn) {
      const productId: string | undefined = addToCartBtn.dataset
        .productId as string;

      if (!productId) {
        console.error("Product ID is missing.");
        return;
      }

      const productIdNum = parseInt(productId);

      handleAddToCartClick(productIdNum);
      updateCartButton(addToCartBtn, productIdNum);
    }

    // * Quantity controls`
    const decrementBtn = target.closest(
      ".item-quantity__decrement"
    ) as HTMLButtonElement;
    const incrementBtn = target.closest(
      ".item-quantity__increment"
    ) as HTMLButtonElement;

    if (decrementBtn) {
      const productId = parseInt(decrementBtn.dataset.productId as string);
      decrementQuantity(decrementBtn);
      // updateIndicatorUI(productId);
    }
    if (incrementBtn) {
      const productId = parseInt(incrementBtn.dataset.productId as string);
      incrementQuantity(incrementBtn);
      // updateIndicatorUI(productId);
    }
  });
}
