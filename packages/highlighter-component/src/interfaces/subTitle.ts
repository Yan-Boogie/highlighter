import type { Descendant } from 'slate';

export type ElementType = 'SUB_TITLE';

export type Element = {
  type: ElementType;
  children: Descendant[];
};
