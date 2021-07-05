import type { Path, Position } from '../types';

export interface IPathMethods {
  /**
   * Compare a path to another, returning an integer indicating whether the path
   * was before, at, or after the other.
   *
   * Note: Two paths of unequal length can still receive a `0` result if one is
   * directly above or below the other. If you want exact matching, use
   * [[Path.equals]] instead.
   */
  compare: (path: Path, another: Path) => Position;
  /**
   * Check if a path is exactly equal to another.
   */
  equals: (path: Path, another: Path) => boolean;
  /**
   * Check if a value implements the `Path` interface.
   */
  isPath: (value: any) => value is Path;
}

export const pathMethods: IPathMethods = {
  compare(path, another) {
    const min = Math.min(path.length, another.length);

    for (let i = 0; i < min; i += 1) {
      if (path[i] < another[i]) return -1;
      if (path[i] > another[i]) return 1;
    }

    return 0;
  },
  equals(path, another) {
    return path.length === another.length && path.every((n, i) => n === another[i]);
  },
  isPath(value): value is Path {
    return Array.isArray(value) && (!value.length || value.every((i) => typeof i === 'number'));
  },
};
