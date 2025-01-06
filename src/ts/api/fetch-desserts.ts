import { Dessert } from "../ui/types/dessert-structure";

export default async function fetchData(): Promise<Dessert[] | null> {
  try {
    const response = await fetch("/data.json");

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const dessertList: Dessert[] = await response.json();

    if (!Array.isArray(dessertList)) throw new Error("Invalid Format: ");

    return dessertList;
  } catch (err: unknown) {
    handleFetchError(err);

    return null;
  }
}

function handleFetchError(err: unknown): void {
  if (err instanceof Error) {
    console.error("An error occurred:", err.message);
    // TODO: handle these
    if (err.message.includes("NetworkError")) {
      alert(
        "Unable to connect to the server. Please check your internet connection."
      );
    } else if (err.message.includes("404")) {
      alert("The requested data was not found. Please try again later.");
    } else {
      alert("An error occurred while fetching data. Please try again later.");
    }
  } else {
    console.error("An unknown error occurred", err);
  }
}
