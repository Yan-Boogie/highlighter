import { Point } from '../types';

export enum Position {
  BEFORE = -1,
  AT,
  AFTER,
}

export interface IPointMethods {
  /**
   * Compare a point to another, returning an integer indicating whether the
   * point was before, at, or after the other.
   */
  compare: (another: Point) => Position;

  /**
   * Check if a point is after another.
   */
  isAfter: (another: Point) => boolean;

  /**
   * Check if a point is before another.
   */
  isBefore: (another: Point) => boolean;

  /**
   * Check if a point is exactly equal to another.
   */
  equals: (another: Point) => boolean;
}
