import findMatchingId from "../../../../utils/find-matching-id";

export function updateProductQuantityUI(productId: number): void {
  const elem = document.querySelector(
    `[data-product-id="${productId}"].item-quantity`
  ) as HTMLSpanElement;

  const matchingProduct = findMatchingId(productId);
  if (!matchingProduct) return;

  elem.textContent = matchingProduct.quantity.toString();
}
