import generateSVGElem from "../../utils/generate-subcomponents/generate-svg-elem";

import "./quantity-controls.css";

export default function createQuantityControls(quantity: number): HTMLDivElement {
  const controlsDiv: HTMLDivElement = document.createElement("div");

  controlsDiv.className = "item-quantity__controls";

  controlsDiv.appendChild(
    createButton(
      "item-quantity__decrement",
      "/assets/images/icons.svg#icon-decrement-quantity"
    )
  );
  controlsDiv.appendChild(createQuantityElem(quantity));
  controlsDiv.appendChild(
    createButton(
      "item-quantity__increment",
      "/assets/images/icons.svg#icon-increment-quantity"
    )
  );

  return controlsDiv;
}

function createButton(className: string, src: string): HTMLButtonElement {
  const button = document.createElement("button");
  button.className = className;

  button.appendChild(generateSVGElem("item-quantity__icon", src));

  return button;
}

function createQuantityElem(quantity: number): HTMLSpanElement {
  const para = document.createElement("p");
  para.className = "item-quantity";
  para.textContent = quantity.toString();

  return para;
}
