/* eslint-disable no-continue */
/* eslint-disable no-restricted-syntax */
import isPlainObject from 'is-plain-object';
import { nodeMethods } from './node';
import { coreMethods } from './core';
import type { Ancestor, Element } from '../types';

export interface IElementMethods {
  /**
   * Check if a value implements the 'Ancestor' interface.
   */
  isAncestor: (value: any) => value is Ancestor;

  /**
   * Check if a value implements the `Element` interface.
   */
  isElement: (value: any) => value is Element;

  /**
   * Check if a value is an array of `Element` objects.
   */
  isElementList: (value: any) => value is Element[];

  /**
   * Check if a set of props is a partial of Element.
   */
  isElementProps: (props: any) => props is Partial<Element>;

  /**
   * Check if an element matches set of properties.
   *
   * Note: this checks custom properties, and it does not ensure that any
   * children are equivalent.
   */
  matches: (element: Element, props: Partial<Element>) => boolean;
}

export const elementMethods: IElementMethods = {
  isAncestor(value): value is Ancestor {
    return isPlainObject(value) && nodeMethods.isNodeList(value.children);
  },
  isElement(value: any): value is Element {
    return isPlainObject(value) && nodeMethods.isNodeList(value.children) && !coreMethods.isCore(value);
  },
  isElementList(value: any): value is Element[] {
    return Array.isArray(value) && value.every((val) => elementMethods.isElement(val));
  },
  isElementProps(props): props is Partial<Element> {
    return 'children' in props && props.children !== undefined;
  },
  matches(element: Element, props: Partial<Element>): boolean {
    for (const key in props) {
      if (key === 'children') {
        continue;
      }

      if (element[key] !== props[key]) {
        return false;
      }
    }

    return true;
  },
};
