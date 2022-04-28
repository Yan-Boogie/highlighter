import type { Descendant } from 'slate';

export type ElementType = 'TITLE';

export type Element = {
  type: ElementType;
  children: Descendant[];
};
