import { initButtonListeners } from "./components/cart/add-to-cart";
import createMenuItem from "./create-dessert-html";
import { products } from "../products";
import { displayCartItems } from "./components/cart/display-cart";

document.addEventListener("DOMContentLoaded", displayDessertList);

async function displayDessertList(): Promise<void> {
  try {
    displayCartItems();
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

function updateCartUi() {
  // iterate through array of dessert added to cart
  // update total price and quantity
}
