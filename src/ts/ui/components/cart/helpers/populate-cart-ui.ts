import mergeQuantitiesWithDessert from "../../../../helpers/merge-quantity-property";
import generateCartUlist from "../../create-ul-html";
import createCtaButton from "../generated-subcomponents/btn-cta-html";
import { generateItem } from "../generated-subcomponents/item-html";
import generateSummaryHTML from "../generated-subcomponents/summary-html";

export default async function populateCart(
  cartWrapper: HTMLDivElement
): Promise<void> {
  const cartUlist = generateCartUlist();
  const cartSummary = generateSummaryHTML();
  const ctaBtn = createCtaButton();

  const productsInCart = await mergeQuantitiesWithDessert();
  // TODO: handle this
  if (!productsInCart) return;

  productsInCart.forEach((product) => {
    const liElem = generateItem(product);
    cartUlist.appendChild(liElem);
  });

  cartWrapper.append(cartUlist, cartSummary, ctaBtn);
}

