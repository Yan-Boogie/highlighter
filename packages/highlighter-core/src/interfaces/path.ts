import type { Path, Position } from '../types';

export interface IPathMethods {
  /**
   * Get a list of ancestor paths for a given path.
   *
   * The paths are sorted from deepest to shallowest ancestor. However, if the
   * `reverse: true` option is passed, they are reversed.
   * @study Interact with `levels` method
   */
  ancestors: (path: Path, options?: { reverse?: boolean }) => Path[];

  /**
   * Get the common ancestor path of two paths.
   */
  common: (path: Path, another: Path) => Path;

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
   * Check if a path ends after one of the indexes in another.
   */
  endsAfter: (path: Path, another: Path) => boolean;

  /**
   * Check if a path ends at one of the indexes in another.
   */
  endsAt: (path: Path, another: Path) => boolean;

  /**
   * Check if a path ends before one of the indexes in another.
   */
  endsBefore: (path: Path, another: Path) => boolean;

  /**
   * Check if a path is exactly equal to another.
   */
  equals: (path: Path, another: Path) => boolean;

  /**
   * Check if the path of previous sibling node exists
   */
  hasPrevious: (path: Path) => boolean;

  /**
   * Check if a path is after another.
   */
  isAfter: (path: Path, another: Path) => boolean;

  /**
   * Check if a path is an ancestor of another.
   */
  isAncestor: (path: Path, another: Path) => boolean;

  /**
   * Check if a path is before another.
   */
  isBefore: (path: Path, another: Path) => boolean;

  /**
   * Check if a path is a child of another.
   */
  isChild: (path: Path, another: Path) => boolean;

  /**
   * Check if a path is equal to or an ancestor of another.
   */
  isCommon: (path: Path, another: Path) => boolean;

  /**
   * Check if a path is a descendant of another.
   */
  isDescendant: (path: Path, another: Path) => boolean;

  /**
   * Check if a path is the parent of another.
   */
  isParent: (path: Path, another: Path) => boolean;

  /**
   * Check if a value implements the `Path` interface.
   */
  isPath: (value: any) => value is Path;

  /**
   * Check if a path is a sibling of another.
   */
  isSibling: (path: Path, another: Path) => boolean;

  /**
   * Get a list of paths at every level down to a path. Note: this is the same
   * as `Path.ancestors`, but including the path itself.
   *
   * The paths are sorted from shallowest to deepest. However, if the `reverse:
   * true` option is passed, they are reversed.
   */
  levels: (
    path: Path,
    options?: {
      reverse?: boolean;
    }
  ) => Path[];

  /**
   * Given a path, get the path to the next sibling node.
   */
  next: (path: Path) => Path;

  /**
   * Given a path, return a new path referring to the parent node above it.
   */
  parent: (path: Path) => Path;

  /**
   * Given a path, get the path to the previous sibling node.
   */
  previous: (path: Path) => Path;

  /**
   * Get a path relative to an ancestor.
   */
  relative: (path: Path, ancestor: Path) => Path;
}

export const pathMethods: IPathMethods = {
  ancestors(path: Path, options: { reverse?: boolean } = {}): Path[] {
    const { reverse = false } = options;
    let paths = pathMethods.levels(path, options);

    if (reverse) {
      paths = paths.slice(1);
    } else {
      paths = paths.slice(0, -1);
    }

    return paths;
  },
  common(path: Path, another: Path): Path {
    const common: Path = [];

    for (let i = 0; i < path.length && i < another.length; i += 1) {
      const av = path[i];
      const bv = another[i];

      if (av !== bv) {
        break;
      }

      common.push(av);
    }

    return common;
  },
  compare(path, another) {
    const min = Math.min(path.length, another.length);

    for (let i = 0; i < min; i += 1) {
      if (path[i] < another[i]) return -1;
      if (path[i] > another[i]) return 1;
    }

    return 0;
  },
  endsAfter(path: Path, another: Path): boolean {
    const i = path.length - 1;
    const as = path.slice(0, i);
    const bs = another.slice(0, i);
    const av = path[i];
    const bv = another[i];

    return pathMethods.equals(as, bs) && av > bv;
  },
  endsAt(path: Path, another: Path): boolean {
    const i = path.length;
    const as = path.slice(0, i);
    const bs = another.slice(0, i);

    return pathMethods.equals(as, bs);
  },
  endsBefore(path: Path, another: Path): boolean {
    const i = path.length - 1;
    const as = path.slice(0, i);
    const bs = another.slice(0, i);
    const av = path[i];
    const bv = another[i];

    return pathMethods.equals(as, bs) && av < bv;
  },
  equals(path, another) {
    return path.length === another.length && path.every((n, i) => n === another[i]);
  },
  hasPrevious(path: Path): boolean {
    return path[path.length - 1] > 0;
  },
  isAfter(path: Path, another: Path): boolean {
    return pathMethods.compare(path, another) === 1;
  },
  isAncestor(path: Path, another: Path): boolean {
    return path.length < another.length && pathMethods.compare(path, another) === 0;
  },
  isBefore(path: Path, another: Path): boolean {
    return pathMethods.compare(path, another) === -1;
  },
  isChild(path: Path, another: Path): boolean {
    return path.length === another.length + 1 && pathMethods.compare(path, another) === 0;
  },
  isCommon(path: Path, another: Path): boolean {
    return path.length <= another.length && pathMethods.compare(path, another) === 0;
  },
  isDescendant(path: Path, another: Path): boolean {
    return path.length > another.length && pathMethods.compare(path, another) === 0;
  },
  isParent(path: Path, another: Path): boolean {
    return path.length + 1 === another.length && pathMethods.compare(path, another) === 0;
  },
  isPath(value): value is Path {
    return Array.isArray(value) && (!value.length || value.every((i) => typeof i === 'number'));
  },
  isSibling(path: Path, another: Path): boolean {
    if (path.length !== another.length) {
      return false;
    }

    const as = path.slice(0, -1);
    const bs = another.slice(0, -1);
    const al = path[path.length - 1];
    const bl = another[another.length - 1];

    return al !== bl && pathMethods.equals(as, bs);
  },
  levels(
    path: Path,
    options: {
      reverse?: boolean;
    } = {},
  ): Path[] {
    const { reverse = false } = options;
    const list: Path[] = [];

    for (let i = 0; i <= path.length; i += 1) {
      list.push(path.slice(0, i));
    }

    if (reverse) {
      list.reverse();
    }

    return list;
  },
  next(path: Path): Path {
    if (path.length === 0) {
      throw new Error(`Cannot get the next path of a root path [${path}], because it has no next index.`);
    }

    const last = path[path.length - 1];

    return path.slice(0, -1).concat(last + 1);
  },
  parent(path: Path): Path {
    if (path.length === 0) {
      throw new Error(`Cannot get the parent path of the root path [${path}].`);
    }

    return path.slice(0, -1);
  },
  previous(path: Path): Path {
    if (path.length === 0) {
      throw new Error(`Cannot get the previous path of a root path [${path}], because it has no previous index.`);
    }

    const last = path[path.length - 1];

    if (last <= 0) {
      throw new Error(
        `Cannot get the previous path of a first child path [${path}] because it would result in a negative index.`,
      );
    }

    return path.slice(0, -1).concat(last - 1);
  },
  relative(path: Path, ancestor: Path): Path {
    if (!pathMethods.isAncestor(ancestor, path) && !pathMethods.equals(path, ancestor)) {
      throw new Error(
        `Cannot get the relative path of [${path}] inside ancestor [${ancestor}],
        because it is not above or equal to the path.`,
      );
    }

    return path.slice(ancestor.length);
  },
};
