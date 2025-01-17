export default function calculateEachItemTotal(
  quantity: number | undefined | null,
  price: number
): number {
  return (quantity ?? 0) * price;
}
