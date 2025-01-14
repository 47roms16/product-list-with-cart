import generateSVGElem from "../../utils/generate-svg-elem";

export default function generateSummaryHTML(totalPrice: number): HTMLElement {
  const summarySection = document.createElement("section");
  summarySection.className = "cart-summary__wrap";

  const totalDetails = generateTotalDetails(totalPrice);
  const carbonNeutralMessage = generateCarbonNeutralMessage();

  summarySection.append(totalDetails, carbonNeutralMessage);

  return summarySection;
}

function generateTotalDetails(totalPrice: number): HTMLDivElement {
  const summaryTotalWrap = document.createElement("div");
  summaryTotalWrap.className = "cart-summary__total";
  summaryTotalWrap.textContent = "Order Total ";

  const totalPriceElem = createPriceElem(totalPrice);
  summaryTotalWrap.appendChild(totalPriceElem);

  return summaryTotalWrap;
}

function createPriceElem(totalPrice: number): HTMLSpanElement {
  const totalPriceElem = document.createElement("span");

  totalPriceElem.className = "cart-summary__price";
  const formattedPrice = totalPrice.toFixed(2);
  totalPriceElem.textContent = `$${formattedPrice}`;

  return totalPriceElem;
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
