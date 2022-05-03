import type { PropsWithChildren } from 'react';
import type { RenderElementProps } from 'slate-react';

export type IElement = Pick<RenderElementProps, 'attributes' | 'children'>;

export type ILeaf = PropsWithChildren<''>;
