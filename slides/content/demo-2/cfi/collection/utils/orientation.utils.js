export function getClientOffset(element, clientPosition) {
    const elementDOMRect = element.getBoundingClientRect();
    const elementCenter = {
        x: elementDOMRect.right / 2 + elementDOMRect.left / 2,
        y: elementDOMRect.bottom / 2 + elementDOMRect.top / 2
    };
    return {
        x: clientPosition.x - elementCenter.x,
        y: clientPosition.y - elementCenter.y
    };
}
export function getRotation(clientOffset) {
    const rotationX = calcRotation(-clientOffset.y);
    const rotationY = calcRotation(clientOffset.x);
    return `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
}
export function calcRotation(mousePos) {
    return (mousePos / 4000) * 180;
}
export function getTranslation(clientOffset) {
    const offsetX = calcOffset(clientOffset.x);
    const offsetY = calcOffset(clientOffset.y);
    return `translateX(${offsetX}px) translateY(${offsetY}px)`;
}
export function calcOffset(mousePos) {
    return (-1 * mousePos) / 150;
}
