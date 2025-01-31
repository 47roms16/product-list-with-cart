import findMatchingId from "../../../../utils/find-matching-id";
import { restoreAddToCartBtn } from "../../products/helpers/update-button";
import { cartProducts } from "../state/cart";
import updateCartUi from "../handlers/update-ui";
import updateImgIndicator from "./update-indicator";

export default function removeCartItem(productId: number): void {
  const itemToRemove = findMatchingId(productId);
  const index = cartProducts.findIndex(
    (product) => product.productId === itemToRemove?.productId
  );
  cartProducts.splice(index, 1);

  updateCartUi();
  updateImgIndicator(productId);
  restoreAddToCartBtn(productId);
}
