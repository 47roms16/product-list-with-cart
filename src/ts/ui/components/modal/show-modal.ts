import generateModalWrap from "./modal-html";

export default async function showModalSuccess(): Promise<void> {
  const bodyElem = document.body;

  const modalWrap = generateModalWrap();
  bodyElem.appendChild(modalWrap);
}
