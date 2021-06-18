/* eslint-disable @typescript-eslint/no-unused-vars */
import isPlainObject from 'is-plain-object';
import type { Node, Core } from '../types';
import { Key } from '../utils/key';

// eslint-disable-next-line @typescript-eslint/ban-types
const IS_CORE_CACHE = new WeakMap<object, boolean>();

export interface ICoreMethods {
  /**
   * Find a key for a Slate node.
   */
  findKey: (core: Core, node: Node) => Key;
  isCore: (value: any) => value is Core;
}

export const coreMethods: ICoreMethods = {
  findKey(core: Core, node: Node): Key {
    let key;

    return key;
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
