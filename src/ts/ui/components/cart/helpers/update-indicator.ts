import { DessertCartItem } from "../../../types/dessert-structure";

export default function updateImgIndicator(
  productId: number,
  matchingProduct?: DessertCartItem
): void {
  const parentLi = document.querySelector(
    `.menu-item[data-product-id="${productId}"]`
  ) as HTMLLIElement;

  const pictureElem = parentLi.querySelector(".menu-item__picture") as HTMLLIElement;
  pictureElem?.classList.toggle("product-added", !!matchingProduct);
}
