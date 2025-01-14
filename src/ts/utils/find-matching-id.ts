import { cartProducts } from "../ui/components/cart/cart";
import { cartItem } from "../ui/components/cart/types/cart-item";

export default function findMatchingId(productId: number): cartItem | undefined {
  return cartProducts.find((product) => product.productId === productId);
}
