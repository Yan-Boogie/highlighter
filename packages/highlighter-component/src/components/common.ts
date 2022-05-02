import type { RenderElementProps, RenderLeafProps } from 'slate-react';

export type IElement = Pick<RenderElementProps, 'attributes' | 'children'>;

export type ILeaf = Pick<RenderLeafProps, 'attributes' | 'children'>;
