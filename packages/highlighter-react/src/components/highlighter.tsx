import React, { useMemo } from 'react';
import invariant from 'tiny-invariant';

import { HighlighterCoreContext } from '../hooks';

/**
 * @todo
 * MOCK types -> change to 'highlighter-core' package
 */
import type { HighlighterCore, Descendant } from '../mock/interfaces';

export interface HighlighterProps {
  core: HighlighterCore;
  children: React.ReactNode;
  onChange: (value: Descendant[]) => void;
}

function Highlighter(props: HighlighterProps) {
  const {
    core, children, onChange, ...rest
  } = props;

  const context: [HighlighterCore] = useMemo(() => {
    /** Type-Guard for core & value, using invariant */
    invariant(core.commons.Editor.isEditor(core), `[Highlighter] core is invalid! you passed: ${JSON.stringify(core)}`);

    Object.assign(core, rest);

    return [core];
  }, [core, rest]);

  return <HighlighterCoreContext.Provider value={context}>{children}</HighlighterCoreContext.Provider>;
}

export default Highlighter;
