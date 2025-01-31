import generateSVGElem from "../../utils/generate-subcomponents/generate-svg-elem";

import "./btn-remove.css";

export default function generateRemoveBtn(): HTMLButtonElement {
  const removeBtn = document.createElement("button");
  removeBtn.className = "cart-btn__remove";

  const removeIcon = generateSVGElem(
    "cart-remove__icon",
    "/assets/images/icons.svg#icon-remove-item"
  );

  removeBtn.appendChild(removeIcon);
  return removeBtn;
}
