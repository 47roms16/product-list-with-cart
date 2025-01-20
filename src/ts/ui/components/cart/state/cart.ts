import { restoreAddToCartBtn } from "../../products/helpers/update-button";

import findMatchingId from "../../../../utils/find-matching-id";
import updateImgIndicator from "../helpers/update-indicator";
import { DessertCartItem } from "../../../types/dessert-structure";
import updateCartUi from "../handlers/update-ui";

export let cartProducts: DessertCartItem[] = [];

export function removeItemFromArray(productId: number): void {
  const matchingProduct = findMatchingId(productId);

  if (matchingProduct?.quantity === 0) {
    cartProducts = cartProducts.filter((product) => product.productId !== productId);

    // UI changes
    // toggle image outline indicator and restore  add to cart button if quantity is 0
    restoreAddToCartBtn(productId);
  }
  updateImgIndicator(productId);
}

export function resetState(): void {
  cartProducts = [];
  updateCartUi();
}
