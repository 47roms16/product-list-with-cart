import findMatchingId from "../../../../utils/find-matching-id";

export default function updateImgIndicator(productId: number): void {
  const pictureElem = document.querySelector(
    `[data-product-id="${productId}"].menu-item__picture`
  ) as HTMLPictureElement;

  const matchingProduct = findMatchingId(productId);

  if (!matchingProduct) return;
  pictureElem?.classList.toggle("product-added", matchingProduct.quantity > 0);
}
