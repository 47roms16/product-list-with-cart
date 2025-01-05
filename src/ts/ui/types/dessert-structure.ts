export interface Image {
  thumbnail: string;
  mobile: string;
  tablet: string;
  desktop: string;
}

export interface Dessert {
  name: string;
  category: string;
  price: number;
  image: Image;
  productId: number;
  quantity: number;
}

export interface DessertCartItem extends Dessert {
  quantity: number;
}
