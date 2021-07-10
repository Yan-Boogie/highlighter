import { pathMethods } from './path';
import { pointMethods } from './point';
import { rangeMethods } from './range';

import type { Location } from '../types';

export interface ILocationMethods {
  /**
   * Check if a value implements the `Location` interface.
   */
  isLocation: (value: any) => value is Location;
}

export const locationMethods: ILocationMethods = {
  isLocation(value: any): value is Location {
    return pathMethods.isPath(value) || pointMethods.isPoint(value) || rangeMethods.isRange(value);
  },
};
