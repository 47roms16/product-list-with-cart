import updatedDessertsObj from "../../../../helpers/merge-quantity-property";

export default async function updateOrderTotal(): Promise<number | void> {
  let total = 0;

  const productsInCart = await updatedDessertsObj();

  if (!productsInCart) return;

  productsInCart.forEach((product) => {
    total += product.price;
  });

  return total;
}
