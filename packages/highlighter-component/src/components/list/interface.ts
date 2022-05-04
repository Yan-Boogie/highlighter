import type { Descendant } from 'slate';

export const ELEMENT_TYPES = ['LIST', 'LIST_ITEM'] as const;

export type ElementType = typeof ELEMENT_TYPES[number];

export type Element = {
  type: ElementType;
  children: Descendant[];
};
