import type { Descendant } from 'slate';

export type ElementType = 'DIV';

export type Element = {
  type: ElementType;
  children: Descendant[];
};
