import type { Point, Path, Range } from '../types';

export interface IRangeMethods {
  /**
   * Get the end point of a range.
   */
  readonly end: Point;

  /**
   * Get the start and end points of a range, in the order in which they appear
   * in the document.
   */
  edges: (options?: { reverse?: boolean }) => [Point, Point];

  /**
   * Check if a range is exactly equal to another.
   */
  equals: (another: Range) => boolean;

  /**
   * Check if a range includes a path, a point or part of another range.
   */
  includes: (target: Path | Point | Range) => boolean;

  /**
   * Get the intersection of a range with another.
   */
  intersection: (another: Range) => Range | null;
}
