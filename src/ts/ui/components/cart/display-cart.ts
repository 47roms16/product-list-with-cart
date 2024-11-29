import { products } from "../../../products";
import { Dessert } from "../../types/dessert-structure";
import { cart, cartItem, updateCartQuantity } from "./cart";
import { generateItem } from "./create-cart-html";

export async function displayCartItems() {
  const desserts = await products;
  const cartItems = cart;

  if (!desserts) return;

  const asideElem = generateAsideElem();
  const cartUlistElem = generateCartUlist();

  displayMatchingProducts(cartItems, desserts, cartUlistElem);

  asideElem.appendChild(cartUlistElem); // add each cart items and render each
}

function displayMatchingProducts(
  cartProducts: cartItem[],
  products: Dessert[],
  ulistContainer: HTMLUListElement
) {
  cartProducts.forEach((item) => {
    let matchingProduct;
    const cartItemId = item.productId;
    const itemQuantity = item.quantity;

    products.forEach((product) => {
      if (cartItemId === product.productId) {
        matchingProduct = product;
        matchingProduct.quantity = itemQuantity;
      }
    });

    if (matchingProduct) {
      const cartLiItem = generateItem(matchingProduct);
      ulistContainer.appendChild(cartLiItem);
    }
  });
}

// generate and add Aside element to main element
function generateAsideElem(): HTMLElement {
  const mainContainer = document.querySelector(".main");
  const asideElem = document.createElement("aside");

  asideElem.classList.add("cart");
  mainContainer?.appendChild(asideElem);

  const cartQuantity = updateCartQuantity();

  const cartHeading = document.createElement("h2");
  cartHeading.classList.add("cart__heading");
  cartHeading.textContent = `Your Cart (${cartQuantity})`;

  const cartUlist = generateCartUlist();
  // const emptyCart = generateEmptyCart();

  asideElem.appendChild(cartHeading);

  if (cart.length !== 0) {
    // asideElem.appendChild(emptyCart);
  } else {
    asideElem.appendChild(cartUlist);
  }
  return asideElem;
}

function generateCartUlist(): HTMLUListElement {
  const cartUlist = document.createElement("ul");
  cartUlist.classList.add("cart__items");

  return cartUlist;
}

function generateConfirmButton() {}
