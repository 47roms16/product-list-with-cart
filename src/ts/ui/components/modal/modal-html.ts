import createCtaButton from "../utils/generate-subcomponents/btn-cta-html";
import generateSVGElem from "../utils/generate-subcomponents/generate-svg-elem";
import generateOrderSummary from "./generated-subcomponents/items-html";

export default function generateModalWrap(): HTMLDivElement {
  const modalWrap = document.createElement("div");
  modalWrap.className = "modal-wrap";

  const modal = generateModalElem();

  modalWrap.appendChild(modal);

  return modalWrap;
}

function generateModalElem(): HTMLDialogElement {
  const dialogElem = document.createElement("dialog");
  dialogElem.className = "modal";
  dialogElem.open = true;

  const successIcon = generateSVGElem(
    "success-icon",
    "/assets/images/icons.svg#icon-order-confirmed"
  );

  const modalHeading = createModalHeading();
  const modalDescription = createModalDescription();
  const orderSummary = generateOrderSummary();
  const startNewOrderBtn = createCtaButton("new-order-btn", "Start New Order");

  dialogElem.append(
    successIcon,
    modalHeading,
    modalDescription,
    orderSummary,
    startNewOrderBtn
  );

  return dialogElem;
}

function createModalHeading(): HTMLHeadElement {
  const modalHeading = document.createElement("h2");
  modalHeading.className = "modal-title";
  modalHeading.textContent = "Order Confirmed";

  return modalHeading;
}

function createModalDescription(): HTMLParagraphElement {
  const modalDescription = document.createElement("p");
  modalDescription.className = "modal-description";
  modalDescription.textContent = "We hope you enjoy your food!";

  return modalDescription;
}
