export function generateEmptyCartDiv(): HTMLDivElement {
  const emptyCartDiv = document.createElement("div");
  emptyCartDiv.classList.add("cart__empty");

  const emptyCartImage = generateCartSvg();
  const emptyCartPara = generateCartMessage();
  emptyCartDiv.appendChild(emptyCartImage);
  emptyCartDiv.appendChild(emptyCartPara);

  return emptyCartDiv;
}

function generateCartSvg(): SVGSVGElement {
  const emptyCartIllustration = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  emptyCartIllustration.classList.add("cart__empty-illustration");

  const iconSrc = document.createElementNS("http://www.w3.org/2000/svg", "use");
  iconSrc.setAttribute(
    "href",
    "src/assets/images/icons.svg#illustration-empty-cart"
  );
  emptyCartIllustration.appendChild(iconSrc);

  return emptyCartIllustration;
}

function generateCartMessage() {
  const para = document.createElement("p");
  para.classList.add("cart__message");
  para.textContent = "Your added items will appear here";

  return para;
}
