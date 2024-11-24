import { Dessert } from "./types/dessert-structure";

export default function generateMenuItem(item: Dessert): HTMLLIElement {
  // create <li> - outer element
  const liItem: HTMLLIElement = document.createElement("li");
  liItem.classList.add("menu-item");

  liItem.appendChild(
    generateImgElements(
      item.image.desktop,
      item.image.tablet,
      item.image.mobile,
      item.name
    )
  );
  liItem.appendChild(generateAddToCartBtn(item.productId));
  liItem.appendChild(generateItemDetails(item.category, item.name, item.price));

  return liItem;
}

function generateImgElements(
  desktopImg: string,
  tabletImg: string,
  mobileImg: string,
  itemName: string
): HTMLPictureElement {
  const pictureElem: HTMLPictureElement = document.createElement("picture");

  // desktop screen size image source
  const sourceDesktop: HTMLSourceElement = document.createElement("source");
  sourceDesktop.classList.add("menu-item__img");
  sourceDesktop.media = "(min-width:1024px)";
  sourceDesktop.srcset = `src/${desktopImg}`;
  pictureElem.appendChild(sourceDesktop);

  // tablet screen size image source
  const sourceTablet: HTMLSourceElement = document.createElement("source");
  sourceTablet.classList.add("menu-item__img");
  sourceTablet.media = "(min-width:640px)";
  sourceTablet.srcset = `src/${tabletImg}`;
  pictureElem.appendChild(sourceTablet);

  const imgElem = document.createElement("img");
  imgElem.classList.add("menu-item__img");
  imgElem.src = `src/${mobileImg}`;
  imgElem.alt = `${itemName}`;
  pictureElem.appendChild(imgElem);
  return pictureElem;
}

function generateAddToCartBtn(productId: number): HTMLButtonElement {
  const addToCartBtn: HTMLButtonElement = document.createElement("button");
  addToCartBtn.classList.add("menu-btn__add", "js-add-to-cart");
  addToCartBtn.dataset.productId = productId.toString();
  addToCartBtn.setAttribute("aria-label", "Add item to cart");

  const cartIcon: SVGSVGElement = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  cartIcon.classList.add("menu-btn__icon");

  const cartIconSrc: SVGUseElement = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "use"
  );
  cartIconSrc.setAttribute(
    "href",
    "src/assets/images/icons.svg#icon-add-to-cart"
  );

  cartIcon.appendChild(cartIconSrc);

  addToCartBtn.appendChild(cartIcon);
  addToCartBtn.appendChild(document.createTextNode("Add To Cart"));

  return addToCartBtn;
}

function generateItemDetails(
  category: string,
  name: string,
  price: number
): HTMLDivElement {
  const detailsDiv = document.createElement("div");
  detailsDiv.classList.add("menu-item__details");

  const itemCategory = document.createElement("h2");
  itemCategory.classList.add("menu-item__category");
  itemCategory.textContent = category;
  detailsDiv.appendChild(itemCategory);

  const itemName = document.createElement("h2");
  itemName.classList.add("menu-item__name");
  itemName.textContent = name;
  detailsDiv.appendChild(itemName);

  const itemPrice = document.createElement("p");
  itemPrice.classList.add("menu-item__price");
  itemPrice.textContent = price.toFixed(2);
  detailsDiv.appendChild(itemPrice);

  return detailsDiv;
}
