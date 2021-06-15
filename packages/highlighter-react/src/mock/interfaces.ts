/* eslint-disable @typescript-eslint/no-empty-interface */
export interface HighlighterCore {
  window: Window;
  document: Document;
  children: Descendant[];
  selection: Selection;

  /**
   * Injected
   */
  commons: Commons;

  /**
   * Point to the native DOM element from the HighlighterCore node.
   */
  toDOMNode: () => HTMLElement;
  /**
   * Modify the selection field of HighlighterCore
   */
  modifySelection: () => void;
  findKey: (node: Node) => Key;
  findPath: (node: Node) => Path;
  range: (at: Location, to?: Location) => Range;

  /** Common statics */
  isElement: (value: any) => value is Element;
}

export interface Range {
  anchor: Point;
  focus: Point;

  /**
   * Get the intersection of a range with another.
   */
  intersaction: (another: Range) => Range | null;
}
export interface Path {
  numbers: number[];
}

export interface Key {
  id: string;
}
export interface Node {}
export interface Location {
  isLocation: (value: any) => value is Location;
}
export interface Point {}

/**
 * @todo
 * 尋找適合的方式去處理這坨commons的static，前台模式之類的？
 */
export interface Commons {
  Editor: {
    isEditor: (core: HighlighterCore) => boolean;
  };
  Transforms: {
    select: (core: HighlighterCore, target: Location) => void;
    deselect: (core: HighlighterCore) => void;
  };
  Node: Node;
}

export interface Text {
  text: string;
}

export interface Element {
  children: Descendant[];
}

export type Descendant = Element | Text;

export type Ancestor = HighlighterCore | Element;

export type Selection = Range | null;
