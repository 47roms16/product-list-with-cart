import { Dessert } from "../types/dessert-structure";

export default function generateCartHTML(item: Dessert): HTMLElement {
  const aside = document.createElement("aside");
  aside.classList.add("cart");

  const cartHeading = document.createElement("h2");
  cartHeading.classList.add("cart__heading");
  cartHeading.textContent = "Your Cart (0)";

  const asideElem = generateCartList();
  const removeBtn = createRemoveBtn();

  aside.appendChild(cartHeading);
  aside.appendChild(asideElem);
  aside.appendChild(removeBtn);

  return aside;
}

function generateCartList(): HTMLUListElement {
  const cartUlist = document.createElement("ul");
  cartUlist.classList.add("cart__items");

  const cartItem = generateItem();
  cartUlist.appendChild(cartItem);

  return cartUlist;
}

function generateItem(): HTMLLIElement {
  const cartItem = document.createElement("li");
  cartItem.classList.add("cart-item");

  const cartItemDetails = generateDetails();
  cartItem.appendChild(cartItemDetails);

  return cartItem;
}

function generateDetails(): HTMLDivElement {
  const detailsDiv = document.createElement("div");
  detailsDiv.classList.add("cart-item__details");

  const itemName = document.createElement("h2");
  itemName.classList.add("cart-item__name");
  detailsDiv.appendChild(itemName);

  const itemPricingDetails = generatePricingDetails();
  detailsDiv.appendChild(itemPricingDetails);

  return detailsDiv;
}

function generatePricingDetails(): HTMLDivElement {
  const itemSummaryDiv = document.createElement("div");

  const itemQuantity = createSpan("cart-item__quantity");
  const itemPrice = createSpan("cart-item__price");
  const itemTotal = createSpan("cart-item__total");

  itemSummaryDiv.appendChild(itemQuantity);
  itemSummaryDiv.appendChild(itemPrice);
  itemSummaryDiv.appendChild(itemTotal);

  return itemSummaryDiv;
}

function createSpan(className: string): HTMLSpanElement {
  const span = document.createElement("span");
  span.classList.add(className);

  return span;
}

function createRemoveBtn(): HTMLButtonElement {
  const removeBtn = document.createElement("button");
  removeBtn.classList.add("cart-btn__remove");

  const removeIcon = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );

  const removeIconSrc = document.createElementNS(
    " http://www.w3.org/2000/svg",
    "use"
  );

  removeIconSrc.setAttribute(
    "href",
    "src/assets/images/icons.svg#icon-remove-item"
  );
  removeIcon.classList.add("cart-btn__icon");

  removeIcon.appendChild(removeIconSrc);

  return removeBtn;
}
