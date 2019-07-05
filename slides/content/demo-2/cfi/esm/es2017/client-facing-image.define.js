
// ClientFacingImage: Custom Elements Define Library, ES Module/es2017 Target

import { defineCustomElement } from './client-facing-image.core.js';
import { COMPONENTS } from './client-facing-image.components.js';

export function defineCustomElements(win, opts) {
  return defineCustomElement(win, COMPONENTS, opts);
}
