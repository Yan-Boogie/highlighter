import { createContext, useContext } from 'react';

/**
 * @todo
 * MOCK types -> change to 'highlighter-core' package
 */
import type { HighlighterCore } from '../mock/interfaces';

export const HighlighterCoreContext = createContext<[HighlighterCore] | null>(null);

export const useHighlighterCore = (): HighlighterCore => {
  const context = useContext(HighlighterCoreContext);

  if (!context) {
    throw new Error('The useHighlighterCore hook must be used inside the <Highlighter> component context.');
  }

  const [highlighterCore] = context;

  return highlighterCore;
};
