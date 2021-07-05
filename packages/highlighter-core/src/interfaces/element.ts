import { Ancestor, Element } from '../types';

export interface IElementMethods {
  isAncestor: (value: any) => value is Ancestor;
  isElement: (value: any) => value is Element;
  isElementList: (value: any) => value is Element[];
  isElementProps: (props: any) => props is Partial<Element>;
  matches: (element: Element, props: Partial<Element>) => boolean;
}

export const elementMethods: IElementMethods = {};
