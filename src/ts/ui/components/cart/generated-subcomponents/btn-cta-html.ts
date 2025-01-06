import "./btn-cta.css";

export default function createCtaButton(): HTMLButtonElement {
  const ctaBtn = document.createElement("button");
  ctaBtn.className = "cart-cta__btn";
  ctaBtn.textContent = "Confirm Order";

  return ctaBtn;
}
