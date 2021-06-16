/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Node, Core } from '../types';
import { Key } from '../utils/key';

export interface ICoreMethods {
  /**
   * Find a key for a Slate node.
   */
  findKey: (core: Core, node: Node) => Key;

  /**
   * Find the path of Slate node.
   */
}

export const coreMethods: ICoreMethods = {
  findKey(core: Core, node: Node) {
    let key;

    return key;
  },
};
