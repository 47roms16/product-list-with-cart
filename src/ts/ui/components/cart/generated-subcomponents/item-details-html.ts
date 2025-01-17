import calculateEachItemTotal from "../../../../utils/calculate-each-total";
import { Dessert, DessertCartItem } from "../../../types/dessert-structure";

import "./item-details.css";

export default function generateDetails(cartItem: Dessert): HTMLDivElement {
  const detailsDiv = document.createElement("div");
  detailsDiv.className = "cart-item__details";

  const itemName = document.createElement("h3");
  itemName.className = "cart-item__name";
  itemName.textContent = cartItem.name;
  detailsDiv.appendChild(itemName);

  const itemPricingDetails = generatePricingDetails(cartItem);
  detailsDiv.appendChild(itemPricingDetails);

  return detailsDiv;
}

function generatePricingDetails({ quantity, price }: DessertCartItem): HTMLDivElement {
  const itemSummaryDiv = document.createElement("div");

  const total = calculateEachItemTotal(quantity, price);

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

function createSpan(className: string, text: string): HTMLSpanElement {
  const span = document.createElement("span");
  span.className = className;
  span.textContent = text;

  return span;
}
