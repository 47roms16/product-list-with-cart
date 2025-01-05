import { cartProducts } from "../cart";

export default function addToCart(productId: number) {
  cartProducts.push({ productId, quantity: 1 });
}
