import { decrementQuantity, incrementQuantity } from "../../handlers/quantity-controls";
import { replaceAddToCartBtn } from "../../products/helpers/update-button";
import updateQuantityCount from "../../products/helpers/update-quantity-count";
import { removeItemFromArray } from "../state/cart";
import addToCart from "../helpers/add-to-cart";
import removeItem from "../helpers/remove-item";
import updateImgIndicator from "../helpers/update-indicator";
import updateOrderTotal from "../helpers/update-order-total";
import updateCartUi from "./update-ui";
import initUi from "../../products/init-ui";
import { Dessert } from "../../../types/dessert-structure";

export async function handleAddToCartClick(
  desserts: Dessert[],
  productId: number,
  addToCartBtn: HTMLButtonElement
): Promise<void> {
  addToCart(desserts, productId);

  // UI changes
  updateCartUi();
  removeItemFromArray(productId);
  replaceAddToCartBtn(addToCartBtn, productId);
  updateOrderTotal();
}

export function handleDecrementClick(parentLi: HTMLLIElement, productId: number): void {
  decrementQuantity(productId);
  removeItemFromArray(productId);

  // UI changes
  updateQuantityCount(parentLi, productId);
  updateOrderTotal();
  updateCartUi();
}

export function handleIncrementClick(parentLi: HTMLLIElement, productId: number): void {
  incrementQuantity(productId);

  //  UI changes
  updateQuantityCount(parentLi, productId);
  updateCartUi();
  updateOrderTotal();
}

export function handleRemoveClick(productId: number): void {
  removeItem(productId);
  updateOrderTotal();
  removeItemFromArray(productId);
  updateImgIndicator(productId);
}

export function handleConfirmClick(): void {}

export function handleResetClick(): void {
  // resetUi();
  initUi();
}
