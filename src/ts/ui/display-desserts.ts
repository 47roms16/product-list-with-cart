import { initButtonListeners } from "./components/add-to-cart";
import createMenuItem from "./create-dessert-html";
import { products } from "../products";
import { Dessert } from "./types/dessert-structure";

document.addEventListener("DOMContentLoaded", displayDessertList);

async function displayDessertList(): Promise<void> {
  try {
    const menuContainer = document.querySelector(".menu") as HTMLUListElement;

    if (!menuContainer) return;

    const desserts = await products;

    if (!Array.isArray(desserts) || desserts.length === 0) {
      return;
    }
    const menuItems: HTMLLIElement[] = desserts.map((dessert) => {
      return createMenuItem(dessert);
    });

    // const menuItems: HTMLLIElement[] = dessertList.map((dessert) =>
    //   createMenuItem(dessert)
    // );

    menuItems.forEach((item) => menuContainer.appendChild(item));

    initButtonListeners(menuContainer);
  } catch (err) {
    console.error(err);
  }
}

function updateCartUi() {
  // iterate through array of dessert added to cart
  // update total price and quantity
}
