import type { Descendant } from 'slate';

export const ELEMENT_TYPE = ['LIST', 'LIST_ITEM'] as const;

export type ElementType = typeof ELEMENT_TYPE[number];

export type Element = {
  type: ElementType;
  children: Descendant[];
};
