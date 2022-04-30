import type { ComponentCreator, ExtendedTypes, ComponentCreatorWithToolbar } from './interfaces/creators';

/**
 * @todo
 * Remove 'any' type
 */
export const createComposedComponent = (...rest: any): ComponentCreator<ExtendedTypes>[] => rest.flat(2);

export const withToolbar = (
  composed: ComponentCreator<ExtendedTypes>[],
): ComponentCreatorWithToolbar<ExtendedTypes>[] => composed.map((el) => el.withToolbar());
