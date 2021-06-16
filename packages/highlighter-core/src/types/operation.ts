import type { Path, Node } from '.';

enum OperationType {
  INSERT_NODE = 'insert_node',
  INSERT_TEXT = 'insert_text',
  MERGE_NODE = 'merge_node',
  MOVE_NODE = 'move_node',
  REMOVE_NODE = 'remove_node',
  REMOVE_TEXT = 'remove_text',
  SET_NODE = 'set_node',
  SET_SELECTION = 'set_selection',
  SPLIT_NODE = 'split_node',
}

export type InsertNodeOperation = {
  type: OperationType.INSERT_NODE;
  path: Path;
  node: Node;
};

export type InsertTextOperation = {
  type: OperationType.INSERT_TEXT;
  path: Path;
  offset: number;
  text: string;
};
