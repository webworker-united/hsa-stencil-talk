import * as OrientationUtils from "../../utils/orientation.utils";
export class ClientFacingImage {
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
            transform: OrientationUtils.getRotation(this.clientOffset)
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
            transform: OrientationUtils.getTranslation(this.clientOffset) +
                OrientationUtils.getRotation(this.clientOffset)
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
        this.clientOffset = OrientationUtils.getClientOffset(this.element, clientPosition);
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
    static get style() { return "/**style-placeholder:client-facing-image:**/"; }
}
