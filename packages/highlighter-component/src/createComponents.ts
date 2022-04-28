import type { ComponentCreater, ExtendedTypes } from './interfaces/componentCreator';

export const createComposedComponent = (...rest: ComponentCreater<ExtendedTypes>[]) => rest;
