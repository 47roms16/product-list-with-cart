import findMatchingId from "../../../../utils/find-matching-id";

export default function updateQuantityCount(parentLi: HTMLLIElement, productId: number) {
  const matchingProduct = findMatchingId(productId);

  if (!matchingProduct) return;
  const quantityElem = parentLi.querySelector(".item-quantity") as HTMLSpanElement;
  const productQuantityText = matchingProduct.quantity.toString();

  quantityElem.textContent = productQuantityText;
}
