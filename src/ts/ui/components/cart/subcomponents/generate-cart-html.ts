import { Dessert } from "../../../types/dessert-structure";
// TODO: Create confirm order button
export function generateItem(cartProduct: Dessert): HTMLLIElement {
  const cartItem = document.createElement("li");
  cartItem.classList.add("cart-item");
  const removeBtn = createRemoveBtn();

  const cartItemDetails = generateDetails(cartProduct);
  cartItem.appendChild(cartItemDetails);
  cartItem.appendChild(removeBtn);

  return cartItem;
}

function generateDetails(cartItem: Dessert): HTMLDivElement {
  const detailsDiv = document.createElement("div");
  detailsDiv.classList.add("cart-item__details");

  const itemName = document.createElement("h3");
  itemName.classList.add("cart-item__name");
  itemName.textContent = cartItem.name;
  detailsDiv.appendChild(itemName);

  const itemPricingDetails = generatePricingDetails(cartItem);
  detailsDiv.appendChild(itemPricingDetails);

  return detailsDiv;
}

function generatePricingDetails(cartItem: Dessert): HTMLDivElement {
  const itemSummaryDiv = document.createElement("div");

  const quantity = cartItem.quantity;
  const price = cartItem.price;
  const total = calculateTotal(quantity, price);

  const formattedQuantity = `${quantity.toString()}x`;
  const formattedPrice = `@ $${price.toFixed(2)}`;
  const formattedTotal = `$${total.toFixed(2).toString()}`;

  const itemQuantity = createSpan("cart-item__quantity", formattedQuantity);
  const itemPrice = createSpan("cart-item__price", formattedPrice);
  const itemTotal = createSpan("cart-item__total", formattedTotal);

  itemSummaryDiv.appendChild(itemQuantity);
  itemSummaryDiv.appendChild(itemPrice);
  itemSummaryDiv.appendChild(itemTotal);

  return itemSummaryDiv;
}

function createRemoveBtn(): HTMLButtonElement {
  const removeBtn = document.createElement("button");
  removeBtn.classList.add("cart-btn__remove");

  const removeIcon = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  removeIcon.classList.add("cart-btn__icon");

  const removeIconSrc = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "use"
  );

  removeIconSrc.setAttribute(
    "href",
    "src/assets/images/icons.svg#icon-remove-item"
  );
  removeIcon.appendChild(removeIconSrc);

  removeBtn.appendChild(removeIcon);
  return removeBtn;
}

function createSpan(className: string, text: string): HTMLSpanElement {
  const span = document.createElement("span");
  span.classList.add(className);
  span.textContent = text;

  return span;
}

function calculateTotal(quantity: number | undefined | null, price: number) {
  return (quantity ?? 0) * price;
}
