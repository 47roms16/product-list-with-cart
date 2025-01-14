import findMatchingId from "../../../utils/find-matching-id";

export function decrementQuantity(btnId: number): void {
  const matchingProduct = findMatchingId(btnId);

  if (!matchingProduct) return;

  if (matchingProduct.quantity > 0) {
    matchingProduct.quantity -= 1;
  }
}

export function incrementQuantity(btnId: number): void {
  const matchingProduct = findMatchingId(btnId);

  if (!matchingProduct) return;
  matchingProduct.quantity += 1;
}
