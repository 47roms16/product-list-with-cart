import createQuantityControls from "./create-controls";

import { initControlsBtn } from "./control-quantity";

export function initButtonListeners(container: HTMLUListElement): void {
  container.addEventListener("click", (event) => {
    const target = event.target as HTMLButtonElement;

    if (!(target instanceof HTMLButtonElement)) return;

    initAddToCartBtn(target);

    initControlsBtn(target);
  });
}

function initAddToCartBtn(target: HTMLButtonElement) {
  const addToCartBtn = target.closest(
    ".menu-btn__add-to-cart"
  ) as HTMLButtonElement;
  console.log(addToCartBtn);
  if (addToCartBtn) {
    handleAddToCartClick(addToCartBtn);
    return;
  }
}

function handleAddToCartClick(cartBtn: HTMLButtonElement): void {
  const newBtn = createQuantityControls();

  cartBtn.replaceWith(newBtn);
}
