function createErrorElement(message: string) {
  const errorElem = document.createElement("div");
  errorElem.classList.add("error-msg");
  errorElem.textContent = message;
  return errorElem;
}
