import { cartProducts } from "../state/cart";

export default async function updateOrderTotal(): Promise<number | void> {
  let total = 0;

  cartProducts.forEach((product) => {
    total += product.price;
  });

  return total;
}
