import React from 'react';
import { Descendant } from 'slate';
import { Slate, ReactEditor } from 'slate-react';
import { ComponentsContext, ToolbarContext } from './context';
import { getCreatorsBundle } from './utils/getCreatorsBundle';
import type { ComponentCreatorUnion } from './interfaces/creators';

export interface IHighlighterSlate {
  value: Descendant[];
  onChange: (v: Descendant[]) => void;
  editor: ReactEditor;
  creatorUnion: ComponentCreatorUnion[];
  children: React.ReactNode;
}

export const HighlighterSlate = (props: IHighlighterSlate) => {
  const {
    value,
    onChange,
    editor,
    creatorUnion,
    children,
  } = props;

  if (!creatorUnion.length) throw new Error('Please add at least one creator');

  const { componentCreator, toolbarCreator } = getCreatorsBundle(creatorUnion);

  return (
    <ComponentsContext.Provider value={componentCreator}>
      <ToolbarContext.Provider value={toolbarCreator}>
        <Slate
          editor={editor}
          value={value}
          onChange={(v) => onChange(v)}
        >
          {children}
        </Slate>
      </ToolbarContext.Provider>
    </ComponentsContext.Provider>
  );
};
