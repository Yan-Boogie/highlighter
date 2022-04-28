import type { Descendant } from 'slate';

export type ElementType = 'LIST_ITEM' | 'LIST';

export type Element = {
  type: ElementType;
  children: Descendant[];
};
