import renderItemList from "../../utils/render-ulist";
import generateConfirmedItem from "./item-details";

export default function generateOrderSummary(): HTMLDivElement {
  const orderSummaryWrap = document.createElement("div");
  orderSummaryWrap.className = "order-summary";

  renderItemList(orderSummaryWrap, "modal-items", generateConfirmedItem);

  return orderSummaryWrap;
}
