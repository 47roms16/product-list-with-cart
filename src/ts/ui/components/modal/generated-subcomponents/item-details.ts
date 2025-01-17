import calculateEachItemTotal from "../../../../utils/calculate-each-total";
import { DessertCartItem } from "../../../types/dessert-structure";

export default function generateConfirmedItem(
  cartProducts: DessertCartItem
): HTMLLIElement {
  const liElem = document.createElement("li");
  liElem.className = "modal-item";

  const itemDetailsWrap = generateItemDetailsWrap(cartProducts);
  const itemTotalPrice = createItemTotal(cartProducts);

  liElem.append(itemDetailsWrap, itemTotalPrice);

  return liElem;
}

function generateItemDetailsWrap(cartProducts: DessertCartItem): HTMLDivElement {
  const detailsWrap = document.createElement("div");
  detailsWrap.className = "details-wrap";

  const itemThumbnail = createImgThumbnail(cartProducts.image.thumbnail);
  const itemDetails = generateItemDetails(cartProducts);

  detailsWrap.append(itemThumbnail, itemDetails);

  return detailsWrap;
}

function createImgThumbnail(imgSrc: string): HTMLImageElement {
  const itemThumbnail = document.createElement("img");
  itemThumbnail.className = "item-image";
  itemThumbnail.src = imgSrc;

  return itemThumbnail;
}

function generateItemDetails(cartProducts: DessertCartItem): HTMLDivElement {
  const itemDetails = document.createElement("div");
  itemDetails.className = "item-details";

  const itemNameElem = document.createElement("h3");
  itemNameElem.className = "item-name";

  const itemQuantityElem = document.createElement("span");
  itemQuantityElem.className = "modal-item-quantity";

  const itemPriceElem = document.createElement("span");
  itemPriceElem.className = "item-price";

  itemNameElem.textContent = cartProducts.name;
  itemQuantityElem.textContent = `${cartProducts.quantity.toString()}x`;
  itemPriceElem.textContent = `$${cartProducts.price.toFixed(2)}`;

  itemDetails.append(itemNameElem, itemQuantityElem, itemPriceElem);

  return itemDetails;
}

function createItemTotal({ quantity, price }: DessertCartItem): HTMLSpanElement {
  const totalPrice = document.createElement("span");
  totalPrice.className = "item-total-price";

  const total = calculateEachItemTotal(quantity, price);

  totalPrice.textContent = `$${total.toFixed(2)}`;

  return totalPrice;
}
