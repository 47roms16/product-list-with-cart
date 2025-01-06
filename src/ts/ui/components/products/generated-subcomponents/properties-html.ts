import "./properties.css";

export default function generateItemProperties(
  category: string,
  name: string,
  price: number
): HTMLDivElement {
  const detailsDiv = document.createElement("div");
  detailsDiv.className = "menu-item__details ";

  const itemCategory = generateCategoryElem(category);
  const itemName = generateItemNameElem(name);
  const itemPrice = generateItemPriceElem(price);

  detailsDiv.appendChild(itemCategory);
  detailsDiv.appendChild(itemName);
  detailsDiv.appendChild(itemPrice);

  return detailsDiv;
}

function generateCategoryElem(category: string): HTMLHeadingElement {
  const itemCategory = document.createElement("h2");
  itemCategory.className = "menu-item__category";
  itemCategory.textContent = category;

  return itemCategory;
}

function generateItemNameElem(name: string): HTMLHeadingElement {
  const itemName = document.createElement("h3");
  itemName.className = "menu-item__name";
  itemName.textContent = name;
  return itemName;
}

function generateItemPriceElem(price: number): HTMLParagraphElement {
  const itemPrice = document.createElement("p");
  itemPrice.className = "menu-item__price";
  itemPrice.textContent = price.toFixed(2);

  return itemPrice;
}
