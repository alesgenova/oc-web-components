/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLElement {
    componentOnReady?: () => Promise<this | null>;
  }

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}

import {
  IChemJson,
} from '@openchemistry/types';

declare global {

  namespace StencilComponents {
    interface OcMoleculeMoljs {
      'cjsonProp': IChemJson | string;
    }
  }

  interface HTMLOcMoleculeMoljsElement extends StencilComponents.OcMoleculeMoljs, HTMLStencilElement {}

  var HTMLOcMoleculeMoljsElement: {
    prototype: HTMLOcMoleculeMoljsElement;
    new (): HTMLOcMoleculeMoljsElement;
  };
  interface HTMLElementTagNameMap {
    'oc-molecule-moljs': HTMLOcMoleculeMoljsElement;
  }
  interface ElementTagNameMap {
    'oc-molecule-moljs': HTMLOcMoleculeMoljsElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'oc-molecule-moljs': JSXElements.OcMoleculeMoljsAttributes;
    }
  }
  namespace JSXElements {
    export interface OcMoleculeMoljsAttributes extends HTMLAttributes {
      'cjsonProp'?: IChemJson | string;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }

export declare function defineCustomElements(window: any): void;