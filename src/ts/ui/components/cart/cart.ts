import createQuantityControls from "./create-controls";

export const cart: cartItem[] = [
  { productId: 2, quantity: 4 },
  { productId: 7, quantity: 12 },
  { productId: 4, quantity: 3 },
  { productId: 1, quantity: 7 },
];

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

export function updateCartButton(cartBtn: HTMLButtonElement) {
  const newBtn = createQuantityControls();
  cartBtn.replaceWith(newBtn);
}

export function updateCartQuantity() {
  let cartQuantity: number = 0;

  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

  return cartQuantity;
}

interface cartItem {
  productId: number;
  quantity: number;
}
