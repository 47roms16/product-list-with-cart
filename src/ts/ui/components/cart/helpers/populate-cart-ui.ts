import mergeQuantitiesWithDessert from "../../../../helpers/merge-quantity-property";
import generateCartUlist from "../../utils/create-ul-html";
import createCtaButton from "../generated-subcomponents/btn-cta-html";
import { generateItem } from "../generated-subcomponents/item-html";
import generateSummaryHTML from "../generated-subcomponents/summary-html";

export default async function populateCart(cartWrapper: HTMLDivElement): Promise<void> {
  const productsInCart = await mergeQuantitiesWithDessert();

  if (!productsInCart) return;

  let total = 0;

  const cartUlist = generateCartUlist();

  productsInCart.forEach((product) => {
    const liElem = generateItem(product);
    cartUlist.appendChild(liElem);
    total += product.price * product.quantity;
  });

  const cartSummary = generateSummaryHTML(total);
  const ctaBtn = createCtaButton();

  cartWrapper.append(cartUlist, cartSummary, ctaBtn);
}
