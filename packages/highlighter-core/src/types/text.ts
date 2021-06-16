/**
 * `Text` objects represent the nodes that contain the actual text content of a
 * Highlighter document along with any formatting properties. They are always leaf
 * nodes in the document tree as they cannot contain any children.
 */

export type Text = {
  text: string;
};
