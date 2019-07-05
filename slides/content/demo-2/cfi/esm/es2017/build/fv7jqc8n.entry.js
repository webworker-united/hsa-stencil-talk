import { h } from '../client-facing-image.core.js';

function getClientOffset(element, clientPosition) {
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
function getRotation(clientOffset) {
    const rotationX = calcRotation(-clientOffset.y);
    const rotationY = calcRotation(clientOffset.x);
    return `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
}
function calcRotation(mousePos) {
    return (mousePos / 4000) * 180;
}
function getTranslation(clientOffset) {
    const offsetX = calcOffset(clientOffset.x);
    const offsetY = calcOffset(clientOffset.y);
    return `translateX(${offsetX}px) translateY(${offsetY}px)`;
}
function calcOffset(mousePos) {
    return (-1 * mousePos) / 150;
}

class ClientFacingImage {
    constructor() {
        this.url = "";
        this.width = "200px";
        this.height = "200px";
        this.round = true;
        this.clientOffset = { x: 0, y: 0 };
    }
    get imgStyle() {
        return {
            backgroundImage: `url(${this.url})`,
            width: this.width,
            height: this.height,
            transform: getRotation(this.clientOffset)
        };
    }
    get imgClass() {
        return {
            cfi__projector: true,
            "cfi__projector--round": this.round
        };
    }
    get backdropStyle() {
        return {
            width: this.width,
            height: this.height,
            transform: getTranslation(this.clientOffset) +
                getRotation(this.clientOffset)
        };
    }
    get backdropClass() {
        return {
            cfi__backdrop: true,
            "cfi__backdrop--round": this.round
        };
    }
    handleMouseMove($event) {
        const clientPosition = { x: $event.clientX, y: $event.clientY };
        this.clientOffset = getClientOffset(this.element, clientPosition);
    }
    render() {
        return (h("div", { class: "cfi" },
            h("div", { class: this.backdropClass, style: this.backdropStyle }),
            h("div", { class: this.imgClass, style: this.imgStyle })));
    }
    static get is() { return "client-facing-image"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "clientOffset": {
            "state": true
        },
        "element": {
            "elementRef": true
        },
        "height": {
            "type": String,
            "attr": "height"
        },
        "round": {
            "type": Boolean,
            "attr": "round"
        },
        "url": {
            "type": String,
            "attr": "url"
        },
        "width": {
            "type": String,
            "attr": "width"
        }
    }; }
    static get listeners() { return [{
            "name": "window:mousemove",
            "method": "handleMouseMove",
            "passive": true
        }]; }
    static get style() { return ".cfi{position:relative}.cfi__projector{position:absolute;top:0;left:0;background-repeat:no-repeat;background-size:cover;background-position:50%;border:2px solid #000}.cfi__projector--round{border-radius:50%}.cfi__backdrop{background-color:#000;border:2px solid #000}.cfi__backdrop--round{border-radius:50%}"; }
}

export { ClientFacingImage };
