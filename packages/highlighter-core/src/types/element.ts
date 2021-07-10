import type { Descendant, Path } from '.';

/**
 * `Element` objects are a type of node in a Highlighter document that contain other
 * element nodes or text nodes. They can be either "blocks" or "inlines"
 * depending on the Highlighter editor's configuration.
 */

export type Element = {
  children: Descendant[];
};

/**
 * `ElementEntry` objects refer to an `Element` and the `Path` where it can be
 * found inside a root node.
 */
export type ElementEntry = [Element, Path];
