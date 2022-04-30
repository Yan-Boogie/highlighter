import React from 'react';
import type { Range, NodeEntry } from 'slate';
import {
  Editable, RenderElementProps, RenderLeafProps, RenderPlaceholderProps,
} from 'slate-react';

export interface IHighlighterEditor {
  decorate?: (entry: NodeEntry) => Range[];
  onDOMBeforeInput?: (event: InputEvent) => void;
  placeholder?: string;
  readOnly?: boolean;
  role?: string;
  style?: React.CSSProperties;
  renderElement?: (props: RenderElementProps) => JSX.Element;
  renderLeaf?: (props: RenderLeafProps) => JSX.Element;
  renderPlaceholder?: (props: RenderPlaceholderProps) => JSX.Element;
  as?: React.ElementType;
}

export const HighlighterEditor = (props: IHighlighterEditor) => {
  const { ...rest } = props;

  return (
    <>
      <Editable {...rest} />
    </>
  );
};
