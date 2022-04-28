import type { Descendant } from 'slate';

export type ElementType = 'PARAGRAPH';

export type Element = {
  type: ElementType;
  children: Descendant[];
};
