import { Dessert } from "../../../types/dessert-structure";
import { cartProducts } from "../state/cart";

export default function addToCart(desserts: Dessert[], productId: number): void {
  const matchingDessert = desserts.find((dessert) => dessert.productId === productId);

  if (matchingDessert) {
    cartProducts.push({ ...matchingDessert, quantity: 1 });
  }
}
