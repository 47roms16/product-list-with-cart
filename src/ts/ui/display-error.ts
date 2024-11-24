function createErrorElement(message: string) {
  const errorElem = document.createElement("div");
  errorElem.className = "error-msg";
  errorElem.textContent = message;
  return errorElem;
}
