import isPlainObject from 'is-plain-object';
import { pointMethods } from './point';
import { pathMethods } from './path';
import type { Point, Path, Range } from '../types';

export interface IRangeMethods {
  /**
   * Get the start and end points of a range, in the order in which they appear
   * in the document.
   */
  edges: (range: Range, options?: { reverse?: boolean }) => [Point, Point];

  /**
   * Get the start point of a range.
   */
  start: (range: Range) => Point;

  /**
   * Get the end point of a range.
   */
  end: (range: Range) => Point;

  /**
   * Check if a range is exactly equal to another.
   */
  equals: (range: Range, another: Range) => boolean;

  /**
   * Check if a range includes a path, a point or part of another range.
   */
  includes: (range: Range, target: Path | Point | Range) => boolean;

  /**
   * Get the intersection of a range with another.
   */
  intersection: (range: Range, another: Range) => Range | null;

  /**
   * Check if a range is backward, meaning that its anchor point appears in the
   * document _after_ its focus point.
   */
  isBackward: (range: Range) => boolean;

  /**
   * Check if a range is forward.
   *
   * This is the opposite of [[Range.isBackward]] and is provided for legibility.
   */
  isForward: (range: Range) => boolean;

  /**
   * Check if a range is collapsed, meaning that both its anchor and focus
   * points refer to the exact same position in the document.
   */
  isCollapsed: (range: Range) => boolean;

  /**
   * Check if a range is expanded.
   *
   * This is the opposite of [[Range.isCollapsed]] and is provided for legibility.
   */
  isExpanded: (range: Range) => boolean;

  /**
   * Check if a value implements the [[Range]] interface.
   */
  isRange: (value: any) => value is Range;
}

export const rangeMethods: IRangeMethods = {
  edges(range, options) {
    const { reverse = false } = options;
    const { anchor, focus } = range;

    return rangeMethods.isBackward(range) === reverse ? [anchor, focus] : [focus, anchor];
  },
  start(range) {
    const [start] = rangeMethods.edges(range);

    return start;
  },
  end(range) {
    const [, end] = rangeMethods.edges(range);

    return end;
  },
  equals(range, another) {
    return pointMethods.equals(range.anchor, another.anchor) && pointMethods.equals(range.focus, another.focus);
  },
  includes(range, target) {
    if (rangeMethods.isRange(target)) {
      if (rangeMethods.includes(range, target.anchor) || rangeMethods.includes(range, target.focus)) {
        return true;
      }

      const [rs, re] = rangeMethods.edges(range);
      const [ts, te] = rangeMethods.edges(target);

      return pointMethods.isBefore(rs, ts) && pointMethods.isAfter(re, te);
    }

    const [start, end] = rangeMethods.edges(range);

    const isAfterStart = pointMethods.isPoint(target)
      ? pointMethods.compare(target, start) >= 0
      : pathMethods.compare(target, start.path) >= 0;

    const isBeforeEnd = pointMethods.isPoint(target)
      ? pointMethods.compare(target, end) <= 0
      : pathMethods.compare(target, end.path) <= 0;

    return isAfterStart && isBeforeEnd;
  },
  intersection(range, another) {
    const [s1, e1] = rangeMethods.edges(range);
    const [s2, e2] = rangeMethods.edges(another);
    const start = pointMethods.isBefore(s1, s2) ? s2 : s1;
    const end = pointMethods.isBefore(e1, e2) ? e1 : e2;

    if (pointMethods.isBefore(end, start)) {
      return null;
    }

    return { anchor: start, focus: end };
  },
  isBackward(range) {
    const { anchor, focus } = range;

    return pointMethods.isAfter(anchor, focus);
  },
  isForward(range) {
    return !rangeMethods.isBackward(range);
  },
  isCollapsed(range) {
    const { anchor, focus } = range;

    return pointMethods.equals(anchor, focus);
  },
  isExpanded(range) {
    return !rangeMethods.isCollapsed(range);
  },
  isRange(value): value is Range {
    return isPlainObject(value) && pointMethods.isPoint(value.anchor) && pointMethods.isPoint(value.focus);
  },
};
