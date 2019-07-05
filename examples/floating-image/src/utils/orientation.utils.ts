import { IVector2d } from "../models/vector-2d";

export function getClientOffset(
  element: HTMLElement,
  clientPosition: IVector2d
): IVector2d {
  const elementDOMRect: DOMRect = element.getBoundingClientRect() as DOMRect;
  const elementCenter: IVector2d = {
    x: elementDOMRect.right / 2 + elementDOMRect.left / 2,
    y: elementDOMRect.bottom / 2 + elementDOMRect.top / 2
  };
  return {
    x: clientPosition.x - elementCenter.x,
    y: clientPosition.y - elementCenter.y
  };
}

export function getRotation(
  clientOffset: IVector2d,
  intensity: number
): string {
  const rotationX = calcRotation(-clientOffset.y) * intensity;
  const rotationY = calcRotation(clientOffset.x) * intensity;
  return `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
}

export function calcRotation(mousePos: number): number {
  return (mousePos / 4000) * 180;
}

export function getTranslation(
  clientOffset: IVector2d,
  intensity: number
): string {
  const offsetX = calcOffset(clientOffset.x) * intensity;
  const offsetY = calcOffset(clientOffset.y) * intensity;
  return `translateX(${offsetX}px) translateY(${offsetY}px)`;
}

export function calcOffset(mousePos: number): number {
  return (-1 * mousePos) / 150;
}
