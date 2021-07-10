import type {
  Node, Path, Ancestor, NodeEntry, Descendant, ElementEntry, NodeProps,
} from '../types';

export interface INodeMethods {
  ancestor: (root: Node, path: Path) => Ancestor;
  ancestors: (
    root: Node,
    path: Path,
    options?: {
      reverse?: boolean;
    }
  ) => Generator<NodeEntry<Ancestor>, void, undefined>;
  child: (root: Node, index: number) => Descendant;
  children: (
    root: Node,
    path: Path,
    options?: {
      reverse?: boolean;
    }
  ) => Generator<NodeEntry<Descendant>, void, undefined>;
  common: (root: Node, path: Path, another: Path) => NodeEntry;
  descendant: (root: Node, path: Path) => Descendant;
  descendants: (
    root: Node,
    options?: {
      from?: Path;
      to?: Path;
      reverse?: boolean;
      pass?: (node: NodeEntry) => boolean;
    }
  ) => Generator<NodeEntry<Descendant>, void, undefined>;
  elements: (
    root: Node,
    options?: {
      from?: Path;
      to?: Path;
      reverse?: boolean;
      pass?: (node: NodeEntry) => boolean;
    }
  ) => Generator<ElementEntry, void, undefined>;
  extractProps: (node: Node) => NodeProps;
  first: (root: Node, path: Path) => NodeEntry;
  fragment: (root: Node, range: Range) => Descendant[];
  get: (root: Node, path: Path) => Node;
  has: (root: Node, path: Path) => boolean;
  isNode: (value: any) => value is Node;
  isNodeList: (value: any) => value is Node[];
  last: (root: Node, path: Path) => NodeEntry;
  leaf: (root: Node, path: Path) => Text;
  levels: (
    root: Node,
    path: Path,
    options?: {
      reverse?: boolean;
    }
  ) => Generator<NodeEntry, void, undefined>;
  matches: (node: Node, props: Partial<Node>) => boolean;
  nodes: (
    root: Node,
    options?: {
      from?: Path;
      to?: Path;
      reverse?: boolean;
      pass?: (entry: NodeEntry) => boolean;
    }
  ) => Generator<NodeEntry, void, undefined>;
  parent: (root: Node, path: Path) => Ancestor;
  string: (node: Node) => string;
  texts: (
    root: Node,
    options?: {
      from?: Path;
      to?: Path;
      reverse?: boolean;
      pass?: (node: NodeEntry) => boolean;
    }
  ) => Generator<NodeEntry<Text>, void, undefined>;
}

export const nodeMethods: INodeMethods = {};
