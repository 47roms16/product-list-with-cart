import createQuantityControls from "./create-controls";

const cart: cartItem[] = [];

export function handleAddToCartClick(productId: number) {
  let matchingProduct: cartItem | undefined;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingProduct = cartItem;
    }
  });

  console.log(cart);

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

interface cartItem {
  productId: number;
  quantity: number;
}
