import { Image } from "../../../types/dessert-structure";

import "./img.css";

export default function generateImgElements(
  imgSrc: Image,
  itemName: string
): HTMLPictureElement {
  const pictureElem: HTMLPictureElement = document.createElement("picture");
  pictureElem.className = "menu-item__picture";

  const desktopSrc = createDesktopSrc(imgSrc.desktop);
  const tabletSrc = createTabletSrc(imgSrc.tablet);
  const mobileSrc = createImgElem(imgSrc.mobile, itemName); // fallback and default image

  pictureElem.appendChild(desktopSrc);
  pictureElem.appendChild(tabletSrc);
  pictureElem.appendChild(mobileSrc);

  return pictureElem;
}

function createDesktopSrc(desktopImg: string): HTMLSourceElement {
  const sourceDesktop: HTMLSourceElement = document.createElement("source");
  sourceDesktop.media = "(min-width:1024px)";
  sourceDesktop.srcset = `${desktopImg}`;

  return sourceDesktop;
}

function createTabletSrc(tabletImg: string): HTMLSourceElement {
  const sourceTablet: HTMLSourceElement = document.createElement("source");
  sourceTablet.media = "(min-width:640px)";
  sourceTablet.srcset = `${tabletImg}`;

  return sourceTablet;
}

function createImgElem(imgSrc: string, itemName: string): HTMLImageElement {
  const imgElem = document.createElement("img");
  imgElem.className = "menu-item__img";
  imgElem.src = `${imgSrc}`;
  imgElem.alt = `${itemName}`;

  return imgElem;
}
