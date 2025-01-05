import { cartProducts } from "../cart";

export function updateProductQuantityUI(productId: number): void {
  const elem = document.querySelector(
    `[data-product-id="${productId}"].item-quantity`
  ) as HTMLSpanElement;

  const matchingProduct = cartProducts.find(
    (cartProduct) => cartProduct.productId === productId
  );
  if (!matchingProduct) return;

  elem.textContent = matchingProduct.quantity.toString();
}
