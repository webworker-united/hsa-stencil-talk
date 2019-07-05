/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface WwSwitch {
    'selectedSlot': string;
  }
  interface WwSwitchAttributes extends StencilHTMLAttributes {
    'selectedSlot'?: string;
  }
}

declare global {
  interface StencilElementInterfaces {
    'WwSwitch': Components.WwSwitch;
  }

  interface StencilIntrinsicElements {
    'ww-switch': Components.WwSwitchAttributes;
  }


  interface HTMLWwSwitchElement extends Components.WwSwitch, HTMLStencilElement {}
  var HTMLWwSwitchElement: {
    prototype: HTMLWwSwitchElement;
    new (): HTMLWwSwitchElement;
  };

  interface HTMLElementTagNameMap {
    'ww-switch': HTMLWwSwitchElement
  }

  interface ElementTagNameMap {
    'ww-switch': HTMLWwSwitchElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}