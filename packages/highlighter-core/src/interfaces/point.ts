import isPlainObject from 'is-plain-object';
import { pathMethods } from './path';
import type { Point, Position } from '../types';

export interface IPointMethods {
  /**
   * Compare a point to another, returning `Position`.
   */
  compare: (point: Point, another: Point) => Position;

  /**
   * Check if a point is after another.
   */
  isAfter: (point: Point, another: Point) => boolean;

  /**
   * Check if a point is before another.
   */
  isBefore: (point: Point, another: Point) => boolean;

  /**
   * Check if a point is exactly equal to another.
   */
  equals: (point: Point, another: Point) => boolean;

  /**
   * Check if a value implements the `Point` interface.
   */
  isPoint: (value: any) => value is Point;
}

export const pointMethods: IPointMethods = {
  compare(point, another) {
    const position = pathMethods.compare(point.path, another.path);

    if (position === 0) {
      if (point.offset < another.offset) return -1;
      if (point.offset > another.offset) return 1;

      return 0;
    }

    return position;
  },
  isAfter(point, another) {
    return pointMethods.compare(point, another) === 1;
  },
  isBefore(point, another) {
    return pointMethods.compare(point, another) === -1;
  },
  equals(point, another) {
    return point.offset === another.offset && pathMethods.equals(point.path, another.path);
  },
  isPoint(value): value is Point {
    return isPlainObject(value) && typeof value.offset === 'number' && pathMethods.isPath(value.path);
  },
};
