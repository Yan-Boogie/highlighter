import type { Text } from 'slate';

export type ElementType = 'DIVIDER';

export type Element = {
  type: ElementType;
  children: [Text];
};
