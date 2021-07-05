import type { Location } from '../types';

export interface ILocationMethods {
  isLocation: (value: any) => value is Location;
}

export const locationMethods: ILocationMethods = {};
