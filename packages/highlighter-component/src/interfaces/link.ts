import type { Descendant } from 'slate';

export type ElementType = 'LINK';

export type Element = {
  type: ElementType;
  url: string;
  children: Descendant[];
};
