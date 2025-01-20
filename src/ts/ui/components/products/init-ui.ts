import { products } from "../../../api/products";

import updateCartUi from "../cart/handlers/update-ui";
import setUpAddToCartBtns from "../handlers/add-to-cart-listeners";

import "./grid-items.css";
import renderMenuUi from "./helpers/render-menu-items";

export default async function initUi(): Promise<void> {
  try {
    const desserts = await products;

    if (!desserts) return;

    renderMenuUi(desserts);
    setUpAddToCartBtns(desserts);
    updateCartUi();
  } catch (err) {
    console.error(err);
  }
}
