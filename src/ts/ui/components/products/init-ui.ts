import { products } from "../../../api/products";

import updateCartUi from "../cart/handlers/update-ui";
import setUpAddToCartBtns from "../handlers/add-to-cart-listeners";
import generateMenuItem from "./generate-dessert-html";

import "./grid-items.css";

export default async function initUi(): Promise<void> {
  try {
    const mainSection = document.getElementById("main") as HTMLElement;
    const menuSection = document.querySelector(".menu__wrap") as HTMLElement;
    const menuWrap = document.createElement("ul");

    menuWrap.className = "menu";

    menuSection.appendChild(menuWrap);

    const desserts = await products;

    if (!desserts) {
      return;
    }
    const menuItems: HTMLLIElement[] = desserts.map((dessert) => {
      return generateMenuItem(dessert);
    });

    menuItems.forEach((item) => menuWrap.appendChild(item));

    setUpAddToCartBtns(mainSection);
    updateCartUi();
  } catch (err) {
    console.error(err);
  }
}
