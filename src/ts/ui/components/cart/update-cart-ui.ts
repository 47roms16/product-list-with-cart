import { products } from "../../../products";
import { Dessert } from "../../types/dessert-structure";
import { cart as cartProducts, cartItem, cart } from "./cart";
import { generateItem } from "./subcomponents/generate-cart-html";
import { generateEmptyCartDiv } from "./subcomponents/empty-cart-html";
import generateSummaryHTML from "./subcomponents/generate-summary-html";
import generateConfirmButton from "./subcomponents/cta-button";

export async function updateCartUi() {
  const desserts = await products;

  if (!desserts) return;

  const cartWrapper = document.querySelector(
    ".cart__wrapper"
  ) as HTMLDivElement;

  cartWrapper.textContent = "";
  updateCartHeading();

  const emptyCartDiv = generateEmptyCartDiv();
  if (cartProducts.length === 0) {
    cartWrapper?.appendChild(emptyCartDiv);
    return;
  }

  populateCart(desserts, cartWrapper);
}

function populateCart(desserts: Dessert[], cartWrapper: HTMLDivElement) {
  const cartUlist = generateCartUlist();
  const cartSummary = generateSummaryHTML();
  const ctaBtn = generateConfirmButton();

  cartProducts.forEach((product) => {
    const matchingProduct = findMatchingProduct(product, desserts);

    if (matchingProduct) {
      const liElem = generateItem(matchingProduct);
      cartUlist.appendChild(liElem);
    }
  });
  cartWrapper.append(cartUlist, cartSummary, ctaBtn);
}

function findMatchingProduct(cartProduct: cartItem, desserts: Dessert[]) {
  const cartProductId = cartProduct.productId;
  const productQuantity = cartProduct.quantity;

  let matchingProduct;

  desserts.map((dessert) => {
    if (cartProductId === dessert.productId) {
      const updatedDessert = { ...dessert, quantity: productQuantity };
      matchingProduct = updatedDessert;
    }
  });

  return matchingProduct;
}

function generateCartUlist(): HTMLUListElement {
  const cartUlist = document.createElement("ul");
  cartUlist.classList.add("cart__items");

  return cartUlist;
}

function updateCartQuantity() {
  let cartQuantity: number = 0;

  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

  return cartQuantity;
}

function updateCartHeading() {
  const cartHeading = document.querySelector(
    ".cart__heading"
  ) as HTMLHeadElement;

  const formattedQuantity = `Your Cart (${updateCartQuantity().toString()})`;
  cartHeading.textContent = formattedQuantity;
}
