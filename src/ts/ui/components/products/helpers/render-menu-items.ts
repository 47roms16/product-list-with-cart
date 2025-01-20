import { Dessert } from "../../../types/dessert-structure";
import populateUlist from "../../utils/populate-ulist";
import generateMenuItem from "../generate-dessert-html";

export default async function renderMenuUi(desserts: Dessert[]): Promise<void> {
  const menuSection = document.querySelector(".menu__wrap") as HTMLElement;

  const { uListElem } = populateUlist(desserts, generateMenuItem);
  uListElem.className = "menu";

  menuSection.appendChild(uListElem);
}
