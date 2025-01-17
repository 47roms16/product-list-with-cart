import "./btn-cta.css";

export default function createCtaButton(
  className: string,
  text: string
): HTMLButtonElement {
  const ctaBtn = document.createElement("button");
  ctaBtn.className = className;
  ctaBtn.textContent = text;

  return ctaBtn;
}
