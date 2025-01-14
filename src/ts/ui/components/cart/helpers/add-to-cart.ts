import { cartItem } from "../types/cart-item";

export default function addToCart(cart: cartItem[], productId: number): void {
  cart.push({ productId, quantity: 1 });
}
