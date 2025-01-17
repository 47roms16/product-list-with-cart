import generateSVGElem from "../../../utils/generate-subcomponents/generate-svg-elem";

import "./empty-cart.css";

export default function generateEmptyCartDiv(): HTMLDivElement {
  const emptyCartDiv = document.createElement("div");
  emptyCartDiv.className = "cart__empty";

  const emptyCartImage = generateSVGElem(
    "cart__empty-illustration",
    "/assets/images/icons.svg#illustration-empty-cart"
  );
  const emptyCartMsg = generateCartMessage();
  emptyCartDiv.appendChild(emptyCartImage);
  emptyCartDiv.appendChild(emptyCartMsg);

  return emptyCartDiv;
}

function generateCartMessage() {
  const para = document.createElement("p");
  para.className = "cart__message";
  para.textContent = "Your added items will appear here";

  return para;
}
