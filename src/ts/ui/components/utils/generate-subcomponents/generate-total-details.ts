export default function generateTotalDetails(totalPrice: number): HTMLElement {
  const summaryTotalWrap = document.createElement("div");
  summaryTotalWrap.className = "summary__total";
  summaryTotalWrap.textContent = "Order Total ";

  const totalPriceElem = createTotalPriceElem(totalPrice);
  summaryTotalWrap.appendChild(totalPriceElem);

  return summaryTotalWrap;
}

function createTotalPriceElem(totalPrice: number): HTMLSpanElement {
  const totalPriceElem = document.createElement("span");

  totalPriceElem.className = "summary__price";
  const formattedPrice = totalPrice.toFixed(2);
  totalPriceElem.textContent = `$${formattedPrice}`;

  return totalPriceElem;
}
