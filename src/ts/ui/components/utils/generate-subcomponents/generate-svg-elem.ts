export default function generateSVGElem(
  className: string,
  src: string
): SVGSVGElement {
  const iconElem: SVGSVGElement = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  iconElem.classList.add(className);

  const iconSrc: SVGUseElement = createSVGIconSrcElem(src);
  iconElem.appendChild(iconSrc);

  return iconElem;
}

function createSVGIconSrcElem(src: string): SVGUseElement {
  const iconSrc: SVGUseElement = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "use"
  );
  iconSrc.setAttribute("href", src);

  return iconSrc;
}
