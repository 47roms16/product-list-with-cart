import { decrementQuantity, incrementQuantity } from "../../handlers/quantity-controls";
import { replaceWithQuantityControls } from "../../products/helpers/update-button";
import updateQuantityCount from "../../products/helpers/update-quantity-count";
import { cartProducts, updateCartArray } from "../cart";
import addToCart from "../helpers/add-to-cart";
import removeItem from "../helpers/remove-item";
import updateImgIndicator from "../helpers/update-indicator";
import updateOrderTotal from "../helpers/update-order-total";
import updateCartUi from "./update-ui";

export function handleAddToCartClick(productId: number): void {
  addToCart(cartProducts, productId);
  updateCartUi();
  updateImgIndicator(productId);
  replaceWithQuantityControls(productId);
  updateQuantityCount(productId);
  updateOrderTotal();
}

export function handleDecrementClick(productId: number): void {
  decrementQuantity(productId);
  updateQuantityCount(productId);
  updateCartArray(productId);
  updateOrderTotal();
}

export function handleIncrementClick(productId: number): void {
  incrementQuantity(productId);
  updateQuantityCount(productId);
  updateCartUi();
  updateOrderTotal();
}

export function handleRemoveClick(productId: number): void {
  removeItem(productId);
  updateOrderTotal();
}
