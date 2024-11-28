import fetchData from "./api/fetch-desserts";

export const products = assignProductId();

async function assignProductId() {
  const dessertData = await fetchData();

  if (!Array.isArray(dessertData) || !dessertData) return;

  const dataWithId = dessertData.map((dessert, index) => {
    return { ...dessert, productId: index + 1 };
  });

  return dataWithId;
}

interface Image {
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
  quantity?: number;
}
