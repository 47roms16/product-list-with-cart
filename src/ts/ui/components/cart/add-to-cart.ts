import { handleAddToCartClick, updateCartButton } from "./cart";

export function initButtonListeners(container: HTMLUListElement): void {
  container.addEventListener("click", (event) => {
    const target = event.target as HTMLButtonElement;

    const addToCartBtn: HTMLButtonElement | null = target.closest(
      ".menu-btn__add-to-cart"
    );

    if (!addToCartBtn) return;

    const productId: string | undefined = addToCartBtn.dataset.productId;

    if (!productId) {
      console.error("Product ID is missing.");
      return;
    }

    const productIdNum = parseInt(productId);

    if (addToCartBtn) {
      handleAddToCartClick(productIdNum);
      updateCartButton(addToCartBtn);
    }
  });
}
