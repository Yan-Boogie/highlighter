import type { Descendant } from 'slate';

export const ELEMENT_TYPES = ['H1', 'H2', 'H3'] as const;

export type ElementType = typeof ELEMENT_TYPES[number];

export type Element = {
  type: ElementType;
  children: Descendant[];
};
