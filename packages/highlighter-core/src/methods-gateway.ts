import {
  coreMethods,
  rangeMethods,
  elementMethods,
  locationMethods,
  nodeMethods,
  pointMethods,
  textMethods,
} from './interfaces';
import type {
  ICoreMethods,
  IRangeMethods,
  IElementMethods,
  ILocationMethods,
  INodeMethods,
  IPointMethods,
  ITextMethods,
} from './interfaces';
import * as weakMaps from './utils/weak-maps';

type MethodTypes = 'CORE' | 'RANGE' | 'ELEMENT' | 'LOCATION' | 'NODE' | 'POINT' | 'TEXT' | 'WEAK_MAPS';

type Methodsof<T> = {
  [Key in keyof T]: T[Key];
};

type Methods = {
  CORE: Methodsof<ICoreMethods>;
  RANGE: Methodsof<IRangeMethods>;
  ELEMENT: Methodsof<IElementMethods>;
  LOCATION: Methodsof<ILocationMethods>;
  NODE: Methodsof<INodeMethods>;
  POINT: Methodsof<IPointMethods>;
  TEXT: Methodsof<ITextMethods>;
  WEAK_MAPS: Methodsof<typeof weakMaps>;
};

export interface IMethodsGateway {
  <T extends MethodTypes, U extends keyof Methods[T]>(methodType: T, methodName: U): Methods[T][U];
}

const methodsGateway: IMethodsGateway = <T extends MethodTypes, U extends keyof Methods[T]>(
  methodType: T,
  methodName: U,
) => {
  switch (methodType) {
    case 'CORE':
      return coreMethods[`${methodName}`];

    case 'RANGE':
      return rangeMethods[`${methodName}`];

    case 'ELEMENT':
      return elementMethods[`${methodName}`];

    case 'LOCATION':
      return locationMethods[`${methodName}`];

    case 'NODE':
      return nodeMethods[`${methodName}`];

    case 'POINT':
      return pointMethods[`${methodName}`];

    case 'TEXT':
      return textMethods[`${methodName}`];

    case 'WEAK_MAPS':
      return weakMaps[`${methodName}`];

    default:
      return null;
  }
};

export const createMethodsGateway = (): IMethodsGateway => methodsGateway;
