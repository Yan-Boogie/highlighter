import { coreMethods } from './interfaces';
import type { ICoreMethods, IRangeMethods } from './interfaces';

type MethodTypes = 'CORE' | 'RANGE';

type Methodsof<T> = {
  [Key in keyof T]: T[Key];
};

type Methods = {
  CORE: Methodsof<ICoreMethods>;
  RANGE: Methodsof<IRangeMethods>;
};

export interface IMethodsGateway {
  <T extends MethodTypes, U extends keyof Methods[T]>(methodType: T, methodName: U): Methods[T][U];
}

const methodsGateway: IMethodsGateway = <T extends MethodTypes>(methodType: T, methodName: keyof Methods[T]) => {
  switch (methodType) {
    case 'CORE':
      return coreMethods[`${methodName}`];
    default:
      return null;
  }
};

export default function createMethodsGateway() {
  return methodsGateway;
}
