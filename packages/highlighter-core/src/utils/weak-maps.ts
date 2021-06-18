import type { Node, Ancestor } from '..';
import type { Key } from './key';

/**
 * Two weak maps that allow us rebuild a path given a node. They are populated
 * at render time such that after a render occurs we can always backtrack.
 */
export const NODE_TO_INDEX: WeakMap<Node, number> = new WeakMap();
export const NODE_TO_PARENT: WeakMap<Node, Ancestor> = new WeakMap();

/**
 * Weak maps that allow us to go between Highlighter nodes and DOM nodes. These
 * are used to resolve DOM event-related logic into Highlighter actions.
 */
export const NODE_TO_KEY: WeakMap<Node, Key> = new WeakMap();
