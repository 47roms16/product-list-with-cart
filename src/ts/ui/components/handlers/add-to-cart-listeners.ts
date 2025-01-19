import { Dessert } from "../../types/dessert-structure";

import {
  handleAddToCartClick,
  handleDecrementClick,
  handleIncrementClick,
  handleRemoveClick,
  handleResetClick,
} from "../cart/handlers";
import showModalSuccess from "../modal/show-modal";

export default function setUpAddToCartBtns(desserts: Dessert[]): void {
  /*
    Event Delegation: Instead of adding individual event listeners to each button,
    we attach a single event listener to the container. This improves performance
    and dynamically handles buttons added to the DOM later.
   */
  document.body.addEventListener("click", (event) => {
    const target = event.target as HTMLButtonElement;

    const parentLi = target.closest("li[data-product-id]") as HTMLLIElement;

    if (!parentLi) return;

    const productId = Number(parentLi.dataset.productId);

    if (!productId) {
      // If no product ID is found on the parent <li>, it indicates a structural or data error.
      console.error("Product ID is missing.");
      return;
    }

    // * The button elements exists, but it doesn't store the product ID directly.
    // * Instead, we rely on the 'data-product-id' attribute from the closest parent <li> element.
    // * This ensures that the button's behavior is tied to its corresponding product

    // Add To Cart button
    const addToCartBtn = target.closest(".menu-btn__add-to-cart") as HTMLButtonElement;

    if (addToCartBtn) {
      handleAddToCartClick(desserts, productId, addToCartBtn);
    }

    // * Quantity controls`

    const decrementBtn = target.closest(".item-quantity__decrement") as HTMLButtonElement;
    const incrementBtn = target.closest(".item-quantity__increment") as HTMLButtonElement;

    if (decrementBtn) {
      handleDecrementClick(parentLi, productId);
    }
    if (incrementBtn) {
      handleIncrementClick(parentLi, productId);
    }
    // * Cart remove item button

    const removeBtn = target.closest(".cart-btn__remove") as HTMLButtonElement;

    if (removeBtn) {
      handleRemoveClick(productId);
    }

    // * CTA / Confirm order button

    const ctaBtn = target.closest(".cart-cta__btn");

    if (ctaBtn) {
      showModalSuccess();
    }

    const newOrderBtn = target.closest(".new-order-btn");

    if (newOrderBtn) {
      handleResetClick();
    }
  });
}
