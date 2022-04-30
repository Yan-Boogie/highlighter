import type {
  ComponentCreator,
  ExtendedTypes,
  ComponentCreatorWithToolbar,
} from './interfaces/creators';

export const createComposedComponent =
(...rest: ComponentCreator<ExtendedTypes>[]): ComponentCreator<ExtendedTypes>[] => ([...rest]);

export const withToolbar = (
  composed: ComponentCreator<ExtendedTypes>[],
): ComponentCreatorWithToolbar<ExtendedTypes>[] => composed.map((el) => el.withToolbar());
