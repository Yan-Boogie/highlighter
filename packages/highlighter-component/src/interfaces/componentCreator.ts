import { Heading, IElement } from '../components';

export type ExtendedTypes = Heading.ElementType;

export type ComponentCreater<T extends ExtendedTypes> = {
  type: T;
  component: (props: IElement) => JSX.Element;
};
