import { coreMethods } from './interfaces';
import type { ICoreMethods, IRangeMethods } from './interfaces';
import * as weakMaps from './utils/weak-maps';

type MethodTypes = 'CORE' | 'RANGE' | 'WEAK_MAPS';

type Methodsof<T> = {
  [Key in keyof T]: T[Key];
};

type Methods = {
  CORE: Methodsof<ICoreMethods>;
  RANGE: Methodsof<IRangeMethods>;
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

    case 'WEAK_MAPS':
      return weakMaps[`${methodName}`];

    default:
      return null;
  }
};

export const createMethodsGateway = (): IMethodsGateway => methodsGateway;
