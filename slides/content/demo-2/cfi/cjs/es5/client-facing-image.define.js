"use strict";
// ClientFacingImage: Custom Elements Define Library, ES Module/es5 Target
Object.defineProperty(exports, "__esModule", { value: true });
var client_facing_image_core_js_1 = require("./client-facing-image.core.js");
var client_facing_image_components_js_1 = require("./client-facing-image.components.js");
function defineCustomElements(win, opts) {
    return client_facing_image_core_js_1.defineCustomElement(win, client_facing_image_components_js_1.COMPONENTS, opts);
}
exports.defineCustomElements = defineCustomElements;
