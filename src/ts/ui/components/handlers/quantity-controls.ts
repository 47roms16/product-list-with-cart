import { cartProducts } from "../cart/cart";
import { updateCartUi } from "../cart/handlers/update-ui";

export function decrementQuantity(target: HTMLButtonElement) {
  const btnId = Number(target.dataset.productId);

  cartProducts.forEach((cartProduct) => {
    if (cartProduct.productId === btnId && cartProduct.quantity > 0) {
      cartProduct.quantity -= 1;
    }
  });
  updateProductQuantity(btnId);
  updateCartUi();
}

export function incrementQuantity(target: HTMLButtonElement) {
  const btnId = Number(target.dataset.productId);

  const matchingProduct = cartProducts.find(
    (cartProduct) => cartProduct.productId === btnId
  );

  if (!matchingProduct) return;
  matchingProduct.quantity += 1;
  updateProductQuantity(btnId);
  updateCartUi();
}

export function updateProductQuantity(productId: number) {
  const elem = document.querySelector(
    `[data-product-id="${productId}"].item-quantity`
  ) as HTMLSpanElement;

  const matchingProduct = cartProducts.find(
    (cartProduct) => cartProduct.productId === productId
  );
  if (!matchingProduct) return;

  elem.textContent = matchingProduct.quantity.toString();
}
