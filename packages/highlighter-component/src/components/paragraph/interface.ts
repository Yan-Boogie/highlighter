import type { Descendant } from 'slate';

export const ELEMENT_TYPE = 'PARAGRAPH' as const;

export type ElementType = typeof ELEMENT_TYPE;

export type Element = {
  type: ElementType;
  children: Descendant[];
};
