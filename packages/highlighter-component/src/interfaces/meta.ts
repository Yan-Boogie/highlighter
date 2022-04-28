import type { Descendant } from 'slate';

export type ElementType = 'META';

export type Element = {
  type: ElementType;
  children: Descendant[];
};
