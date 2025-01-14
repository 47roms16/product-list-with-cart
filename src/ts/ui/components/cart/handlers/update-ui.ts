import { cartProducts } from "../cart";

import generateEmptyCartDiv from "../generated-subcomponents/empty-cart/empty-cart-html";

import populateCart from "../helpers/populate-cart-ui";
import updateCartHeading from "../helpers/update-cart-heading";

export default function updateCartUi(): void {
  const cartWrapper = document.querySelector(".cart__wrapper") as HTMLDivElement;

  cartWrapper.textContent = ""; // Clear the cart wrapper before populating it with new items

  if (cartProducts.length === 0) {
    const emptyCartDiv = generateEmptyCartDiv();
    cartWrapper?.appendChild(emptyCartDiv);
  } else {
    populateCart(cartWrapper);
  }
  updateCartHeading();
}
