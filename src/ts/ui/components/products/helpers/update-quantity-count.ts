import findMatchingId from "../../../../utils/find-matching-id";

export default function updateQuantityCount(productId: number) {
  const matchingProduct = findMatchingId(productId);

  if (!matchingProduct) return;

  const quantityElem = document.querySelector(
    `[data-product-id="${productId}"].item-quantity`
  ) as HTMLParagraphElement;
  quantityElem.textContent = matchingProduct.quantity.toString();
}
