/* eslint-disable @typescript-eslint/no-unused-vars */
import isPlainObject from 'is-plain-object';
import type { Node, Core, Path } from '../types';
import { Key } from '../utils/key';
import { NODE_TO_INDEX, NODE_TO_PARENT, NODE_TO_KEY } from '../utils/weak-maps';

// eslint-disable-next-line @typescript-eslint/ban-types
const IS_CORE_CACHE = new WeakMap<object, boolean>();

export interface ICoreMethods {
  /**
   * Find a key for a Highlighter node.
   */
  findKey: (node: Node) => Key;

  /**
   * @Recursive
   * Find the path of Highlighter node.
   */
  findPath: (child: Node, path?: Path) => Path;
  isCore: (value: any) => value is Core;
}

export const coreMethods: ICoreMethods = {
  findKey(node: Node): Key {
    const key = NODE_TO_KEY.get(node);

    return (
      key ||
      (() => {
        const newKey = new Key();

        NODE_TO_KEY.set(node, newKey);

        return newKey;
      })()
    );
  },
  findPath(child: Node, path?: Path): Path {
    const rPath: Path = path || [];
    const parent = NODE_TO_PARENT.get(child);

    if (parent === null) {
      if (!coreMethods.isCore(child)) {
        throw new Error(`Unable to find the path for Highlighter node: ${JSON.stringify(child)}`);
      }

      return rPath;
    }

    const idx = NODE_TO_INDEX.get(child);

    if (!idx) {
      throw new Error(`Unable to find the path for Highlighter node: ${JSON.stringify(child)}`);
    }

    rPath.unshift(idx);

    return coreMethods.findPath(parent, rPath);
  },
  isCore(value: any): value is Core {
    if (!isPlainObject(value)) return false;

    const cachedIsCore = IS_CORE_CACHE.get(value);

    if (cachedIsCore !== undefined) {
      return cachedIsCore;
    }

    /**
     * @todo
     * CORE determinations
     */
    const isCore = true;

    IS_CORE_CACHE.set(value, isCore);

    return isCore;
  },
};
