export default function generateCartUlist(): HTMLUListElement {
  const cartUlist = document.createElement("ul");
  cartUlist.className = "cart__items";

  return cartUlist;
}
