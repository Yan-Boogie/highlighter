import type { Point } from '.';

/**
 * `Range` objects are a set of points that refer to a specific span of a Slate
 * document. They can define a span inside a single node or a can span across
 * multiple nodes.
 */

export type Range = {
  anchor: Point;
  focus: Point;
};
