import { cartItem } from "./types/cart-item";

import updateCartUi from "./handlers/update-ui";
import { restoreAddToCartBtn } from "../products/helpers/update-button";

import findMatchingId from "../../../utils/find-matching-id";

export let cartProducts: cartItem[] = [];

export function updateCartArray(productId: number): void {
  const matchingProduct = findMatchingId(productId);

  if (matchingProduct?.quantity === 0) {
    cartProducts = cartProducts.filter((product) => product.productId !== productId);
  }

  updateCartUi();
  restoreAddToCartBtn(productId);
}
