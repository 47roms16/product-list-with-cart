import { products } from "../api/products";
import { cartProducts } from "../ui/components/cart/cart";
import { DessertCartItem } from "../ui/types/dessert-structure";

export default async function updatedDessertsObj(): Promise<
  DessertCartItem[] | void
> {
  const productsInCart: DessertCartItem[] = [];

  const desserts = await products;

  if (!desserts) return;

  for (const cartProduct of cartProducts) {
    for (const dessert of desserts) {
      if (cartProduct.productId === dessert.productId) {
        const product = { ...cartProduct, ...dessert };
        productsInCart.push(product);
        break; // Break out of the inner loop to avoid unnecessary iterations
      }
    }
  }
  return productsInCart;
}
