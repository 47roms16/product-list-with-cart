export default function generateConfirmButton() {
  const btnDiv = document.createElement("div");
  btnDiv.classList.add("cart__cta-wrap");

  const ctaBtn = document.createElement("button");
  ctaBtn.classList.add("cart-cta__btn");
  ctaBtn.textContent = "Confirm Order";
  btnDiv.appendChild(ctaBtn);

  return btnDiv;
}
