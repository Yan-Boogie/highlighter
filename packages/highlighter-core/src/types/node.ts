import type {
  Text, Element, Core, Path,
} from '.';

/**
 * The `Node` union type represents all of the different types of nodes that
 * occur in a Highlighter document tree.
 */

export type Node = Core | Element | Text;

/**
 * The `Descendant` union type represents nodes that are descendants in the
 * tree. It is returned as a convenience in certain cases to narrow a value
 * further than the more generic `Node` union.
 */

export type Descendant = Element | Text;

/**
 * The `Ancestor` union type represents nodes that are ancestors in the tree.
 * It is returned as a convenience in certain cases to narrow a value further
 * than the more generic `Node` union.
 */

export type Ancestor = Element | Core;

/**
 * `NodeEntry` objects are returned when iterating over the nodes in a Slate
 * document tree. They consist of the node and its `Path` relative to the root
 * node in the document.
 */

export type NodeEntry<T extends Node = Node> = [T, Path];

/**
 * Convenience type for returning the props of a node.
 */
export type NodeProps =
 | Omit<Core, 'children'>
 | Omit<Element, 'children'>
 | Omit<Text, 'text'>;
