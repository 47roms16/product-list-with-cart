import populateUlist from "./populate-ulist";
import { DessertCartItem } from "../../types/dessert-structure";
import generateTotalDetails from "./generate-subcomponents/generate-total-details";
import { cartProducts } from "../cart/state/cart";

export default async function renderItemList(
  cartWrapper: HTMLDivElement,
  className: string,
  generateItem: (product: DessertCartItem) => HTMLLIElement
): Promise<void> {
  const { uListElem, total } = populateUlist(cartProducts, generateItem);
  uListElem.className = className;

  const totalItemsWrap = document.createElement("div");
  totalItemsWrap.className = "total-items-wrap";

  const totalPrice = generateTotalDetails(total);
  totalItemsWrap.append(uListElem, totalPrice);

  cartWrapper.append(totalItemsWrap);
}
