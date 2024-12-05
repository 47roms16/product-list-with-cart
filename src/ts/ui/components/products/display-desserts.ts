import { initButtonListeners } from "../cart/add-to-cart";
import createMenuItem from "./generate-dessert-html";
import { products } from "../../../products";
import { updateCartUi } from "../cart/update-cart-ui";

document.addEventListener("DOMContentLoaded", displayDessertList);

async function displayDessertList(): Promise<void> {
  try {
    updateCartUi();
    const menuSection = document.querySelector(".menu__wrap");
    const menuWrap = document.createElement("ul");

    menuWrap.classList.add("menu");
    menuSection?.appendChild(menuWrap);

    const desserts = await products;

    if (!desserts) {
      return;
    }
    const menuItems: HTMLLIElement[] = desserts.map((dessert) => {
      return createMenuItem(dessert);
    });

    menuItems.forEach((item) => menuWrap.appendChild(item));

    initButtonListeners(menuWrap);
  } catch (err) {
    console.error(err);
  }
}
