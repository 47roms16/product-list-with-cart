import { cartProducts } from "../cart";

export default function updateCartHeading() {
  const cartHeading = document.querySelector(
    ".cart__heading"
  ) as HTMLHeadElement;

  const formattedQuantity = `Your Cart (${updateCartQuantity().toString()})`;
  cartHeading.textContent = formattedQuantity;
}

function updateCartQuantity() {
  return cartProducts.reduce((acc, curr) => acc + curr.quantity, 0);
}
