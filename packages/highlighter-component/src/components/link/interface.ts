import type { Descendant } from 'slate';

export const ELEMENT_TYPE = 'LINK' as const;

export type ElementType = typeof ELEMENT_TYPE;

export type Element = {
  type: ElementType;
  url: string;
  children: Descendant[];
};
