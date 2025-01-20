import findMatchingId from "../../../../utils/find-matching-id";

export default function updateImgIndicator(productId: number): void {
  const parentLi = document.querySelector(
    `.menu-item[data-product-id="${productId}"]`
  ) as HTMLLIElement;

  const matchingProduct = findMatchingId(productId);

  const pictureElem = parentLi.querySelector(".menu-item__picture") as HTMLLIElement;
  pictureElem?.classList.toggle("product-added", !!matchingProduct);
}
