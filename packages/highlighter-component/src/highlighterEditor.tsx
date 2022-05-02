import React from 'react';
import { cx } from '@emotion/css';
import type { Range, NodeEntry } from 'slate';
import {
  Editable, RenderElementProps, RenderLeafProps, RenderPlaceholderProps,
} from 'slate-react';
import { classNames } from './classes';
import { Toolbar, useEventEmitter, HoveringToolbar } from './toolbar';

interface ISlateEditor extends React.TextareaHTMLAttributes<HTMLDivElement> {
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

export interface IHighlighterEditor extends ISlateEditor {
  wrapperClassName?: string;
  editorClassName?: string;
}

export const HighlighterEditor = (props: IHighlighterEditor) => {
  const { wrapperClassName, editorClassName, ...rest } = props;

  const wrapperRef = useEventEmitter();

  return (
    <div ref={wrapperRef} id="Highlighter-Editor" className={cx(wrapperClassName, classNames.editorWrapper)}>
      <Toolbar />
      <HoveringToolbar />
      <Editable className={editorClassName} {...rest} />
    </div>
  );
};
