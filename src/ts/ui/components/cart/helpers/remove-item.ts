import findMatchingId from "../../../../utils/find-matching-id";
import { cartProducts } from "../cart";
import updateCartUi from "../handlers/update-ui";

export default function removeItem(productId: number): void {
  const itemToRemove = findMatchingId(productId);
  const index = cartProducts.findIndex(
    (product) => product.productId === itemToRemove?.productId
  );
  cartProducts.splice(index, 1);
  updateCartUi();
}
