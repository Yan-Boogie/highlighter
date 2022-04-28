import React from 'react';
import { Descendant } from 'slate';
import { Slate, ReactEditor } from 'slate-react';
import { ComponentsContext } from './context';
import type { ComponentCreater, ExtendedTypes } from './interfaces/componentCreator';

export interface IHighlighterSlate {
  value: Descendant[];
  onChange: (v: Descendant[]) => void;
  editor: ReactEditor;
  componentCreator: ComponentCreater<ExtendedTypes>[];
  children: React.ReactNode;
}

export const HighlighterSlate = (props: IHighlighterSlate) => {
  const {
    value,
    onChange,
    editor,
    componentCreator,
    children,
  } = props;

  return (
    <ComponentsContext.Provider value={componentCreator}>
      <Slate
        editor={editor}
        value={value}
        onChange={(v) => onChange(v)}
      >
        {children}
      </Slate>
    </ComponentsContext.Provider>
  );
};
