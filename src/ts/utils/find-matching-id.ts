import { cartProducts } from "../ui/components/cart/state/cart";
import { DessertCartItem } from "../ui/types/dessert-structure";

export default function findMatchingId(productId: number): DessertCartItem | undefined {
  return cartProducts.find((product) => product.productId === productId);
}
