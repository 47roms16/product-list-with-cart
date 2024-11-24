let quantity = 0;

export default function createQuantityControls(): HTMLDivElement {
  const controlsDiv: HTMLDivElement = document.createElement("div");

  controlsDiv.className =
    "item-quantity__controls item-quantity__controls--active";

  const quantityText: HTMLParagraphElement = document.createElement("p");
  quantityText.classList.add("item-quantity__quantity");

  controlsDiv.appendChild(
    createButton(
      "item-quantity__decrement js-quantity-decrement",
      "src/assets/images/icons.svg#icon-decrement-quantity"
    )
  );
  controlsDiv.appendChild(createQuantityElem());
  controlsDiv.appendChild(
    createButton(
      "item-quantity__increment js-quantity-increment",
      "src/assets/images/icons.svg#icon-increment-quantity"
    )
  );
  return controlsDiv;
}

function createButton(className: string, src: string): HTMLButtonElement {
  const button = document.createElement("button");
  button.classList.add(className);
  button.appendChild(createIconElem("item-quantity__icon", src));

  return button;
}

function createIconElem(className: string, src: string): SVGSVGElement {
  const icon: SVGSVGElement = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  icon.classList.add(className);
  const iconSrc: SVGUseElement = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "use"
  );
  iconSrc.setAttribute("href", src);

  icon.appendChild(iconSrc);

  return icon;
}

function createQuantityElem(): HTMLParagraphElement {
  const para = document.createElement("p");
  para.classList.add("item-quantity__quantity");
  para.textContent = quantity.toString();

  return para;
}
