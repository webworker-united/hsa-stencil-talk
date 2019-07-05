/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import './stencil.core';




export namespace Components {

  interface ClientFacingImage {
    'height': string;
    'round': boolean;
    'url': string;
    'width': string;
  }
  interface ClientFacingImageAttributes extends StencilHTMLAttributes {
    'height'?: string;
    'round'?: boolean;
    'url'?: string;
    'width'?: string;
  }
}

declare global {
  interface StencilElementInterfaces {
    'ClientFacingImage': Components.ClientFacingImage;
  }

  interface StencilIntrinsicElements {
    'client-facing-image': Components.ClientFacingImageAttributes;
  }


  interface HTMLClientFacingImageElement extends Components.ClientFacingImage, HTMLStencilElement {}
  var HTMLClientFacingImageElement: {
    prototype: HTMLClientFacingImageElement;
    new (): HTMLClientFacingImageElement;
  };

  interface HTMLElementTagNameMap {
    'client-facing-image': HTMLClientFacingImageElement
  }

  interface ElementTagNameMap {
    'client-facing-image': HTMLClientFacingImageElement;
  }


}
