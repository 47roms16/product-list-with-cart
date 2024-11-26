import createQuantityControls from "./create-controls";

const cart: cartItem[] = [];

export function handleAddToCartClick(productId: number) {
  let matchingProduct: cartItem | undefined;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingProduct = cartItem;
    }
  });

  if (matchingProduct) {
    matchingProduct.quantity += 1;
  } else {
    cart.push({ productId, quantity: 1 });
  }
}

// TODO: create decrement and increment buttons functionality for each data

export function updateCartButton(cartBtn: HTMLButtonElement) {
  const newBtn = createQuantityControls();
  cartBtn.replaceWith(newBtn);
}

interface cartItem {
  productId: number;
  quantity: number;
}
