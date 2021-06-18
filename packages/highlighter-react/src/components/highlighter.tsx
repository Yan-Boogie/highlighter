import React, { useMemo } from 'react';
import invariant from 'tiny-invariant';
import type { IMethodsGateway, Core as HighlighterCore, Descendant } from 'highlighter-core';

import { HighlighterCoreContext } from '../hooks';

export interface HighlighterProps {
  core: HighlighterCore;
  methods: IMethodsGateway;
  children: React.ReactNode;
  onChange: (value: Descendant[]) => void;
}

function Highlighter(props: HighlighterProps) {
  const {
    core, children, onChange, methods, ...rest
  } = props;

  const context: [HighlighterCore] = useMemo(() => {
    /** Type-Guard for core & value, using invariant */
    invariant(methods('CORE', 'isCore')(core), `[Highlighter] core is invalid! you passed: ${JSON.stringify(core)}`);

    Object.assign(core, rest);

    return [core];
  }, [core, rest, methods]);

  return <HighlighterCoreContext.Provider value={context}>{children}</HighlighterCoreContext.Provider>;
}

export default Highlighter;
