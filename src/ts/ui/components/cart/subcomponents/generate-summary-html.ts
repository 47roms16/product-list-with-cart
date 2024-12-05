export default function generateSummaryHTML(): HTMLElement {
  const summarySection = document.createElement("section");
  summarySection.className = "cart-summary__wrap";

  const totalDetails = generateTotalDetails();
  const carbonNeutralMessage = generateCarbonNeutralMessage();

  summarySection.append(totalDetails, carbonNeutralMessage);

  return summarySection;
}

function generateTotalDetails(): HTMLDivElement {
  const summaryTotal = document.createElement("div");
  summaryTotal.className = "cart-summary__total";
  summaryTotal.textContent = "Order Total ";

  const totalPrice = generatePrice();
  summaryTotal.appendChild(totalPrice);

  return summaryTotal;
}

function generatePrice(): HTMLSpanElement {
  const totalPrice = document.createElement("span");

  totalPrice.className = "cart-summary__price";
  totalPrice.textContent = "$46.50";

  return totalPrice;
}

function generateCarbonNeutralMessage(): HTMLDivElement {
  const messageDiv = document.createElement("div");
  messageDiv.className = "cart-summary__details";

  const icon = generateIcon();

  const messagePara = document.createElement("p");
  messagePara.className = "cart-summary__message";

  const messageSpan = document.createElement("span");
  messageSpan.className = "cart-summary__carbon-neutral";
  messageSpan.textContent = "carbon-neutral";

  messagePara.append("This is ", messageSpan, " delivery");

  messageDiv.append(icon, messagePara);
  return messageDiv;
}

function generateIcon(): SVGSVGElement {
  const icon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  icon.classList.add("cart-summary__icon");

  const iconSrc = document.createElementNS("http://www.w3.org/2000/svg", "use");
  iconSrc.setAttribute(
    "href",
    "src/assets/images/icons.svg#icon-carbon-neutral"
  );

  icon.appendChild(iconSrc);
  return icon;
}
