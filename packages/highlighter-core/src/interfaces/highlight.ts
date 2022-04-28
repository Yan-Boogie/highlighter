import type { Descendant } from 'slate';

export type ElementType = 'SLATE_HIGHLIGHT';

export type Element = {
  type: ElementType;
  children: Descendant[];
};
