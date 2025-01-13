import generateSVGElem from "../../utils/generate-svg-elem";

export default function generateSummaryHTML(): HTMLElement {
  const summarySection = document.createElement("section");
  summarySection.className = "cart-summary__wrap";

  const totalDetails = generateTotalDetails();
  const carbonNeutralMessage = generateCarbonNeutralMessage();

  summarySection.append(totalDetails, carbonNeutralMessage);

  return summarySection;
}

function generateTotalDetails(): HTMLDivElement {
  const summaryTotalWrap = document.createElement("div");
  summaryTotalWrap.className = "cart-summary__total";
  summaryTotalWrap.textContent = "Order Total ";

  const totalPrice = createPriceElem();
  summaryTotalWrap.appendChild(totalPrice);

  return summaryTotalWrap;
}

function createPriceElem(): HTMLSpanElement {
  const totalPrice = document.createElement("span");

  totalPrice.className = "cart-summary__price";
  totalPrice.textContent = "$46.50";

  return totalPrice;
}

function generateCarbonNeutralMessage(): HTMLDivElement {
  const messageDiv = document.createElement("div");
  messageDiv.className = "cart-summary__details";

  const icon = generateSVGElem(
    "cart-summary__icon",
    "/assets/images/icons.svg#icon-carbon-neutral"
  );

  const messagePara = document.createElement("p");
  messagePara.className = "cart-summary__message";

  const messageSpan = document.createElement("span");
  messageSpan.className = "cart-summary__carbon-neutral";
  messageSpan.textContent = "carbon-neutral";

  messagePara.append("This is ", messageSpan, " delivery");
  messageDiv.append(icon, messagePara);
  return messageDiv;
}
