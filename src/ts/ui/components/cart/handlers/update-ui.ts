import { cartProducts } from "../state/cart";

import generateEmptyCartDiv from "../generated-subcomponents/empty-cart/empty-cart-html";

import renderItemList from "../../utils/render-ulist";
import updateCartHeading from "../helpers/update-cart-heading";
import { generateItem } from "../generated-subcomponents/item-html";
import createCtaButton from "../../utils/generate-subcomponents/btn-cta-html";
import generateCarbonNeutralMsg from "../generated-subcomponents/carbon-neutral-html";

export default function updateCartUi(): void {
  const cartWrapper = document.querySelector(".cart__wrapper") as HTMLDivElement;

  cartWrapper.textContent = ""; // Clear the cart wrapper before populating it with new items

  if (cartProducts.length === 0) {
    const emptyCartDiv = generateEmptyCartDiv();
    cartWrapper?.appendChild(emptyCartDiv);
  } else {
    renderItemList(cartWrapper, "cart__items", generateItem);

    const carbonNeutralMsg = generateCarbonNeutralMsg();
    const ctaBtn = createCtaButton("cart-cta__btn", "Confirm Order");

    cartWrapper.append(carbonNeutralMsg, ctaBtn);
  }

  updateCartHeading();
}
