import type { Descendant } from 'slate';

export type ElementType = 'H1' | 'H2' | 'H3' | 'H4' | 'H5' | 'H6';

export type Element = {
  type: ElementType;
  children: Descendant[];
};
