import React, { useMemo } from 'react';
import invariant from 'tiny-invariant';

import { HighlighterContext } from '../hooks';

/**
 * @todo
 * MOCK types -> change to 'highlighter-core' package
 */
import type { HighlightEditor, Descendant, Commons } from '../mock/interfaces';

export interface HighlighterProps {
  editor: HighlightEditor;
  children: React.ReactNode;
  onChange: (value: Descendant[]) => void;
  commons: Commons;
}

function Highlighter(props: HighlighterProps) {
  const {
    editor, children, onChange, commons, ...rest
  } = props;

  const context: [HighlightEditor] = useMemo(() => {
    /** Type-Guard for editor & value, using invariant */
    invariant(
      commons.Editor.isEditor(editor),
      `[Highlighter] editor is invalid! you passed: ${JSON.stringify(editor)}`,
    );

    Object.assign(editor, rest);

    return [editor];
  }, [commons, editor, rest]);

  return <HighlighterContext.Provider value={context}>{children}</HighlighterContext.Provider>;
}

export default Highlighter;
