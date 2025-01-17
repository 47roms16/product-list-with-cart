import generateSVGElem from "../../utils/generate-subcomponents/generate-svg-elem";

import "./carbon-neutral.css";

export default function generateCarbonNeutralMsg(): HTMLParagraphElement {
  const messagePara = document.createElement("p");
  messagePara.className = "carbon-neutral-msg";

  const icon = generateSVGElem(
    "carbon-neutral-icon",
    "/assets/images/icons.svg#icon-carbon-neutral"
  );

  const messageSpan = document.createElement("span");
  messageSpan.className = "carbon-neutral";
  messageSpan.textContent = "carbon-neutral";

  messagePara.append(icon, "This is ", messageSpan, " delivery");

  return messagePara;
}
