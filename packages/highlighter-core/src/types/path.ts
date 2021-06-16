/**
 * `Path` arrays are a list of indexes that describe a node's exact position in
 * a Highlighter node tree. Although they are usually relative to the root `Editor`
 * object, they can be relative to any `Node` object.
 */

export type Path = number[];
