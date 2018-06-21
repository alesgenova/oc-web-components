/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
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
  IVibrations,
} from '@openchemistry/types';

declare global {

  namespace StencilComponents {
    interface OcVibrationalSpectrum {
      'vibrations_': IVibrations;
    }
  }

  interface HTMLOcVibrationalSpectrumElement extends StencilComponents.OcVibrationalSpectrum, HTMLStencilElement {}

  var HTMLOcVibrationalSpectrumElement: {
    prototype: HTMLOcVibrationalSpectrumElement;
    new (): HTMLOcVibrationalSpectrumElement;
  };
  interface HTMLElementTagNameMap {
    'oc-vibrational-spectrum': HTMLOcVibrationalSpectrumElement;
  }
  interface ElementTagNameMap {
    'oc-vibrational-spectrum': HTMLOcVibrationalSpectrumElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'oc-vibrational-spectrum': JSXElements.OcVibrationalSpectrumAttributes;
    }
  }
  namespace JSXElements {
    export interface OcVibrationalSpectrumAttributes extends HTMLAttributes {
      'onBarSelected'?: (event: CustomEvent) => void;
      'vibrations_'?: IVibrations;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }

export declare function defineCustomElements(window: any): void;