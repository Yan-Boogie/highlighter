import type { Text } from 'slate';

export const ELEMENT_TYPE = 'DIVIDER' as const;

export type ElementType = typeof ELEMENT_TYPE;

export type Element = {
  type: ElementType;
  children: [Text];
};
