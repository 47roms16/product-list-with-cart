import { DessertCartItem } from "../../types/dessert-structure";

export default function populateUlist(
  products: DessertCartItem[],
  generateListItem: (product: DessertCartItem) => HTMLLIElement
): { uListElem: HTMLUListElement; total: number } {
  let total = 0;

  const uListElem = document.createElement("ul");

  products.forEach((product) => {
    const liElem = generateListItem(product);
    uListElem.appendChild(liElem);
    total += product.price * product.quantity;
  });

  return { uListElem, total };
}
