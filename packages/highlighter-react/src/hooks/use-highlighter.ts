import { createContext, useContext } from 'react';

/**
 * @todo
 * MOCK types -> change to 'highlighter-core' package
 */
import type { HighlightEditor } from '../mock/interfaces';

export const HighlighterContext = createContext<[HighlightEditor] | null>(null);

export const useHighlighter = (): HighlightEditor => {
  const context = useContext(HighlighterContext);

  if (!context) {
    throw new Error('The useHighlighter hook must be used inside the <Highlighter> component context.');
  }

  const [highlightEditor] = context;

  return highlightEditor;
};
