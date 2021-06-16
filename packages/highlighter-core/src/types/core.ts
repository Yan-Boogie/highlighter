import type { Range, Descendant } from '.';

export type Selection = Range | null;

/**
 * The `Core` interface stores all the state of a Highlighter core. It is extended
 * by plugins that wish to add their own helpers and implement new behaviors.
 */

export interface Core {
  window: Window;
  document: Document;
  children: Descendant[];
  selection: Selection;
}
