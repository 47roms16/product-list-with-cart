import { Dessert } from "../ui/types/dessert-structure";

import fetchData from "./fetch-desserts";

export const products = assignProductId();

async function assignProductId(): Promise<Dessert[] | undefined> {
  const dessertData = await fetchData();

  // TODO: error handling
  if (!Array.isArray(dessertData)) return;

  const dataWithId = dessertData.map((dessert, index) => {
    return { ...dessert, productId: index + 1 };
  });

  return dataWithId;
}
